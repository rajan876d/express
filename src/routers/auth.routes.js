import express from "express";
import authControllers from "../controllers/auth.controllers.js";
import logger from "../middlewares/logger.js";

const router = express.Router();


router.post("/login", logger,authControllers.login);
router.post("/register",logger, authControllers.register);
router.post("/logout",logger, authControllers.logout);

export default router;