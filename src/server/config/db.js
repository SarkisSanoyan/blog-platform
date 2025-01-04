const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blogs", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB: blogs");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
};

module.exports = connectToDatabase;
