import express from "express";
import { createUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/createUserAccount", createUser);
// router.post("/addCart/:id", addCart);

export { router as userRoute };
