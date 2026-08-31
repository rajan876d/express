import express from "express";
import productControllers from "../controllers/product.controllers.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.get("/",productControllers.getproducts);

router.get("/brands",productControllers.getbrands);

router.get("/:id",productControllers.getproductById);

router.put("/:id",auth,productControllers.updateProduct);

router.delete("/:id",auth,productControllers.deleteProduct);

router.post("/",auth,
     roleBasedAuth("MERCHANT"),
     productControllers.createProduct);

export default router;