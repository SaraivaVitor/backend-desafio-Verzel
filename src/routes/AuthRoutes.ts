import { Router } from 'express'
import AdminController from '../controllers/AdminController'
import { AuthMiddleware } from '../middleware/authMiddleware'

const AuthRouter = Router()

//All of user
AuthRouter.post('/api/createuser', AdminController.CreateUser)
AuthRouter.delete('/api/deleteuser/:_id', AdminController.DeleteUser)

//Auth
AuthRouter.post('/api/adminauth', AdminController.Authenticate)

export default AuthRouter