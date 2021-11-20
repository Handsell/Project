const mongoose = require('mongoose');

async function connect() {
     
    try {
        await mongoose.connect('mongodb+srv://quanganh04012000:1781516590@cluster0.giulr.mongodb.net/Product')
        console.log('MongoDB connecting .......')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

}

module.exports = {connect};

// mongodb+srv://quanganh04012000:1781516590@cluster0.giulr.mongodb.net/test

// mongodb+srv://kai:1DoOnxS0oQUIN09j@cluster0.jbbps.mongodb.net/test