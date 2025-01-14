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
const mongoURL = "mongodb+srv://farout101:test1234@mern-cluster.b8rcf.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db...')

    // The PORT number came from the .env file with the help of dotenv package
    // This code came only after the database import
    app.listen(process.env.PORT, () => { 
    console.log("Express is running on local host "+ process.env.PORT)
    })
})

// we'll use the dev version of morgan
app.use(morgan('dev'))

// Use the routes
// We just have to call use because the processing is happening inside the other folder
app.use('/api/recipes',recipeRoutes)