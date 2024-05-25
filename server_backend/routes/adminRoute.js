import express from "express";
import { createAdmin } from "../controllers/adminController.js";
const router = express.Router();

router.post("/register", createAdmin);

export { router as adminRoute };
