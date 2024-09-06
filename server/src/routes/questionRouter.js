const questionRouter = require('express').Router();
const { where } = require('sequelize');
const { Question } = require('../../db/models');
const catchError = require('../utils/catchError');

questionRouter.route('/:categoryId/questions').get(async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId || Number.isNaN(+categoryId)) {
      return res.status(404).json({ message: 'Не надо так делать' });
    }
    const questionsByCategory = await Question.findAll({ where: { categoryId } });
    if (questionsByCategory.length === 0) {
      return res.status(404).json({ message: 'Нет такой категории' });
    }
    return res.json(questionsByCategory);
  } catch (error) {
    catchError(error, res);
  }
});

module.exports = questionRouter;
