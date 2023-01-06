import { Model, DataTypes } from 'sequelize';

import database from '.';

class MovieUser extends Model {
  declare movieId: number;
  declare userId: number;
}

MovieUser.init(
  {
    movieId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'movies',
        key: 'id',
      },
      field: 'movie_id',
    },
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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