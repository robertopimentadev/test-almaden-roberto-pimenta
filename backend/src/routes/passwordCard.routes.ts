import { Router } from "express";
import { PasswordCardController } from "../controllers/passwordCard.controller";

const router = Router();
const controller = new PasswordCardController();

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;