import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a user
export const createUser = asyncHandler(async (req, res) => {
  try {
    console.log("Creating a user");

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (!userExists) {
      const user = await prisma.user.create({ data: req.body });
      res.status(201).json({
        message:
          "Your user profile is created successfully! Enjoy using our platform!",
        user,
      });
    } else {
      res.status(200).json({
        message: `Your user profile is already registered with the email address ${email}.`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: error.message,
    });
  }
});

// Function to add a coffee to cart
export const addCart = asyncHandler(async (req, res) => {
  const { email, name } = req.body;
  const { id } = req.params;

  if (!email || !id || !name) {
    return res
      .status(400)
      .json({ message: "Email, coffee ID, and coffee name are required." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { addCarts: true }, // Ensure `addCarts` exists in your schema
    });

    if (user.addCarts.some((cart) => cart.id === id)) {
      return res.status(400).json({
        message:
          "This coffee is already in your cart. If you want to add more quantity, please increase the quantity in your cart.",
      });
    } else {
      await prisma.user.update({
        where: { email },
        data: {
          addCarts: { push: { id, name } }, // Ensure `addCarts` is an array of objects
        },
      });
    }
    res.status(200).json({ message: "Coffee added to cart successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: err.message,
    });
  }
});

// Function to get all products of a user
export const getAllCartItems = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const cartItems = await prisma.user.findUnique({
      where: { email },
      select: { addCarts: true },
    });
    res.status(200).json(cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: err.message,
    });
  }
});

// Function to cancel the coffee from the cart
export const cancelCoffeeFromCart = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { addCarts: true },
    });

    const index = user.addCarts.findIndex((cart) => cart.id === id);

    if (index === -1) {
      return res
        .status(404)
        .json({ message: "Coffee is not found in your cart." });
    } else {
      user.addCarts.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          addCarts: user.addCarts,
        },
      });
      res.status(200).json({
        message: "Your selected coffee item is removed from the cart.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: err.message,
    });
  }
});

// Function to add a coffee to the favorite list of a user
export const addToFavorite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { coffeeID } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favCoffeesID.includes(coffeeID)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favCoffeesID: {
            set: user.favCoffeesID.filter((id) => id !== coffeeID),
          },
        },
      });

      res.status(200).json({
        message: "Your selected coffee is removed from favorites.",
        user: updateUser,
      });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favCoffeesID: {
            set: [...user.favCoffeesID, coffeeID],
            // push: coffeeID,
          },
        },
      });
      res.status(200).json({
        message: "Your selected coffee has been added to favorites.",
        user: updateUser,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: err.message,
    });
  }
});

// Function to get all favorites
export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favCoffees = await prisma.user.findUnique({
      where: { email },
      select: { favCoffeesID: true },
    });
    res.status(200).json(favCoffees);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: err.message,
    });
  }
});
