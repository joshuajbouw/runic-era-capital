const nodemailer 		= require('nodemailer'),
			express 			= require('express'),
			i18n 					= require('i18n');

module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact,
	showTech: showTech,
	show404: show404,
	processContact: processContact
};

function showHome(req, res) {
	res.render('pages/home', {
		title: i18n.__('Welcome')
	});
}

function showAbout(req, res) {
	res.render('pages/about', {
		title: i18n.__('About Us')
	});
}

function showContact(req, res) {
  res.render('pages/contact', {
  	title: i18n.__('Contact Us'),
    success: req.flash('success')
  });
}

function showTech(req, res) {
	res.render('pages/tech', {
		title: i18n.__('Technology')
	});
}

function show404(req, res, next) {
	res.status(404);
	res.render('pages/404', {
		title: i18n.__('What lands have you wandered on...')
	});
}

function processContact (req,res) {
	var name = req.body.contactformname;
	var email = req.body.contactformemail;
	var phone = req.body.contactformphone;
	var context = req.body.contactformservice;
	var subject = req.body.contactformsubject;
	var message = req.body.contactformmessage;
	console.log('\nCONTACT FORM: '+ name + ' '+email + ' '+ subject+'\n');

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
		text: 'FROM: ' + req.body.contactformname + ' &lt;' + req.body.contactformemail + '&gt;' + ' MESSAGE: ' + req.body.contactformmessage
	}
		// Send mail with defined transport
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log('\nERROR: ' + error+'\n');
		}
		console.log('Contact form sent from successfully.');
		req.flash('success');
		res.redirect('/contact');
		// showSuccess;
	});
};