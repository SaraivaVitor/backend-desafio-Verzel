import { Request, Response } from 'express'
import {ObjectId} from 'mongodb'

import Lesson from '../models/Lessons'
class LessonsController {

    //criando Aula
    async CreateLesson(Req: Request, Res: Response) {
        const { name, date, description, module } = Req.body

        try {

            await Lesson.create({
                name: name,
                date: date,
                description: description,
                module: module
            })

            return Res.status(200).send({ message: `${name} adicionado ao banco com sucesso!` })

        } catch (error) {

            return Res.status(401).send({ error, message: `Não foi possivel adicionar o módulo` })

        }
    }

    //listando aulas
    async FindAllLessons(Req: Request, Res: Response) {

        try {

            const GetLessons: any = await Lesson.find().populate('module')
            return Res.json(GetLessons)

        } catch (error) {

            return Res.status(401).send({ message: "Não foi possivel encontrar as aulas!" })

        }

    }

    //listando aulas pelo modulo
    async FindLessonsByModule(Req: Request, Res: Response) {
        const {module}  = Req.params


        try {
            
            const GetLessons: any = await Lesson.find({"module": new ObjectId(module)})
            console.log(GetLessons)
            return Res.json(GetLessons)
            

        } catch (error) {

            return Res.status(400).send({error, message: "Não foi possivel encontrar as aulas!" })

        }

    }


    //separando aulas pelo id
    async FindLessonById (Req:Request, Res: Response){
        const id = Req.params
           
        try{ 
            const GetLessonById: any = await Lesson.findOne({"_id":id}).populate('lessons')
            return Res.json([GetLessonById])

        }catch(error){

            return Res.status(401).send({ message: `Desculpe, mas não foi possivel encontrar a aula!` })

        }
    }

    //deletando aula
    async DeleteLesson(Req: Request, Res: Response) {
        const id = Req.params

        try {

            await Lesson.deleteOne({ "_id": id })

            return Res.status(200).send({ message: "Módulo deletado" })

        } catch (error) {
            return Res.status(401).send({ message: "Não foi possivel deletar o módulo" })
        }
    }

    //editando modulos
    async UpdateLesson(Req: Request, Res: Response) {

        const id = Req.params
        const { name, date } = Req.body

        try {

            await Lesson.updateOne({ "_id": id }, {
                $set: {
                    name: name,
                    date: date
                }
            })


            return Res.status(200).send({ message: "Modulo editado com sucesso!" })

        } catch (error) {
            return Res.status(401).send({ message: "Não foi possivel editar o módulo" })
        }

    }
}

export default new LessonsController()