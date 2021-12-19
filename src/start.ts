import express from 'express'
import cors from 'cors'
import ActionsRoutes  from './routes/ActionsRoutes'
import AuthRoutes  from './routes/AuthRoutes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(ActionsRoutes)
app.use(AuthRoutes)
app.listen(process.env.PORT || 8080)