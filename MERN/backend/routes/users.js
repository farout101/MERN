const express = require('express')
const router = express.Router()
const ErrorMessageHandler = require('../Middlewares/ResponseErrorMessage')
const { body } = require('express-validator')

const UserController = require('../controller/UserController')

router.post('/login', UserController.login)
router.post('/register', [
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty()
],ErrorMessageHandler,UserController.register)

module.exports = router