import { Router } from 'express'
import { SequelizeCategoryRepository } from '../repositories/implementations/SequelizeCategory.repository'
import { CategoryService } from '../service/implementations/category.service'
import { CategoryController } from '../controller/category.controller'

const categoryRoutes = Router()
const repository = new SequelizeCategoryRepository()
const service = new CategoryService(repository)
const controller = new CategoryController(service)

categoryRoutes.get('', controller.findAll)

export {
    categoryRoutes,
}
