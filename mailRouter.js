var express = require('express');
var nodeMailer = require('nodemailer');

var router = express.Router();
var transport = {
	host: process.env.MHOST,
	auth: {
		user: process.env.CUSER,
		pass: process.env.CPASS
	}
};

var transporter = nodeMailer.createTransport(transport);
transporter.verify((error,success) => {
	if(error){
		console.log(error);
	} else {
		console.log('>>>>>>>>>> Server is ready to send messages');
	}
});

router.post('/', (req,res,next) => {
	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;
	var mailContent = 'Name: '+name+' \nEmail: '+email+' \nMessage: \n'+message+'\n';

	var mail = {
		from: email,
		to: 'g.sidd97@gmail.com',
		text: mailContent,
		subject:subject
	}

	transporter.sendMail(mail, (err,data) => {
		if(err){
			res.json({
				msg:'fail'
			});
		} else {
			res.json({
				msg:'success'
			});
		}
	});
});

module.exports = router;