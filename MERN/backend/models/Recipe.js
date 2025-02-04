const mongoose = require('mongoose')

const Schema = mongoose.Schema 

// This line instantiate the Schema 
const RecipeSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    ingredients : {
        type : Array,
        required : true
    },
    photo : {
        type : String
    }
}, { timestamps : true })

// As the naming convention 
// The name of the model must be the name of the file
// Must be singular
module.exports = mongoose.model("Recipe", RecipeSchema) // recipes