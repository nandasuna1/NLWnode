import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from "../repositories/UserRepositories"

interface IAuthenticateRequest {
    email: string;
    password: string
}


class AuthenticateUserService {
    async execute ({email, password} : IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories)

        //verificar se email existe
        const user = await userRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        //comparar senha com hash
        //verificar se senha correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }


        //gerar token
        const token = sign({
            email: user.email
        }, "61841396c5e093d1a77e8e00cd04e83e", {
            subject: user.id,
            expiresIn: "1d"
            }
        )

        return token;
    }
}

export { AuthenticateUserService }