const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports= mongoose.model('posts', PostSchema)