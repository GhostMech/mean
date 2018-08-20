const User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    let user = new User(req.body);

    user.save(err => {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
