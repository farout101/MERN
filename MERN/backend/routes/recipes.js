// Import the express module
const express = require('express')

// Import the RecipeController from the controller directory
const RecipeController = require('../controller/RecipeController')

// Create a new router object
const router = express.Router()

// Define a route for GET requests to '' and map it to the index method of RecipeController
router.get('', RecipeController.index)
router.post('', RecipeController.store)
router.get('/:id', RecipeController.show)
router.delete('/:id', RecipeController.delete)
router.patch('/:id', RecipeController.update)

// Export the router object so it can be used in other parts of the application
module.exports = router