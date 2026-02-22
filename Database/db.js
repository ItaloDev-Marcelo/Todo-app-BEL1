const mongoose = require('mongoose');

const connectDB  = async () =>{
    try {
        await mongoose.connect('mongodb+srv://marceloprado2024marmarcelo_db_user:2Xok1ANiYLJfiu1l@cluster0.tf9gabn.mongodb.net/')
        console.log('MongoDB connected successfully!');
    }catch(e) {
        console.error('MongoDB connection failed: ', e);
      process.exit(1);
    }
}

module.exports = connectDB;