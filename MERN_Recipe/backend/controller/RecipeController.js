const Recipe = require("../models/Recipe")
const mongoose = require('mongoose')
const removeFile = require('../helpers/removefile')
const sendEmail = require("../helpers/sendEmail")
const User = require("../models/User")

const RecipeController = {
    index : async (req,res) => {
        let limit = 6
        let page = req.query.page || 1
        let recipes = await Recipe
        .find()
        .skip((page -1) * limit)
        .limit(limit)
        .sort({ createdAt : -1})

        let totalRecipeCount = await Recipe.countDocuments()

        let totalPagesCount = Math.ceil(totalRecipeCount/limit)

        let links = {
            nextPage : totalPagesCount == page ? false : true,
            previousPage : page == 1 ? false : true,
            currentPage : page,
            loopableLinks : []
        }

        //generate Loopable links
        for (let index = 0; index < totalPagesCount; index++) {
           links.loopableLinks.push({number : index +1})
        }

        let response = {
            links,
            data : recipes
        }

        console.log(`Total_Pages -  ${totalPagesCount}`)
        console.log(`Previous_Page - ${links.previousPage} `)
        console.log(`Next_Page - ${links.nextPage}`)

        return res.json(response)
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
            let users = await User.find(null,['email'])
            let emails = users.map(user => user.email)
            emails = emails.filter(email => email != req.user.email)
            await sendEmail({
                view: 'email',
                data: {
                    name: req.user.name,
                    recipe: recipe
                },
                from: req.user.email,
                to: emails,
                subject: "New Recipe Created"
            }) 
            return res.json(recipe)
        } catch (e) {
            return res.status(500).json({ msg : e.message })
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

            let path = (__dirname + "/../public" + recipe.photo)

            await removeFile(path)
            
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

            let path = __dirname + "/../public" + recipe.photo
            
            await removeFile(path)

            if(!recipe) {
                return res.status(404).json({ msg : 'Recipe not found' })
            }
            let updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
            return res.json(updatedRecipe)
        } catch(e) {
            return res.status(404).json({ msg : "Internal Server Error!"})
        }
    },
    upload : async (req,res) => {
        try {
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ msg : 'Not a valid ID!' })
            }
            let recipe = await Recipe.findByIdAndUpdate(id, {
                photo : '/' + req.file.filename
            })
            if(!recipe) {
                return res.status(404).json({ msg : 'Recipe not found' })
            }
            let updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
            return res.json(updatedRecipe)
        } catch(e) {
            console.log(e)
            return res.status(400).json({error : e})
        }
    }
}

module.exports = RecipeController