const mongoose = require('mongoose');

async function connect() {
     
    try {
        await mongoose.connect('mongodb+srv://quanganh04012000:1781516590@cluster0.giulr.mongodb.net/Product');
        console.log('Connect DB successfully');
    } catch (error) {
        console.log('Connect failure!!');
    }

}

module.exports = {connect};