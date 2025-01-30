const ErrorMessageHandler = require('../Middlewares/ResponseErrorMessage')
const AuthMiddleware = require('../Middlewares/AuthMiddleware')
// Import the express module
const express = require('express')
const { body } = require('express-validator')
// Import the RecipeController from the controller directory
const RecipeController = require('../controller/RecipeController')
// Create a new router object
const router = express.Router()

// Define a route for GET requests to '' and map it to the index method of RecipeController
router.get('',RecipeController.index)
router.post('',[
    body('title').notEmpty().escape(),
    body('description').notEmpty().escape(),
    body('ingredients').notEmpty().escape().isArray({min:1})
    // The ErrorMessageHandler don't need to call here,
    // cuz the middleware funcs just need to be passed as references
], ErrorMessageHandler,  RecipeController.store) // middleware
router.get('/:id', RecipeController.show)
router.delete('/:id', RecipeController.delete)
router.patch('/:id', RecipeController.update)

// Export the router object so it can be used in other parts of the application
module.exports = router