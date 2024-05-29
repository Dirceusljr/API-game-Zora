import { Router } from "express";
import { registerGameFactory } from "../../../../modules/games/useCases/registerGame/RegisterGameFactory";

const registerRoutes = Router();

const registerController = registerGameFactory();

registerRoutes.post('/', registerController.handler);

export { registerRoutes }