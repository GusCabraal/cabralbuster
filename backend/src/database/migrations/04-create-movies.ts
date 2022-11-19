import { DataTypes, QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      imdbRating: {
        allowNull: true,
        type: Sequelize.FLOAT,
        field: 'imdb_rating',
      },
      directorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'directors',
          key: 'id',
        },
        field: 'director_id',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        field: 'category_id',
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('movies');
  },
};