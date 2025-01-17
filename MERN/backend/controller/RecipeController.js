const Recipe = require("../models/Recipe")

const RecipeController = {
    index : async (req,res) => {
        let recipes = await Recipe.find().sort({ createdAt : -1})

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
            let recipe = await Recipe.findById(id)

            return res.json(recipe)
        } catch(e) {
            return res.status(404).json({ msg : "Cannot find the Recipe ID"})
        }
    },
    delete : (req,res) => {
        return res.json({
            msg : "Delete single recipe"
        })
    },
    update : (req,res) => {
        return res.json({
            msg : "Update recipe"
        })
    }

}

module.exports = RecipeController