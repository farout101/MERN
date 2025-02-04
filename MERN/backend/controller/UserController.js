const User = require('../models/User')
const bcrypt = require('bcrypt')
const createToken = require('../helpers/createToken')
const cookieParser = require('cookie-parser')

const UserController = {
    login : async (req,res) => {
       try {
            let {email,password} = req.body
            let user = await User.login(email,password)

            let token = createToken(user._id)
            res.cookie('jwt', token, {httpOnly : true, maxAge : 3 * 24 * 60 * 60 * 1000}) // miliseconds
            return res.json({user,token})
       } catch (e) {
            return res.status(400).json({error : e.message})
       }
         
    },
    register : async (req,res) => {
        try {
            let {name,email,password} = req.body
            let user = await User.register(name,email,password)
            let token = createToken(user._id)
            res.cookie('jwt',token, { httpOnly : true, maxAge : 3 * 24 * 60 * 60 * 1000}) // maxAge here accept with miliseconds
            return res.json({ data: { user, token } })
        } catch (e) {
            return res.status(400).json({ error : e.message })
        }
    },
    logout : async (req,res) => {
        try {
            res.cookie('jwt','', {maxAge : 1} ) // maxAge here accept with miliseconds
            return res.json({ message : "User Logged out" })
        } catch (e) {
            return res.status(400).json({error : e.message})
        }
    },
    me : (req,res) => {
        return res.json(req.user)
    }
}

module.exports = UserController