import { Router } from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  getProductsById,
} from "../../controllers/product/product.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getProductsById);
router.delete("/products/:id", deleteProduct);

export default router;
