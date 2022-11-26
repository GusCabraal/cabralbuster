import { Model, DataTypes } from 'sequelize';

import database from '.';
import Movie from './Movie';
import User from './User';

class MovieUser extends Model {
  declare movie_id: number;
  declare user_id: number;
}

MovieUser.init(
  {
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id',
      },
      field: 'movie_id',
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      field: 'user_id',
    },
  },
  {
    sequelize: database,
    tableName: 'movies_users',
    timestamps: false
  },
);

export default MovieUser;