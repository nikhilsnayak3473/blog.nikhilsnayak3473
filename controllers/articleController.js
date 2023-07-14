const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel');

const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('index', { articles: articles })
})

module.exports = {
    getArticles,
}