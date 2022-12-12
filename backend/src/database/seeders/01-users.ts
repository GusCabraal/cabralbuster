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
        username: 'Rocky Balboa',
        email: 'rocky_balboa@email.com',
        password: 'lutador',
        admin: false,
        image: 'http://localhost:3001/images/rocky_profile.jpg',
      },
      {
        id: 3,
        username: 'Django',
        email: 'django@livre.com',
        password: 'Broomhilda',
        admin: false,
        image: 'http://localhost:3001/images/django_perfil.jpg',
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};