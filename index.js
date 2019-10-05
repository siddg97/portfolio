require('dotenv').config()
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
	origin: process.env.CORS_ORIGIN || 'localhost:3000',
	methods: "POST"
}));

app.use('/send-mail',mailer);

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT;

app.listen(port,console.log("Server listening on port "+ port));