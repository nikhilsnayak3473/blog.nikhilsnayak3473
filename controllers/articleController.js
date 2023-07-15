const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel');

const getAllArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('index', { articles })
})

const getArticleBySlug = asyncHandler(async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug })
    res.render('article', { article })
}

)

module.exports = {
    getAllArticles,
    getArticleBySlug
}