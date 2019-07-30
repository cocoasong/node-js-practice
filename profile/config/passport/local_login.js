var LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField: 'emailInput',
    passwordField: 'passwordInput',
    passReqToCallback: true
}, function(req, username, password, done) {
    var database = req.app.get('database');

    database.UserModel.findByEmail(username, function(err, result) {
        if(err) {
            return done(err);
        }

        if(result.length > 0) {
            var user = new database.UserModel({email: username});
            var authenticated = user.authenticate(password, result[0].salt, result[0].hashed_password);
            if(authenticated) {
                return done(null, result);
            }
            else {
                return done(null, false, req.flash('loginMessage', '계정이 올바르지 않습니다'))
            }
        }
        else {
            return done(null, false, req.flash('loginMessage', '계정이 올바르지 않습니다'))
        }
    });
});