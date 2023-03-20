import { Router } from "express";

import {
  getItem,
  createItem,
  deleteItem,
  updateItem,
  getAllItems,
} from "../../controllers/item/item.controllers.js";

const router = Router();
router.get("/item", getAllItems);
router.get("/item/:id", getItem);
router.post("/item", createItem);
router.put("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);
export default router;
