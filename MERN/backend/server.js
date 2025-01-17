// We used nodemon package to restart the server auto in the development process

// we need to install dotenv for the use of .env
// dotenv setup
require('dotenv').config() 

// Morgan logs details about incoming HTTP requests to your server, 
// which can be useful for debugging and monitoring purposes
const morgan = require('morgan')

const express = require('express')
const recipeRoutes = require('./routes/recipes')

// define the express app
const app = express()

// importing Mongoose
const mongoose = require('mongoose')

// mongoDB url
const mongoURL = "mongodb://localhost:27017/faroutDB"
// connecting with mongodb, .then is used because the connection takes some time and it use promises as default
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db...')

    // The PORT number came from the .env file with the help of dotenv package
    // This code came only after the database import
    app.listen(process.env.PORT, () => { 
        console.log("Express is running on local host "+ process.env.PORT)
    })
})

// This line is used to make sure the raw data is turned into JSON
app.use(express.json())

// we'll use the dev version of morgan
app.use(morgan('dev'))

// Use the routes
// We just have to call use because the processing is happening inside the other folder
app.use('/api/recipes',recipeRoutes)