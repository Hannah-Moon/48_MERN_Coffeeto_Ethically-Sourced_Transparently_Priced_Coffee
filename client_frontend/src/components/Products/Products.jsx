import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import "./Products.css";

const PopularCoffees = () => {
  return (
    <>
      {/* Favorite coffee */}
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="flexColStart products-head">
            <span className="eyebrowText">Best Sellers</span>
            <span className="primaryText">Popular Coffees</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart popular-card">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* New Collection */}
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="flexColStart products-head">
            <span className="eyebrowText">Just In</span>
            <span className="primaryText">
              Arabista Coffee - Premium Turkish Coffee
            </span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart popular-card">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            {data.slice(0, 8).map(
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

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter popular-btns">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
