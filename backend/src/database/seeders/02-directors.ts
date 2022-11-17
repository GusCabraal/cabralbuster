import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('directors', [
      {
        id: 1,
        name: 'Quentin Tarantino',
      },
      {
        id: 2,
        name: 'Martin Scorsese',
      },
      {
        id: 3,
        name: 'Steven Spielberg',
      },
      {
        id: 4,
        name: 'James Cameron',
      },
      {
        id: 5,
        name: 'José Padilha',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('directors', {});
  },
};