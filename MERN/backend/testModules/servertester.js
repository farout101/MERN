const mongoose = require('mongoose');

// Replace the following with your MongoDB Atlas connection string
const uri = 'mongodb://localhost:27017/faroutDB';

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });