import 'dotenv/config';
import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'Cabral',
        email: 'cabral@cabralbuster.com',
        password: 'd836af17afb0646520ebc36ab6d16fec',
        admin: true,
        image: `${process.env.DOMAIN}/images/cabral_profile.jpeg`
      },
      {
        id: 2,
        username: 'Rocky Balboa',
        email: 'rocky_balboa@email.com',
        password: '500dee89e9d8b197e828c938fff74b27',
        admin: false,
        image: `${process.env.DOMAIN}/images/rocky_profile.jpg`,
      },
      {
        id: 3,
        username: 'Django',
        email: 'django@livre.com',
        password: '56e0490ef1f03788e31edffad02ce6cb',
        admin: false,
        image: `${process.env.DOMAIN}/images/django_perfil.jpg`,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};