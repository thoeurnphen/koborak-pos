const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// require('dotenv').config();

exports.dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected !!!');
    }catch(error){
        console.log(error.message);
    }
}

// module.exports = dbConnection;
    