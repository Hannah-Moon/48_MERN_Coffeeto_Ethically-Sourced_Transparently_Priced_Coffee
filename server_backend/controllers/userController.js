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
      res.status(201).send({
        message:
          "Your user profile is created successfully! Enjoy using our platform!",
        user,
      });
    } else {
      res.status(200).send({
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

// Function to add a coffee to favorite
