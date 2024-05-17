import { IGameDTO } from "../entities/game";
import { IGameRepository } from "../repositories/IGameRepository";

class RegisterGameUseCase {
    constructor(private gameRepository: IGameRepository) {
    }
    async execute({ designer, developer, genre, mode, name, plataform, releaseData }: IGameDTO): Promise<void> {
        await this.gameRepository.register({
            designer,
            developer, 
            genre,
            mode, 
            name,
            plataform,
            releaseData
        })
    }
}

export { RegisterGameUseCase };