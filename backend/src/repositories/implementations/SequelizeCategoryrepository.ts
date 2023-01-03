import CategoryModel from '../../database/models/Category';
import { ICategoryRepository } from '../interfaces/ICategory.repository';

export class SequelizeCategoryRepository implements ICategoryRepository {
  private _model = CategoryModel;

  public findAll = async () => {
    const categories = await this._model.findAll({
      raw: true
    });

    return categories;
  };

}