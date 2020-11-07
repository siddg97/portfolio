var express = require("express");
var nodeMailer = require("nodemailer");
var validator = require("validator");
var empty = require("is-empty");

var router = express.Router();
var transport = {
    host: process.env.MHOST,
    auth: {
        user: process.env.CUSER,
        pass: process.env.CPASS,
    },
};

var transporter = nodeMailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(">>>>>>>>>> Server is ready to send messages");
    }
});

function validate(data) {
    var err = {};
    if (empty(data.name)) {
        err.name = "Name is required";
    }
    if (empty(data.email)) {
        err.email = "Email is required";
    } else {
        if (!validator.isEmail(data.email)) {
            err.email = "Invalid email";
        }
    }
    if (empty(data.subject)) {
        err.subject = "Subject is required";
    }
    if (empty(data.message)) {
        err.message = "Message is required";
    }
    return err;
}

router.post("/", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var mailContent = `Name: ${name}\nEmail:${email}\n\n${message}`;

    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };
    // VALIDATION
    const err = validate(data);
    const isValid = empty(err);

    if (isValid) {
        // VALID DATA
        var mail = {
            from: email,
            to: "g.sidd97@gmail.com",
            text: mailContent,
            subject: "[Personal Website]: " + subject,
        };

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: "fail",
                });
            } else {
                res.json({
                    msg: "success",
                });
            }
        });
    } else {
        // INVALID DATA
        res.json({
            msg: "fail",
            errors: err,
            payload: data,
        });
    }
});

module.exports = router;
