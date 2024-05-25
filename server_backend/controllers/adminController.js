import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createAdmin = asyncHandler(async (req, res) => {
  try {
    console.log("creating an admin");

    let { email } = req.body;
    const adminExists = await prisma.admin.findUnique({
      where: { email: email },
    });
    if (!adminExists) {
      const admin = await prisma.admin.create({ data: req.body });
      res.send({
        message:
          "Your admin profile is created successfully! Enjoy adding more ethical product!",
        admin: admin,
      });
    } else
      res.status(201).send({
        message: `Your admin profile is already registered with the email address ${email}.`,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "We encountered a server error at the moment. Please try again.",
      error: error.message,
    });
  }
  console.log(email);
});
