import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create an admin
export const createAdmin = asyncHandler(async (req, res) => {
  try {
    console.log("Creating an admin");

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const adminExists = await prisma.admin.findUnique({
      where: { email },
    });

    if (!adminExists) {
      const admin = await prisma.admin.create({ data: req.body });
      res.status(201).send({
        message:
          "Your admin profile is created successfully! Enjoy adding more ethical products!",
        admin,
      });
    } else {
      res.status(200).send({
        message: `Your admin profile is already registered with the email address ${email}.`,
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
    const alreadyAdded = await prisma.admin.findUnique({
      where: { email },
      select: { addCarts: true }, // Ensure `addCarts` exists in your schema
    });

    if (alreadyAdded.addCarts.some((cart) => cart.id === id)) {
      return res.status(400).json({
        message:
          "This coffee is already in your cart. If you want to add more quantity, please increase the quantity in your cart.",
      });
    } else {
      await prisma.admin.update({
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
