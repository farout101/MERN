// Import the express module
const express = require('express')
// Import the RecipeController from the controller directory
const RecipeController = require('../controller/RecipeController')
// Import the ErrorMessageHandler middleware
const ErrorMessageHandler = require('../Middlewares/ResponseErrorMessage')
// Import the upload helper
const upload = require('../helpers/upload')
// Import the body function from express-validator
const { body } = require('express-validator')

// Create a new router object
const router = express.Router()

// Define a route for GET requests to '' and map it to the index method of RecipeController
router.get('', RecipeController.index)

// Define a route for POST requests to '' with validation and error handling
router.post('', [
    body('title').notEmpty().escape(),
    body('description').notEmpty().escape(),
    body('ingredients').notEmpty().escape().isArray({ min: 1 })
], ErrorMessageHandler, RecipeController.store)

// Define a route for GET requests to '/:id' and map it to the show method of RecipeController
router.get('/:id', RecipeController.show)

// Define a route for POST requests to '/:id/upload' with file upload handling
router.post('/:id/upload', [
    upload.single('photo'),
    body('photo').custom((value, {req}) => {
        if(!req.file) {
            throw new Error("Photo is required")
        }
        if(!req.file.mimetype.startsWith('image')) {
            throw new Error("Photo must be image")
        }
        return true
    })
], ErrorMessageHandler,RecipeController.upload)

// Define a route for DELETE requests to '/:id' and map it to the delete method of RecipeController
router.delete('/:id', RecipeController.delete)

// Define a route for PATCH requests to '/:id' and map it to the update method of RecipeController
router.patch('/:id', RecipeController.update)

// Export the router object so it can be used in other parts of the application
module.exports = router