import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('movies_users', [
      {
        movie_id: 1,
        user_id: 2,
      },
      {
        movie_id: 1,
        user_id: 3,
      },
      {
        movie_id: 2,
        user_id: 2,
      },
      {
        movie_id: 5,
        user_id: 2,
      },
      {
        movie_id: 8,
        user_id: 2,
      },
      {
        movie_id: 10,
        user_id: 2,
      },
      {
        movie_id: 12,
        user_id: 2,
      },
      {
        movie_id: 7,
        user_id: 2,
      },
      {
        movie_id: 2,
        user_id: 3,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('movies_users', {});
  },
};