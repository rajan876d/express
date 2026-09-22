import express from "express";
import userController from "../controllers/user.controllers.js";
import validate from "../middlewares/validator.js";
import {userSchema} from "../libs/schemas/user.schema.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
 
router.post("/users",validate(userSchema), userController.createUser);
router.get("/users", userController.getUser);

router.patch("/profile-image",auth,userController.updateProfileImage);

export default router;