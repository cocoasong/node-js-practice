var mongoose = require('mongoose');

var config = require('../config/database_config');

var database_loader = {};
var database;

database_loader.init = function(app){
    console.log('initialize database');
    initDatabase(app);
};

function initDatabase(app) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db_url);
    database = mongoose.connection;
    database.on('open', function() {
        createSchemas(app, database);
    });
}

function createSchemas(app, database) {
    for(var i = 0; i < config.schema_info.length; i++) {
        var curItem = config.schema_info[i];
        var curSchema = require(curItem.file).createSchema(mongoose);
        var curModel = mongoose.model(curItem.collection, curSchema);
        database[curItem.schemaName] = curSchema;
        database[curItem.modelName] = curModel;
    }

    app.set('database', database);
}

module.exports = database_loader;