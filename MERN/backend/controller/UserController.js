const User = require('../models/User')
const bcrypt = require('bcrypt')
const createToken = require('../helpers/createToken')
const cookieParser = require('cookie-parser')

const UserController = {
    login : (req,res) => {
        return res.json({ msg : "This is from login" }) 
    },
    register : async (req,res) => {
        try {
            let user = await User.register(req.body.name, req.body.email, req.body.password)
            let token = createToken(user._id)
            res.cookie('jwt',token)
            return res.json({ data: { user, token } })
        } catch (e) {
            return res.status(400).json({ error : e.message })
        }
    }
}

module.exports = UserController