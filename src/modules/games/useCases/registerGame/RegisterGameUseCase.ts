import { inject, injectable } from "tsyringe";
import { IGameDTO } from "../../infra/entities/game";
import { IGameRepository } from "../../infra/repositories/IGameRepository";

@injectable()
class RegisterGameUseCase {
    constructor(
        @inject("GameRepository")
        private readonly gameRepository: IGameRepository) 
        { }
    async execute({ designer, developer, genre, mode, name, platform, releaseData }: IGameDTO): Promise<void> {
        await this.gameRepository.register({
            designer,
            developer, 
            genre,
            mode, 
            name,
            platform,
            releaseData
        })
    }
}

export { RegisterGameUseCase };