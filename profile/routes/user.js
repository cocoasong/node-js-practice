var login = function(req, res) {
    console.log('start routing /login');
    res.render('login', {message: req.flash('loginMessage')});
};

var signup = function(req, res) {
    console.log('start routing /signup');
    res.render('signup', {message: req.flash('signupMessage')});
}

var profile = function(req, res) {
    console.log('start routing /profile');
    if(!req.user) {
        res.redirect('/');
    }
    else {
        var user;
        if(Array.isArray(req.user)) {
            user = {
                name: req.user[0].name,
                email: req.user[0].email
            }
        }
        else {
            user = {
                name: user.name,
                email: user.email
            }
        }
        res.render('profile', {user: user});
    }
};

var logout = function(req, res) {
    console.log('start routing /logout');
    req.logout();
    res.redirect('/')
};

module.exports.login = login;
module.exports.logout = logout;
module.exports.signup = signup;
module.exports.profile = profile;