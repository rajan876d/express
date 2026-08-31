import express from "express";
import userController from "../controllers/user.controllers.js";

const router = express.Router();
 
router.post("/users", userController.createUser);
router.get(" /users", userController.getUser);

export default router;