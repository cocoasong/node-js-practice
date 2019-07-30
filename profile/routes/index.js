var index = function(req, res) {
    console.log('start routing "/index"');
    res.redirect('/index.html');
};

module.exports.index = index;