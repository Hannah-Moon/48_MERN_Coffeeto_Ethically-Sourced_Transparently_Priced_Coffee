import express from "express";
import {
  createAdmin,
  //   addCart,
  //   allProducts,
} from "../controllers/adminController.js";
const router = express.Router();

router.post("/register", createAdmin);
// router.post("/addCart/:id", addCart);
// router.post("/allProducts", allProducts);

export { router as adminRoute };
