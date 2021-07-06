import { Router } from 'express'
import ModulesController from '../controllers/ModulesController'
import LessonsController from '../controllers/LessonsController'
import { AuthMiddleware } from '../middleware/authMiddleware'

const ActionsRoutes = Router()

// Rotas de modulos
ActionsRoutes.get('/api/allmodules',  ModulesController.FindAllModules)
ActionsRoutes.get('/api/allmodules/:_id',  ModulesController.FindModuleById)
ActionsRoutes.post('/api/createmodules',AuthMiddleware, ModulesController.CreateModule)
ActionsRoutes.delete('/api/deletemodules/:_id',AuthMiddleware, ModulesController.DeleteModule)
ActionsRoutes.put('/api/editmodules/:_id',AuthMiddleware, ModulesController.UpdatePost)

//Rotas de aulas
ActionsRoutes.get('/api/alllessons', LessonsController.FindAllLessons)
ActionsRoutes.get('/api/alllessons/:_id',  LessonsController.FindLessonById)
ActionsRoutes.get('/api/alllessonsbymodule/:module',  LessonsController.FindLessonsByModule)
ActionsRoutes.post('/api/createlesson',AuthMiddleware, LessonsController.CreateLesson)
ActionsRoutes.delete('/api/deletelesson/:_id',AuthMiddleware, LessonsController.DeleteLesson)
ActionsRoutes.put('/api/editlesson/:_id',AuthMiddleware, LessonsController.UpdateLesson)

export default ActionsRoutes