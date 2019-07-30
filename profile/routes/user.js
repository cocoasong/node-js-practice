var login = function(req, res) {
    console.log('start routing /login');
    res.render('login', {message: req.flash('loginMessage')});
};

module.exports.login = login;