const express = require('express')
const contactController = require('../controllers/contact')
const router = express.Router()

router.post('/contact', contactController.postMessage)

module.exports = router