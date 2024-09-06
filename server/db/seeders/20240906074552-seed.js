'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Science',
          img: 'science.jpg',
        },
        {
          name: 'History',
          img: 'history.jpg',
        },
        {
          name: 'Sports',
          img: 'sports.jpg',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          categoryId: 1, // ID категории "Science"
          title: 'What is the speed of light?',
          incorrectAnswerFirst: '150,000 km/s',
          incorrectAnswerSecond: '300,000 km/s',
          incorrectAnswerThird: '450,000 km/s',
          correctAnswer: '299,792 km/s',
        },
        {
          categoryId: 2, // ID категории "History"
          title: 'Who discovered America?',
          incorrectAnswerFirst: 'Leif Erikson',
          incorrectAnswerSecond: 'Marco Polo',
          incorrectAnswerThird: 'Ferdinand Magellan',
          correctAnswer: 'Christopher Columbus',
        },
        {
          categoryId: 3, // ID категории "Sports"
          title: 'How many players are on a football team?',
          incorrectAnswerFirst: '9',
          incorrectAnswerSecond: '11',
          incorrectAnswerThird: '12',
          correctAnswer: '11',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
