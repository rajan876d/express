import express from "express";
import orderControlles from "../controllers/order.controllers.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { Role_Customer } from "../constants/role.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", orderControlles.getAllOrders);
router.get("/:id", orderControlles.getOrderById);
router.post("/",auth,roleBasedAuth(Role_Customer), orderControlles.createOrder);
router.put("/:id", orderControlles.updateOrderById);
router.delete("/:id", orderControlles.deleteOrderById);

export default router;