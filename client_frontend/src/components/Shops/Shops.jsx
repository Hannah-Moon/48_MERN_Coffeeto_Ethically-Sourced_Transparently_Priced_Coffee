import { useState, useEffect } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

const Shops = () => {
  const defaultCoffees = [
    "Signature Blend",
    "Golden Sunrise",
    "Rainforest Rhapsody",
    "Harvest Moon",
  ];

  // eslint-disable-next-line no-unused-vars
  const [coffees, setCoffees] = useState([]);

  const getCoffees = async (coffeeNames) => {
    const promises = coffeeNames.map(async (name) => {
      try {
        const response = await fetch(
          "https://fake-coffee-api.vercel.app/api"
        ).then((res) => res.json());
        //   .then((data) => console.log(data));

        const data = await response.json();

        return data;
      } catch (error) {
        console.error(`Error fetching data for ${name}:`, error);
        return null;
      }
    });

    const coffeesData = await Promise.all(promises);
    setCoffees(coffeesData.filter((coffee) => coffee !== null));
  };

  useEffect(() => {
    getCoffees(defaultCoffees);
  }, []);

  return (
    <div>
      <SearchForm moviesearch={getCoffees} />
      <CoffeeCard />
    </div>
  );
};

export default Shops;
