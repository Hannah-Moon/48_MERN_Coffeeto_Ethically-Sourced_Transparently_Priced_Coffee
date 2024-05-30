import data from "../../data/slider.json";
import "./Products.css";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Products = () => {
  return (
    <>
      {/* New Collection */}
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="flexColStart products-head">
            <span className="eyebrowText">Just In</span>
            <span className="primaryText">
              Arabista Coffee - Premium Turkish Coffee
            </span>
          </div>

          <div className="products-grid">
            {data.slice(0, 4).map(
              (
                card,
                i // Adjusted to show 4x4 grid
              ) => (
                <div key={i} className="just-in-card">
                  <CoffeeCard card={card} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Steady Seller Selection */}
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="flexColStart products-head">
            <span className="eyebrowText">Thoughtful Choice</span>
            <span className="primaryText">Steady Seller Selection</span>
          </div>

          <div className="products-grid">
            {data.slice(5, 16).map(
              (
                card,
                i // Adjusted to show 4x4 grid
              ) => (
                <div key={i} className="stead-seller-card">
                  <CoffeeCard card={card} />
                </div>
              )
            )}
          </div>
          <div className="load-more-button">
            <button className="button">Load More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
