const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    nome: {type: String, required: true},
    porte: {type: String, required: true}
}, {timestamps: true})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet