var passport = require('../config/passport_loader').passport;

var login = passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
});

module.exports.login = login;

