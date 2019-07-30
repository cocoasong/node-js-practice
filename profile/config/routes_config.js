module.exports = {
    routes_info: [
        {file: './index', path: '/index', method: 'index', type: 'get', passport: false},
        {file: './user', path: '/login', method: 'login', type: 'get' , passport: false},
        {file: './passport', path: '/login', method: 'login', type: 'post', passport: true},
    ]
};