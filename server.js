const express 				= require('express'),
			app 						= express(),
			port 						= process.env.PORT || 8081,
			expressLayouts 	= require('express-ejs-layouts'),
			bodyParser			= require('body-parser'),
			nodeMailer			= require('nodemailer');

// Static asset location
app.use(express.static(__dirname + ('/public')));

// Set EJS as our template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Use body parser to grab info from a form. urlencoded is what our form will be processed as.
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes
app.use(require('./app/routes'));

// Start the server
app.listen(port, () => {
	console.log('App started on localhost:8081')
})