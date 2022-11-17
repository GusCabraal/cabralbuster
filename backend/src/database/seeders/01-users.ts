import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'Cabral',
        email: 'cabral@cabralbuster.com',
        password: 'senhaDificilima',
        admin: true,
        image: 'lalalla'
      },
      {
        id: 2,
        username: 'Django',
        email: 'django@livre.com',
        password: 'Broomhilda',
        admin: false,
        image: 'lalalla',
      },
      {
        id: 3,
        username: 'T-800',
        email: 't800@skynet.com',
        password: 'sarahConnor',
        admin: false,
        image: 'lalalla'
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};