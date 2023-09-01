const Posts = require('../models/posts')

exports.postPost = (req, res) => {
  const date = new Date()
  const fixedPost = req.body
  fixedPost.date = date

  Posts.create(fixedPost)
    .then((success) => {
      res.status(201).json({ message: 'successfully inserted' })
    })
    .catch(error => {
      const errorReq = new Error(error)
      errorReq.httpStatusCode = 500
      res.status(500).json({ error: errorReq.message })
    })
}

exports.getPosts = (req, res) => {
  Posts.find().then((posts) => {
    res.status(200).json(posts)
  })
    .catch(error => {
      const errorReq = new Error(error)
      errorReq.httpStatusCode = 500
      res.status(500).json({ error: errorReq.message })
    })
}

exports.deletePosts = (req, res) => {
  Posts.deleteMany().then((result) => {
    res.status(200).json({ message: 'deleted' })
  })
    .catch(error => {
      const errorReq = new Error(error)
      errorReq.httpStatusCode = 500
      res.status(500).json({ error: errorReq.message })
    })
}