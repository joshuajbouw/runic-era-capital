const express 				= require('express'),
			app 						= express(),
			port 						= process.env.PORT || 8081,
			expressLayouts 	= require('express-ejs-layouts');

// Static asset location
app.use(express.static(__dirname + ('/public')));

// Set EJS as our template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set routes
app.use(require('./app/routes'));

// Start the server
app.listen(port, () => {
	console.log('App started on localhost:8081')
})