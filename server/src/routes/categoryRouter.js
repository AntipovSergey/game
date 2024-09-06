const categoryRouter = require('express').Router();
const { Category } = require('../../db/models');
const catchError = require('../utils/catchError');

categoryRouter.route('/').get(async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    return res.json(allCategories);
  } catch (error) {
    catchError(error, res);
  }
});

module.exports = categoryRouter;
