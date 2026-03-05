const {addCategory, getAllCategory, getCategoryById, updateCategory, removeCategory } = require('../controllers/category.controller')

const express = require('express');
const categoryRouter = express.Router();

categoryRouter.route('/')
    .post(addCategory)
    .get(getAllCategory)

categoryRouter.route('/:id')
    .get(getCategoryById)
    .patch(updateCategory)
    .delete(removeCategory)


module.exports = categoryRouter;


