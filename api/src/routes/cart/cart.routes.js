import { Router } from "express";
import {
  getCart,
  createCart,
  deleteCart,
  getAllCarts,
  updateCart,
  getCartByItem,
} from "../../controllers/cart/cart.controllers.js";

const router = Router();
router.get("/cart", getAllCarts);
router.get("/cartItems/:id", getCartByItem);
router.get("/cart/:id", getCart);
router.put("/cart/:id", updateCart);
router.post("/cart", createCart);
router.delete("/cart/:id", deleteCart);

export default router;
