// We used nodemon package to restart the server auto in the development process

// we need to install dotenv for the use of .env
// dotenv setup
require('dotenv').config() 

// Morgan logs details about incoming HTTP requests to your server, 
// which can be useful for debugging and monitoring purposes
const morgan = require('morgan')

const express = require('express')

// define the express app
const app = express()

// we'll use the dev version of morgan
app.use(morgan('dev'))

app.get('/',(req,res) => {
    return res.json({hello :"Hello world"})
})

// The PORT number came from the .env file with the help of dotenv package
app.listen(process.env.PORT, () => { 
    console.log("Express is running on local host "+ process.env.PORT)
})