const Recipe = require("../models/Recipe")
const mongoose = require('mongoose')

const RecipeController = {
    index : async (req,res) => {
        let limit = 6
        let page = req.query.page || 1
        let recipes = await Recipe
        .find()
        .skip((page -1) * limit)
        .limit(limit)
        .sort({ createdAt : -1})

        return res.json(recipes)
    },
    // Our function must be async cuz we used await
    store : async (req,res) => {
        try {
            const {title, description, ingredients} = req.body
            // The .create method from the mongodb create data into the mongodb
            const recipe = await Recipe.create({
                title,
                description,
                ingredients
            })
            return res.json(recipe)
        } catch (e) {
            return res.status(400).json({ msg : "invalid fields" })
        }
    },
    show : async (req,res) => {
        try {
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a valid ID!' })
            }
            let recipe = await Recipe.findById(id)
            if(!recipe) {
                return res.status(404).json({ msg : 'Recipe not found' })
            }
            return res.json(recipe)
        } catch(e) {
            return res.status(404).json({ msg : "Internal Server Error!"})
        }
    },
    delete : async (req,res) => {
        try {
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a valid ID!' })
            }
            let recipe = await Recipe.findByIdAndDelete(id)
            if(!recipe) {
                return res.status(404).json({ msg : 'Recipe not found' })
            }
            return res.json({ msg : `The Recipe ID - '${recipe.id}' has been deleted!` })
        } catch(e) {
            return res.status(404).json({ msg : "Internal Server Error!"})
        }
    },
    update : async (req,res) => {
        try {
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a valid ID!' })
            }
            let recipe = await Recipe.findByIdAndUpdate(id)
            if(!recipe) {
                return res.status(404).json({ msg : 'Recipe not found' })
            }
            let updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
            return res.json(updatedRecipe)
        } catch(e) {
            return res.status(404).json({ msg : "Internal Server Error!"})
        }
    }

}

module.exports = RecipeController