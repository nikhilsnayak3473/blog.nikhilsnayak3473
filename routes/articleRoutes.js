const express = require('express');
const router = express.Router();
const { getAllArticles, getArticleBySlug } = require('../controllers/articleController')


router.get('/', getAllArticles)
router.get('/article/:slug', getArticleBySlug)


module.exports = router;