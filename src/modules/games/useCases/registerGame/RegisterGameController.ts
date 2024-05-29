import { Request, Response } from "express"
import { RegisterGameUseCase } from './RegisterGameUseCase'
import { IGameDTO } from "../../infra/entities/game";
import { container } from "tsyringe";

class RegisterGameController { 
    async handler(req: Request, res: Response): Promise<Response> {
        const { releaseData, designer, developer, genre, mode, name, platform: platform }: IGameDTO = req.body
        const registeruseCase = container.resolve(RegisterGameUseCase);

        await registeruseCase.execute({  releaseData, designer, developer, genre, mode, name, platform })

        return res.status(201).json({ message: 'Registro criado com sucesso!'})
    }
}

export { RegisterGameController }