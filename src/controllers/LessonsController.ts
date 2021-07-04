import { Request, Response } from 'express'
import Lesson from '../models/Lessons'

class LessonsController {

    //criando Aula
    async CreateLesson(Req: Request, Res: Response) {
        const { name, date } = Req.body
        const moduleId = Req.params

        try {

            await Lesson.create({
                name: name,
                date: date,
                module: moduleId
            })

            return Res.status(200).send({ message: `${name} adicionado ao banco com sucesso!` })

        } catch (error) {

            return Res.status(401).send({ message: `Não foi possivel adicionar o módulo` })

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