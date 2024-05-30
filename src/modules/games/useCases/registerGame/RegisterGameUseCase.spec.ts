import { IGameDTO } from "../../infra/entities/game";
import { GameRepository } from "../../infra/repositories/GameRepository";
import { IGameRepository } from "../../infra/repositories/IGameRepository";
import { RegisterGameUseCase } from "./RegisterGameUseCase";

const RegisterGameUseCaseMock =
  RegisterGameUseCase as jest.Mock<RegisterGameUseCase>;

describe("RegisterGameUseCase", () => {
  let sut: RegisterGameUseCase;
  const data: IGameDTO = {
    name: "Game Test",
    releaseData: "2024",
    designer: "Toru Iwatani",
    developer: "Namco",
    genre: "Maze",
    mode: "Single-player, multiplayer",
    platform: "Arcade",
  };

  const mockGameRepository: IGameRepository = {
    register: jest.fn().mockResolvedValueOnce([]),
  };

  beforeEach(() => {
    sut = new RegisterGameUseCaseMock(mockGameRepository);
  });

  test("should be able to register a new game", async () => {
    const gameRepository = new GameRepository();

    const response = await sut.execute(data);
    expect(response).toBe(undefined);
  });
});
