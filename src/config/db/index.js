const mongoose = require('mongoose');

async function connect() {
     
    try {
        await mongoose.connect('mongodb://localhost:27017/Final_Project_dev');
        console.log('Connect DB successfully');
    } catch (error) {
        console.log('Connect failure!!');
    }

}

module.exports = {connect};