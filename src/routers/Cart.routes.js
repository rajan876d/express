import express from "express";
import cartControllers from "../controllers/cart.controllers.js";

const router = express.Router();

router.post("/carts", cartControllers.createCart);
router.get("/",)

export default router;