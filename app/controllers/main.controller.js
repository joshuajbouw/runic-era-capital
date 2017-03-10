module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact,
	showTech: showTech,
	show404: show404
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