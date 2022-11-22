import { Model, DataTypes } from 'sequelize';

import database from '.';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
  declare admin: boolean;
  declare image?: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    admin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: database,
    tableName: 'users',
    timestamps: false
  },
);

export default User;