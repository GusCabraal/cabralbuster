import { Model, DataTypes } from 'sequelize';

import database from '.';

import Category from './Category';
import Director from './Director';

class Movie extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
  declare releaseYear: number;
  declare image?: string;
  declare imdbRating: number;
  declare directorId: number;
  declare categoryId: number;
}

Movie.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    releaseYear: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'release_year',
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    imdbRating: {
      allowNull: true,
      type: DataTypes.FLOAT,
      field: 'imdb_rating',
    },
    directorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'directors',
        key: 'id',
      },
      field: 'director_id',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      field: 'category_id',
    },
  },
  {
    sequelize: database,
    tableName: 'movies',
    timestamps: false,
  },
);

Movie.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Movie.belongsTo(Director, { foreignKey: 'director_id', as: 'director' });

export default Movie;