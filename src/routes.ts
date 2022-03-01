import { Router } from "express"
import { CreateUserController } from "./controller/CreateUserController";
import { CreateTagController } from "./controller/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

//midlewares dentro do metodo serão usados apenas no método
router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }