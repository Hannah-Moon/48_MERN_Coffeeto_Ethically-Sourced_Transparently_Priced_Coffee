import { useState, useEffect } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import "./Shops.css";

const Shops = () => {
  const [coffees, setCoffees] = useState([]);

  const getCoffees = async (searchTerms = []) => {
    try {
      const response = await fetch("https://fake-coffee-api.vercel.app/api");
      const data = await response.json();

      if (searchTerms.length > 0) {
        const filteredCoffees = data.filter((coffee) =>
          coffee.name.toLowerCase().includes(searchTerms[0].toLowerCase())
        );
        setCoffees(filteredCoffees);
      } else {
        setCoffees(data);
      }

      console.log("Success fetching data!");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCoffees();
  }, []);

  return (
    <>
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="search-container">
            <SearchForm coffeeSearch={getCoffees} />
          </div>

          <div className="flexColStart products-head">
            <span className="eyebrowText">Experience the Exceptional</span>
            <span className="primaryText">Refined Selection</span>
          </div>

          <div className="products-grid">
            {coffees.slice(0, 8).map((card, i) => (
              <div key={i} className="just-in-card">
                <CoffeeCard card={card} />
              </div>
            ))}
          </div>
          <div className="load-more-container">
            <button className="load-more-button" type="button">
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shops;
