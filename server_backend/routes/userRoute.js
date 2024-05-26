import express from "express";
import {
  createUser,
  addCart,
  getAllCartItems,
  cancelCoffeeFromCart,
  addToFavorite,
  getAllFavorites,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/createUserAccount", createUser);
router.post("/addCart/:id", addCart);
router.post("/getAllCartItems", getAllCartItems);
router.post("/cancelCoffeeFromCart/:id", cancelCoffeeFromCart);
router.post("/addToFavorite/:coffeeID", addToFavorite);
router.post("/getAllFavorites", getAllFavorites);

export { router as userRoute };
