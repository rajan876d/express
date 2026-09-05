import express from "express";
import userController from "../controllers/user.controllers.js";
import validate from "../middlewares/validator.js";
import {userSchema} from "../libs/schemas/user.schema.js";

const router = express.Router();
 
router.post("/users",validate(userSchema), userController.createUser);
router.get(" /users", userController.getUser);

export default router;