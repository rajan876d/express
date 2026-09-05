import express from "express";
import authControllers from "../controllers/auth.controllers.js";
import logger from "../middlewares/logger.js";
import  validate from "../middlewares/validator.js";
import { userSchema } from "../libs/schemas/user.schema.js";
import { loginSchema } from "../libs/schemas/auth.schema.js";

const router = express.Router();


router.post("/login", logger,validate(loginSchema),authControllers.login);
router.post("/register",logger,validate(userSchema) ,authControllers.register);
router.post("/logout",logger, authControllers.logout);

export default router;