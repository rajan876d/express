import express from "express";
import productControllers from "../controllers/product.controllers.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { productSchema } from "../libs/schemas/product.schema.js";
import validate from "../middlewares/validator.js";
import { userSchema } from "../libs/schemas/user.schema.js";

const router = express.Router();

router.get("/",productControllers.getproducts);

router.get("/brands",productControllers.getbrands);

router.get("/:id",productControllers.getproductById);

router.put("/:id",auth,productControllers.updateProduct);

router.delete("/:id",auth,productControllers.deleteProduct);

router.post("/",auth,
     roleBasedAuth("MERCHANT"),
     // validate(userSchema),
     productControllers.createProduct);

export default router;