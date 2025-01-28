// Importing required packages
require('dotenv').config(); // dotenv setup
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Importing routes
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');

// Define the express app
const app = express();

// Middleware setup
app.use(cors()); // Only for local development
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Morgan for logging
app.use(cookieParser())

// MongoDB connection
const mongoURL = "mongodb://localhost:27017/faroutDB";
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db...');

    // Start the server after successful DB connection
    app.listen(process.env.PORT, () => { 
        console.log("Express is running on localhost " + process.env.PORT);
    });
});

// Use the routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// Example route for setting cookies
app.get('/set-cookie', (req, res) => {
    res.cookie('name','Phyo Zaw Linn')
    res.send("cookie is sent");
});