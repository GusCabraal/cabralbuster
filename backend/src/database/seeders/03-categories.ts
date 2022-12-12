import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'Ação',
      },
      {
        id: 2,
        name: 'Drama',
      },
      {
        id: 3,
        name: 'Ficção científica',
      },
      {
        id: 4,
        name: 'Suspense',
      },
      {
        id: 5,
        name: 'Terror',
      },
      {
        id: 6,
        name: 'Comédia',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories', {});
  },
};