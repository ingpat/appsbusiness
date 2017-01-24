var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

	res.render('contacts/index');

});
router.post('/send', (req, res, next) => {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'ingpatrickls@gmail.com',
			pass: '!detty1Pat79'
		}
	});

	var mailOptions = {
		from: 'Seraphin Claudette <ingpatrickl1s@gmail.com>',
		to: 'ingpatrickls@gmail.com',
		subject: 'Website Submition',
		text: 'You have a new submission with the following details... Name ' + req.body.name + ' email' + req.body.email + 'Message' + req.body.message,
		html: '<p>You got a new submission with the folowing deails</p><ul><li> Name:' + req.body.name + '</li><li> Email:' + req.body.email + ' </li> <li>Message:' + req.body.message + '</li></ul>'
	};
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
			res.redirect('/');
		}
		else {
			console.log('Message Sent' + info.response);
			res.redirect('/');
		}

	});
});
module.exports = router;