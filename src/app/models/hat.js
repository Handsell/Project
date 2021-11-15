const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hat = new Schema({
    image: String,
    slug: String
});

module.exports = mongoose.model('Hat', Hat)