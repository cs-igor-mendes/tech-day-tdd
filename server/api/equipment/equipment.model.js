const mongoose = require('mongoose');

const EquipmentModel = new mongoose.Schema({
    id: {type: String, unique: true, required: true},
    name: String,
    risk: String
});

module.exports = mongoose.model('Equipment', EquipmentModel);