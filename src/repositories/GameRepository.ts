import prisma from "../../prisma/prismaClient";
import { IGameDTO } from "../entities/game";
import { IGameRepository } from "./IGameRepository";

class GameRepository implements IGameRepository {
    async register({designer, developer, genre, mode, name, platform, releaseData  }: IGameDTO): Promise<void> {
        await prisma.game.create({
            data: {
                releaseData,
                designer, 
                developer, 
                genre,
                mode,
                name,
                platform
            }
        })
    }
    
}

export { GameRepository }