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
    return queryInterface.bulkInsert('suppliers', [{
      nama: 'PT Angin Ribut',
      kota: 'Jakarta Barat',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'PT Debu Debu Intan',
      kota: 'Semarang',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'PT Berdikarya',
      kota: 'Ambon',
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
