import { Model, DataTypes } from 'sequelize';

import database from '.';

class Director extends Model {
  public id!: number;
  public name!: string;
  public image!: string;
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
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  },
  {
    sequelize: database,
    tableName: 'directors',
    timestamps: false
  },
);

export default Director;