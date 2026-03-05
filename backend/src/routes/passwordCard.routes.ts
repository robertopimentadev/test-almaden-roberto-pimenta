import { Router } from "express";
import { PasswordCardController } from "../controllers/passwordCard.controller";
import { validate } from "../middlewares/validate";
import {
    createPasswordCardSchema,
    updatePasswordCardSchema,
} from "../schemas/passwordCard.schema";

const router = Router();
const controller = new PasswordCardController();

router.get("/", controller.getAll);
router.post("/", validate(createPasswordCardSchema), controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;