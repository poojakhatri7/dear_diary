
const mongoose = require('mongoose'); // Use CommonJS require
const mongoURI = "mongodb://127.0.0.1:27017/deardairy";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("thank God Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connectToMongo; // CommonJS export


