// Importing required packages
require('dotenv').config(); // dotenv setup
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer')

// Importing routes
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const AuthMiddleware = require('./Middlewares/AuthMiddleware')

// Define the express app
const app = express();

// Middleware setup
app.use(express.static('public'))
app.use(cors(
    {
        origin : "http://localhost:5173",
        // this line let the server to set cookies at the client side
        credentials : true
    }
)); // Only for local development
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
app.use('/api/recipes', AuthMiddleware, recipeRoutes);
app.use('/api/users', userRoutes);

// Example route for setting cookies
app.get('/set-cookie', (req, res) => {
    res.cookie('name','Phyo Zaw Linn')
    res.send("cookie is sent");
});

// Example route for getting cookies
app.get('/get-cookie', (req,res) => {
    let cookies = req.cookies
    return res.json(cookies)
})

app.get('/send-email', async (req,res) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "bc6df0fef072e7",
        pass: "b139ea020f22d7"
        }
    });
    
    const info = await transport.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "phyozawlinn1852020@gmail.com", // list of receivers
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>", 
    });
    
    console.log("Message sent: %s", info.messageId);
    
    return res.send("email already sent")
})