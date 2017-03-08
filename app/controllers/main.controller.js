module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact
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