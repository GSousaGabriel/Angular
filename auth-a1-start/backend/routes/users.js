const express= require('express')
const usersController= require('../controllers/users')
const router= express.Router()

router.post('/users', usersController.createUser)

router.post('/users/:user', usersController.getUser)

module.exports= router