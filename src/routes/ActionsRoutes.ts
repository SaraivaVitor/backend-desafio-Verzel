import { Router } from 'express'
import ModulesController from '../controllers/ModulesController'
import LessonsController from '../controllers/LessonsController'

const ActionsRoutes = Router()

// Rotas de modulos
ActionsRoutes.get('/api/allmodules', ModulesController.FindAllModules)
ActionsRoutes.post('/api/createmodules', ModulesController.CreateModule)
ActionsRoutes.delete('/api/deletemodules/:_id', ModulesController.DeleteModule)
ActionsRoutes.put('/api/editmodules/:_id', ModulesController.UpdatePost)

//Rotas de aulas
ActionsRoutes.get('/api/alllessons', LessonsController.FindAllLessons)
ActionsRoutes.post('/api/createlesson/:_id', LessonsController.CreateLesson)
ActionsRoutes.delete('/api/deletelesson/:_id', LessonsController.DeleteLesson)
ActionsRoutes.put('/api/editlesson/:_id', LessonsController.UpdateLesson)

export default ActionsRoutes