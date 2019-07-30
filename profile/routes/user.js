var login = function(req, res) {
    console.log('start routing /login');
    res.render('login', {message: req.flash('loginMessage')});
};

var signup = function(req, res) {
    console.log('start routing /signup');
    res.render('signup', {message: req.flash('signupMessage')});
}

module.exports.login = login;
module.exports.signup = signup;