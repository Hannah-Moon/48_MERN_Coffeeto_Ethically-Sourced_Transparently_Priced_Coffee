import axios from "axios";

export const coffeetoAPI = axios.create({
  baseURL: "http://localhost:3000/coffeetoAPI",
});

export const getAllCoffees = async () => {
  try {
    const response = await coffeetoAPI.get("/allcoffees", {
      timeout: 5 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    console.log("No data is not coming to your way!");
    throw error;
  }
};

// ------------------ [ Admin Route ]
// router.post("/register", createAdmin);
// *

// ------------------ [ Coffee Route ]
// router.post("/create", createCoffee);
// router.get("/allcoffees", getAllCoffees);
// router.get("/:id", getCoffee);
// *

// ------------------ [ User Route ]
// router.post("/createUserAccount", createUser);
// router.post("/addCart/:id", addCart);
// router.post("/getAllCartItems", getAllCartItems);
// router.post("/cancelCoffeeFromCart/:id", cancelCoffeeFromCart);
// router.post("/addToFavorite/:coffeeID", addToFavorite);
// router.post("/getAllFavorites", getAllFavorites);
// *
