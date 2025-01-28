const User = require('../models/User')
const bcrypt = require('bcrypt')

const UserController = {
    login : (req,res) => {
        return res.json({ msg : "This is from login" }) 
    },
    register : async (req,res) => {
        try {
            let user = await User.register(req.body.name, req.body.email, req.body.password)
            return res.json({ data : user }) 
        } catch (e) {
            return res.status(400).json({ error : e.message })
        }
    }
}

module.exports = UserController