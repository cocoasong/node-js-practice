module.exports = {
    routes_info: [
        {file: './index', path: '/index', method: 'index', type: 'get', passport: false},
        {file: './user', path: '/login', method: 'login', type: 'get' , passport: false},
        {file: './user', path: '/signup', method: 'signup', type: 'get' , passport: false},
        {file: './user', path: '/profile', method: 'profile', type: 'get' , passport: false},
        {file: './user', path: '/logout', method: 'logout', type: 'get' , passport: false},
        {file: './passport', path: '/login', method: 'login', type: 'post', passport: true},
        {file: './passport', path: '/signup', method: 'signup', type: 'post', passport: true},
    ]
};