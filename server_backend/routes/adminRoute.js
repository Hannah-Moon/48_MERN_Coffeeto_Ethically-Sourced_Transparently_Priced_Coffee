import express from "express";
import { createAdmin, addCart } from "../controllers/adminController.js";
const router = express.Router();

router.post("/register", createAdmin);
router.post("/addCart/:id", addCart);

export { router as adminRoute };
