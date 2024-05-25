import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createCoffee = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    region,
    weight,
    roast_level,
    flavor_profile,
    grind_option,
    image,
    adminEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const coffee = await prisma.coffee.create({
      data: {
        name,
        description,
        price,
        region,
        weight,
        roast_level,
        flavor_profile,
        grind_option,
        image,
        adminEmail, // Directly set the adminEmail field
      },
    });
    res.send({ message: "New coffee item is created successfully!" });
  } catch (err) {
    if (err.code === "P2002") {
      res.status(400).send({ message: "A coffee name is already registered." });
    } else {
      res.status(500).send({ message: err.message });
    }
  }
});

// Function to get a specific coffee
export const getCoffee = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const coffee = await prisma.coffee.findUnique({
      where: { id },
    });
    res.send(coffee);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Function to get all coffees
export const getAllCoffees = asyncHandler(async (req, res) => {
  const coffees = await prisma.coffee.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(coffees);
});
