const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/?directConnection=true"
// let mongoURI = process.env.REACT_APP_MONGO_URI
const mongoURI = "mongodb+srv://manugirn07:5DGeUzJrcxLaMRSE@clouddb.ikwxam4.mongodb.net/inotebook"
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongo;
