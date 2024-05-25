import express from "express";
import {
  createCoffee,
  getAllCoffees,
  //   getCoffee,
} from "../controllers/coffeeController.js";
const router = express.Router();

router.post("/create", createCoffee);
router.get("/allcoffees", getAllCoffees);
// router.get("/:id", getCoffee);

export { router as coffeeRoute };
