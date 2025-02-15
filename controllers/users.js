const User = require('../models/user')









// get all users 
const handleGetAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.json(allUsers)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error })
    }
}


// create users 
const handleCreateUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        const newUser = await User.create({name:name, email:email, password:password})      //creates an instance in newUser
        const user = await newUser.save()       //saves user in database
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error })
    }
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser
}