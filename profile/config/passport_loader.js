var passport = require('passport');

var passport_loader = {};

passport_loader.passport = passport;

passport_loader.init = function(app) {
    console.log('initialize passport');
    initPassport(app);
};

function initPassport(app) {
    app.use(passport.initialize());
    app.use(passport.session());
   
    passport.serializeUser(function(user, done) {
        return done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        return done(null, user);
    });
    
    passport.use('local-login', require('./passport/local_login'));
    passport.use('local-signup', require('./passport/local_signup'));
    
    app.set('passport', passport);
}

module.exports = passport_loader;