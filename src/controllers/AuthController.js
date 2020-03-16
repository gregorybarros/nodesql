const User = require('../models/User')
const bcrypt = require('bcryptjs')

const generateToken = require('../utils/generateToken')

authConfig = require('../config/auth')

module.exports = {
async index(req, res) {
    console.log(req.body)
    try {

        const { email, password} = req.body
    const user = await User.findOne({ email })
    console.log(user.password)

    if (!user)
    return res.status(400).send({error: 'User not found'})

    if(password != user.password)
    return res.status(400).send({error: 'Invalid password'})

    user.password = undefined


    res.send({user,token: generateToken({ id: user.id })})

    } catch (err){
        console.log(err)
    }
    
}
}
