import { Router } from 'express'
import { SequelizeDirectorRepository } from '../repositories/implementations/SequelizeDirector.repository'
import { DirectorService } from '../service/implementations/director.service'
import { DirectorController } from '../controller/director.controller'

const directorRoutes = Router()
const repository = new SequelizeDirectorRepository()
const service = new DirectorService(repository)
const controller = new DirectorController(service)

directorRoutes.get('', controller.findAll)

export {
    directorRoutes,
}
