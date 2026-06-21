import express from "express";

import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem
} from "../controllers/itemController.js";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getItems);

router.get("/:id", getItemById);

router.post(
  "/",
  protect,
  upload.single("image"),
  createItem
);

router.put(
  "/:id",
  protect,
  updateItem
);

router.delete(
  "/:id",
  protect,
  deleteItem
);

export default router;
