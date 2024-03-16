const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB connection unsuccessful');
        console.log(error);
    }
}

module.exports = connectDB;
