import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('directors', [
      {
        id: 1,
        name: 'Quentin Tarantino',
        image: `${process.env.DOMAIN}/images/directorsProfile/Quentin_Tarantino.jpg`
      },
      {
        id: 2,
        name: 'Martin Scorsese',
        image: `${process.env.DOMAIN}/images/directorsProfile/Martin_Scorsese.jpg`
      },
      {
        id: 3,
        name: 'Steven Spielberg',
        image: `${process.env.DOMAIN}/images/directorsProfile/Steven_Spielberg.jpg`
      },
      {
        id: 4,
        name: 'James Cameron',
        image: `${process.env.DOMAIN}/images/directorsProfile/James_Cameron.jpg`
      },
      {
        id: 5,
        name: 'Fernando Meirelles',
        image: `${process.env.DOMAIN}/images/directorsProfile/Fernando_Meirelles.jpeg`
      },
      {
        id: 6,
        name: 'Stanley Kubrick',
        image: `${process.env.DOMAIN}/images/directorsProfile/Stanley_Kubrick.jpeg`
      },
      {
        id: 7,
        name: 'Tony Scott',
        image: `${process.env.DOMAIN}/images/directorsProfile/Tony_Scott.jpg`
      },
      {
        id: 8,
        name: 'John Hughes',
        image: `${process.env.DOMAIN}/images/directorsProfile/John_Hughes.jpg`
      },
      {
        id: 9,
        name: 'John G. Avildsen',
        image: `${process.env.DOMAIN}/images/directorsProfile/John_Avildsen.jpg`
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('directors', {});
  },
};