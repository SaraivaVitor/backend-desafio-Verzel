import { Request, Response } from 'express'
import Admin from '../models/Admin'
import jwt from 'jsonwebtoken'

import * as bcrypt from 'bcrypt'



class AdminController {

  //criando usuario
  async CreateUser(Req: Request, Res: Response) {
    const { email, password, firstName } = Req.body
    const passwordHash = await bcrypt.hash(password, 8)

    try {
      const user = await Admin.create({
        firstName: firstName,
        email: email,
        password: passwordHash
      })

      user.password = undefined

      return Res.status(200).send({ user, message: `Usuario criado` })
    } catch (error) {
      return Res.status(401).send({ message: `Não foi possivel criar usuário` })
    }
  }

  //deletando usuário
  async DeleteUser(Req: Request, Res: Response) {
    const id = Req.params

    try {

      await Admin.deleteOne({ "_id": id })

      return Res.status(200).send({ message: "Usuário deletado" })

    } catch (error) {
      return Res.status(401).send({ message: `Desculpe, mas não foi possivel deletar usuário!` })
    }
  }

  //Autenticando
  async Authenticate(Req: Request, Res: Response) {

    const { email, password } = Req.body

    try {

      const UserExists: any = await Admin.findOne({ email }).select("+password")
  

      // Tratando erros possíveis.
      if (!UserExists) return Res.status(401).send({ message: `Desculpe, aqui consta q seu usuario não existe!` })
      if (!await bcrypt.compare(password, UserExists.password)) return Res.status(401).send({ message: `Senha incorreta!` })
      UserExists.password = undefined

      const token = jwt.sign({ id: UserExists.id }, "238e27d7791c8ab87201c216c4df0b90", {
        expiresIn: 86400,
      })
      return Res.status(200).send({ UserExists, token, message: `${email} logado!` })

    } catch (error) {
      console.log(error)
      return Res.status(401).send({ message: `Desculpe ${email} não foi possivel logar!` })

    }

  }

}

export default new AdminController()