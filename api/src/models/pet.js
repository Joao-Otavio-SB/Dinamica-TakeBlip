const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    nome: {type: String, required: true},
    porte: {type: String, required: true},
    horario: {type: String, required: true}
}, {timestamps: false})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet