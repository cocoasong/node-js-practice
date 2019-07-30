var passport = require('../config/passport_loader').passport;

var login = passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
});

var signup = passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
});

module.exports.login = login;
module.exports.signup = signup;
