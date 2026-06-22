import express from "express";

import {
  analyzeText
} from "../controllers/sentimentController.js";

const router = express.Router();

router.post(
  "/analyze",
  analyzeText
);

export default router;
