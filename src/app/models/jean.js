const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Jean = new Schema({
    image: String,
    slug: String
});

module.exports = mongoose.model('Jean', Jean)