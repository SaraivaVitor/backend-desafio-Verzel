import { Request, Response } from 'express'
import Module from '../models/Modules'

class ModulesController {

    //criando modulo
    async CreateModule(Req: Request, Res: Response) {
        const { name, totalQuanity } = Req.body

        try {

            await Module.create({
                name: name,
                totalQuanity: totalQuanity
            })

            return Res.status(200).send({ message: `${name} adicionado ao banco com sucesso!` })
            
        } catch (error) {

            return Res.status(401).send({ message: `Não foi possivel adicionar o módulo` })

        }
    }


    //listando modulos
    async FindAllModules(Req: Request, Res: Response) {

        try {

            const GetModule: any = await Module.find().populate('lessons')
            return Res.json(GetModule)

        } catch (error) {

            return Res.status(401).send({ message: "Não foi possivel encontrar os módulos!" })

        }

    }
    //deletando modulo
    async DeleteModule(Req: Request, Res: Response) {
        const id = Req.params

        try {

            await Module.deleteOne({ "_id": id })

            return Res.status(200).send({ message: "Módulo deletado" })

        } catch (error) {
            return Res.status(401).send({ message: "Não foi possivel deletar o módulo" })
        }
    }

    //editando modulos
    async UpdatePost(Req: Request, Res: Response) {

        const id = Req.params
        const { name, totalQuanity } = Req.body

        try {

            await Module.updateOne({ "_id": id }, {
                $set: {
                    name: name,
                    totalQuanity: totalQuanity
                }
            })


            return Res.status(200).send({ message: "Modulo editado com sucesso!" })

        } catch (error) {
            return Res.status(401).send({ message: "Não foi possivel editar o módulo" })
        }

    }

}


export default new ModulesController()