import { Model, DataTypes } from 'sequelize';

import database from '.';

class Category extends Model {
  public id!: number;
  public name!: string;
}

Category.init(
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
    tableName: 'categories',
  },
);

export default Category;