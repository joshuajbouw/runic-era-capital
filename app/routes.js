// Create a new express router
const express 				= require('express'),
			router 					= express.Router(),
			mainController 	= require('./controllers/main.controller');
			// To be added later
			// userController	= require('./controllers/userController'),
			// adminController = require('./controllers/adminController');

// Export router
module.exports = router;

// Main routes
router.get('/', mainController.showHome);
router.get('/about', mainController.showAbout);
router.get('/contact', mainController.showContact);
router.post('/contact', mainController.processContact);
router.get('/tech', mainController.showTech);

// 404
router.use(mainController.show404);