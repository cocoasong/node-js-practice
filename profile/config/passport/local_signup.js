var LocalStrategy = require('passport-local').Strategy;

var signup = new LocalStrategy({
    usernameField: 'emailInput',
    passwordField: 'passwordInput',
    passReqToCallback: true
}, function(req, username, password, done) {
    var database = req.app.get('database');

    var paramName = req.body.nameInput || req.query.nameInput;
    
    var user = new database.UserModel({email: username, password: password, name: paramName});
    user.save(function(err, result) {
        if(err) {
            return done(err);
        }

        if(database.UserModel.findByEmail(email, function(err, result) {
            if(err) {
                return done(null, false, req.flash('signupMessage', '회원가입에 실패하였습니다'));
            }

            if(result) {
                return done(null, false, req.flash('signupMessage', '이미 존재하는 계정입니다'));
            }
        }));

        return done(null, user);
    });
});

module.exports.signup = signup;