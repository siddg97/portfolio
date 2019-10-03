var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');
var mailer = require('./mailRouter.js');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client/build')));

app.use(cors({
	origin: "https://siddg.info",
	methods: "POST"
}));

app.use('/send-mail',mailer);

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port,console.log("Server listening on port "+ port));