const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Short = new Schema({
    image: String,
    slug: String
});

module.exports = mongoose.model('Short', Short)