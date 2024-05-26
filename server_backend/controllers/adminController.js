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
