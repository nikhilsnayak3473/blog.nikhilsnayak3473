const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  slug: {
    type: String,
  },
  sanitizedHtml: {
    type: String,
  }
})


module.exports = mongoose.model('Article', articleSchema)