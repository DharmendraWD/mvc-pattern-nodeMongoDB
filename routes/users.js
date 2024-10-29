const express = require('express')
const router = express.Router()

const {handleGetAllUsers, handleCreateUser} = require('../controllers/users')



// get all users
router.get('/', handleGetAllUsers)
router.post('/', handleCreateUser)

module.exports = router;

