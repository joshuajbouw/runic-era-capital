const nodemailer = require('nodemailer');
			express = require('express');

module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact,
	showTech: showTech,
	show404: show404,
	processContact: processContact
};

function showHome(req, res) {
	res.render('pages/home');
}

function showAbout(req, res) {
	res.render('pages/about');
}

function showContact(req, res) {
	res.render('pages/contact');
}

function showTech(req, res) {
	res.render('pages/tech');
}

function show404(req, res, next) {
	res.status(404);
	res.render('pages/404');
}

function processContact (req,res) {
	var name = req.body.contactformname;
	var email = req.body.contactformemail;
	var phone = req.body.contactformphone;
	var context = req.body.contactformservice;
	var subject = req.body.contactformsubject;
	var message = req.body.contactformmessage;
	console.log('\nCONTACT FORM DATA: '+ name + ' '+email + ' '+ subject+'\n');

	// Setup Nodemailer transport
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'gritt.n.auld@gmail.com',
			pass: process.env.GMAIL_PASS
		}
	});

	// Setup the email parameters
	var mailOptions = {
		// From: doesn't appear to be working, need to fix or just ditch completely.
		from: req.body.contactformname + ' &lt;' + req.body.contactformemail + '&gt;',
		to: 'info@runicera.capital',
		subject: 'Contact Form | ' + req.body.contactformname + ' | ' + req.body.contactformsubject,
		text: req.body.contactformname + ' &lt;' + req.body.contactformemail + '&gt;' + ' MESSAGE: ' + req.body.contactformmessage
	}
	// Send mail with defined transport
	transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('\nERROR: ' + error+'\n');
    res.sendStatus(500);
    console.log('Contact form error.');
    // res.json({yo: 'error'});
	  } else {
    console.log('\nRESPONSE SENT: ' + info.response+'\n');
    res.sendStatus(200);
		// res.json({yo: info.response});
		console.log('Contact form sent from successfully.');
		req.flash('success', 'Successfully sent message!');
		res.redirect('/contact');
	  };
	});
};