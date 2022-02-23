import { Router } from "express"
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

//midlewares dentro do metodo serão usados apenas no método
router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)

export { router }