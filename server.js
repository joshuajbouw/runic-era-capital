require('dotenv').config();

const express 				= require('express'),
			app 						= express(),
			port 						= process.env.PORT,
			expressLayouts 	= require('express-ejs-layouts'),
			bodyParser			= require('body-parser'),
			nodeMailer			= require('nodemailer'),
			session					= require('express-session'),
			cookieParser		= require('cookie-parser'),
			flash						= require('connect-flash');

// Set sessions and cookie parser
app.use(cookieParser());
app.use(session({
	secret: process.env.SESSION_SECRET,
	name: 'Runic_Capital_Cookie',
	cookie: { maxAge: 60000 },
	resave: false, // Forces session to be saved back to the store.
	saveUninitialized: false // Don't save unmodified sessions. Keeps everything light weight.
}));
app.use(flash());

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
	console.log('App started on localhost:80')
})