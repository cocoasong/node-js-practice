var config = require('../config/routes_config');

var routes_loader = {};

routes_loader.init = function(app, router) {
    console.log('initialize routes');
    initRoutes(app, router);
};

function initRoutes(app, router) {
    for(var i = 0; i < config.routes_info.length; i++) {
        var curItem = config.routes_info[i];
        var curModule = require(curItem.file);
        if(curItem.type == 'post') {
            router.route(curItem.path).post(curModule[curItem.method]);
        }
        else if(curItem.type == 'get') {
            router.route(curItem.path).get(curModule[curItem.method]);
        }
        else {
            console.log('type not valid : %s', curItem.type);
        }
    }
    app.use(router);
}

module.exports = routes_loader;