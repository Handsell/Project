const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const T_shirt = new Schema({
    image: String,
    slug: String,
    Name: String,
    Price: String,
});

module.exports = mongoose.model('T_shirt', T_shirt)