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
        image: 'http://localhost:3001/images/cabral_profile.jpeg'
      },
      {
        id: 2,
        username: 'Django',
        email: 'django@livre.com',
        password: 'Broomhilda',
        admin: false,
        image: 'http://localhost:3001/images/django_perfil.jpg',
      },
      {
        id: 3,
        username: 'T-800',
        email: 't800@skynet.com',
        password: 'sarahConnor',
        admin: false,
        image: 'http://localhost:3001/images/rocky_profile.jpg',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};