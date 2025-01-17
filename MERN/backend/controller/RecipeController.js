const RecipeController = {
    index : (req,res) => {
        return res.json({
            msg : "Show all recipes"
        })
    },
    store : (req,res) => {
        console.log(req.body)
        return res.json({
            msg : "Store recipes"
        })
    },
    show : (req,res) => {
        return res.json({
            msg : "Get single recipe"
        })
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