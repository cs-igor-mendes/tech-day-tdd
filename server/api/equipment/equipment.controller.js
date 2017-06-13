const Equipment = require('./equipment.model');
exports.index = function (req, res) {
    Equipment.find().exec()
        .then(results => res.json(results));
};

exports.show = function (req, res) {
    Equipment.findById(req.params.id).exec()
        .then(result => res.json(result));
};