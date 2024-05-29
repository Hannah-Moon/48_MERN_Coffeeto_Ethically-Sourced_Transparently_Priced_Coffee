import "swiper/css";
import data from "../../data/slider.json";
import "./Products.css";

const PopularCoffees = () => {
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
                <div key={i} className="popular-card">
                  <div>
                    <img src={card.image_url} alt={card.name} />
                  </div>
                  <div className="card-text">
                    <span className="coffee-name">{card.name}</span>

                    <span className="price-text">
                      <span style={{ color: "#F49B33" }}>$</span>
                      <span>{card.price}</span>
                      <span style={{ color: "lt.grey" }}> | </span>
                      <span>{card.weight}g</span>
                    </span>
                    <span className="description-text">{card.description}</span>
                  </div>
                  <div className="button-container">
                    <button className="tertiaryButton">Favorite</button>
                    <button className="button">Add to Cart</button>
                  </div>
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
                <div key={i} className="popular-card">
                  <div>
                    <img src={card.image_url} alt={card.name} />
                  </div>
                  <div className="card-text">
                    <span className="coffee-name">{card.name}</span>

                    <span className="price-text">
                      <span style={{ color: "#F49B33" }}>$</span>
                      <span>{card.price}</span>
                      <span style={{ color: "lt.grey" }}> | </span>
                      <span>{card.weight}g</span>
                    </span>
                    <span className="description-text">{card.description}</span>
                  </div>
                  <div className="button-container">
                    <button className="tertiaryButton">Favorite</button>
                    <button className="button">Add to Cart</button>
                  </div>
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

export default PopularCoffees;
