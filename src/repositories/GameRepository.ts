import { IGameDTO } from "../entities/game";

interface IGameRepository {
    register(game: IGameDTO): Promise<void>
}

export { IGameRepository }