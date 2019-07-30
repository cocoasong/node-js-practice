var crypto = require('crypto');

module.exports.createSchema = function(mongoose) {
    var UserSchema = mongoose.Schema({
        email: {type: String, required: true, unique: true, default: ' '},
        hashed_password: {type: String, required: true, default: ' '},
        salt: {type: String, required: true},
        name: {type: String, index: 'hashed', default: ' '},
        created_at: {type: Date, index: {unique: false}, default: Date.now},
        updated_at: {type: Date, index: {unique: false}, default: Date.now}
    });

    UserSchema
    .virtual('password')
    .set(function(password) {
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    });

    UserSchema.method('makeSalt', function() {
        return Math.round(new Date().valueOf() + Math.random()) + '';
    });

    UserSchema.method('encryptPassword', function(plainText, inSalt) {
        if(inSalt) {
            return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
        }
        else {
            return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
        }
    });

    UserSchema.method('authenticate', function(plainText, inSalt, hashed_password) {
        if(inSalt) {
            return this.encryptPassword(plainText, inSalt) === hashed_password;
        }
        else {
            return this.encryptPassword(plainText) === hashed_password;
        }
    }); 

    UserSchema.static('findByEmail', function(email, callback) {
        return this.find({email: email}, callback);
    });

    return UserSchema;
};