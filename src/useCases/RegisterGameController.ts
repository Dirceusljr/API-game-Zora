import { Request, Response } from "express"
import { IGameDTO } from "../entities/game"
import { RegisterGameUseCase } from './RegisterGameUseCase'

class RegisterGameController { 

    constructor(private useCase: RegisterGameUseCase) {}

    async handler(req: Request, res: Response): Promise<Response> {
        const { releaseData, designer, developer, genre, mode, name, plataform: plataform }: IGameDTO = req.body
        
        await this.useCase.execute({  releaseData, designer, developer, genre, mode, name, plataform })

        return res.status(201).json({ message: 'Registro criado com sucesso!'})
    }
}

export { RegisterGameController }