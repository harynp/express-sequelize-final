'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('items', [{
      codeitem: 'HP0234',
      name: 'Iphone X',
      brand: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      codeitem: 'SW0923',
      name: 'MI 5S',
      brand: 'Xiaomi',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      codeitem: 'HP0876',
      name: 'Iphone 8',
      brand: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      codeitem: 'LP6543',
      name: 'Galaxy S8',
      brand: 'Samsung',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      codeitem: 'LP0421',
      name: 'Q6 Astro Black',
      brand: 'LG',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
  )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
