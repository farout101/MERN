const express = require('express')
const router = express.Router()
const ErrorMessageHandler = require('../Middlewares/ResponseErrorMessage')
const { body } = require('express-validator')

const UserController = require('../controller/UserController')
const User = require('../models/User')

router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/register', [
    body('name').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('email').custom(async value => {
        const user = await User.findOne({email : value})
        if (user) {
          throw new Error('E-mail already in use');
        }
    }),
    body('password').notEmpty()
],ErrorMessageHandler,UserController.register)

module.exports = router