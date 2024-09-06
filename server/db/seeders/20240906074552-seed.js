'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Вставляем категории
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Наука',
          img: 'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg',
        },
        {
          name: 'История',
          img: 'https://www.historytoday.com/sites/default/files/2020-08/WhatisHistory-caourselnew.jpg',
        },
        {
          name: 'Спорт',
          img: 'https://t4.ftcdn.net/jpg/01/92/55/01/360_F_192550164_VVYarvDCfPVm4diPG9DpbI2p9M4TFC2a.jpg',
        },
      ],
      {},
    );

    // Вставляем вопросы для категории "Наука"
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          categoryId: 1,
          title: 'Какова скорость света?',
          incorrectAnswerFirst: '150 000 км/с',
          incorrectAnswerSecond: '300 000 км/с',
          incorrectAnswerThird: '450 000 км/с',
          correctAnswer: '299 792 км/с',
        },
        {
          categoryId: 1,
          title: 'Кто открыл теорию относительности?',
          incorrectAnswerFirst: 'Исаак Ньютон',
          incorrectAnswerSecond: 'Никола Тесла',
          incorrectAnswerThird: 'Галилео Галилей',
          correctAnswer: 'Альберт Эйнштейн',
        },
        {
          categoryId: 1,
          title: 'Какое самое твердое вещество на Земле?',
          incorrectAnswerFirst: 'Золото',
          incorrectAnswerSecond: 'Железо',
          incorrectAnswerThird: 'Кремний',
          correctAnswer: 'Алмаз',
        },
        {
          categoryId: 1,
          title: 'Сколько планет в Солнечной системе?',
          incorrectAnswerFirst: '5',
          incorrectAnswerSecond: '6',
          incorrectAnswerThird: '7',
          correctAnswer: '8',
        },
        {
          categoryId: 1,
          title: 'Какая единица измерения силы тока?',
          incorrectAnswerFirst: 'Вольт',
          incorrectAnswerSecond: 'Ватт',
          incorrectAnswerThird: 'Ом',
          correctAnswer: 'Ампер',
        },
      ],
      {},
    );

    // Вставляем вопросы для категории "История"
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          categoryId: 2,
          title: 'Когда упала Берлинская стена?',
          incorrectAnswerFirst: '1988 год',
          incorrectAnswerSecond: '1991 год',
          incorrectAnswerThird: '1987 год',
          correctAnswer: '1989 год',
        },
        {
          categoryId: 2,
          title: 'Какое важное событие произошло в 1917 году в России?',
          incorrectAnswerFirst: 'Начало Второй мировой войны',
          incorrectAnswerSecond: 'Революция 1905 года',
          incorrectAnswerThird: 'Падение Российской империи',
          correctAnswer: 'Октябрьская революция',
        },
        {
          categoryId: 2,
          title: 'Кто открыл Америку?',
          incorrectAnswerFirst: 'Алекс Скотт',
          incorrectAnswerSecond: 'Фрэнсис Дрейк',
          incorrectAnswerThird: 'Фернан Магеллан',
          correctAnswer: 'Александр ФеодосиID',
        },

        {
          categoryId: 2,
          title: 'Кто был первым президентом США?',
          incorrectAnswerFirst: 'Авраам Линкольн',
          incorrectAnswerSecond: 'Томас Джефферсон',
          incorrectAnswerThird: 'Джон Адамс',
          correctAnswer: 'Бата Эвенов',
        },

        {
          categoryId: 2,
          title: 'Кто основал Рим?',
          incorrectAnswerFirst: 'Чук и Гек',
          incorrectAnswerSecond: 'Зита и Гита',
          incorrectAnswerThird: 'Пупа и Лупа',
          correctAnswer: 'Соня и Бата',
        },
      ],
      {},
    );

    // Вставляем вопросы для категории "Спорт"
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          categoryId: 3,
          title: 'Сколько игроков в футбольной команде?',
          incorrectAnswerFirst: '9',
          incorrectAnswerSecond: '10',
          incorrectAnswerThird: '12',
          correctAnswer: '11',
        },
        {
          categoryId: 3,
          title: 'Как называется самая престижная теннисная награда?',
          incorrectAnswerFirst: 'Олимпийская медаль',
          incorrectAnswerSecond: 'Кубок Мира',
          incorrectAnswerThird: 'Кубок Дэвиса',
          correctAnswer: 'Кубок Уимблдона',
        },
        {
          categoryId: 3,
          title: 'Какой спорт является национальным в Японии?',
          incorrectAnswerFirst: 'Футбол',
          incorrectAnswerSecond: 'Баскетбол',
          incorrectAnswerThird: 'Хоккей',
          correctAnswer: 'Сумо',
        },
        {
          categoryId: 3,
          title: 'Сколько колец на олимпийском флаге?',
          incorrectAnswerFirst: '3',
          incorrectAnswerSecond: '4',
          incorrectAnswerThird: '6',
          correctAnswer: '5',
        },
        {
          categoryId: 3,
          title: 'Сколько минут длится тайм в хоккее?',
          incorrectAnswerFirst: '15 минут',
          incorrectAnswerSecond: '25 минут',
          incorrectAnswerThird: '40 минут',
          correctAnswer: '20 минут',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
  },
};