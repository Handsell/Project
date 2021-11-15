const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bag = new Schema({
    image: String,
    slug: String
});


module.exports = mongoose.model('Bag', Bag)