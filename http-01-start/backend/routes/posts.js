const express = require('express')
const postsController = require('../controllers/posts')
const router = express.Router()

router.get('/posts', postsController.getPosts)

router.post('/posts', postsController.postPost)

router.delete('/posts', postsController.deletePosts)

module.exports = router