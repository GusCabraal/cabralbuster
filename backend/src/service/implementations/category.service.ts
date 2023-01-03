import {ICategoryRepository} from '../../repositories/interfaces/ICategory.repository';

export class CategoryService {
  private _categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  public findAll = async () => {
    const categories = await this._categoryRepository.findAll();

    return categories;
  };

}