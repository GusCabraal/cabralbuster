import { Model, DataTypes } from 'sequelize';

import database from '.';

class Director extends Model {
  public id!: number;
  public name!: string;
}

Director.init(
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
  },
  {
    sequelize: database,
    tableName: 'directors',
  },
);

export default Director;