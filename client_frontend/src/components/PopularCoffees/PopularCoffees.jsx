import "./PopularCoffees.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";

const PopularCoffees = () => {
  return (
    <section className="popularWrapper">
      <div className="paddings innerWidth popularContainer">
        <div className="flexColStart popularHead">
          <span className="eyebrowText">Best Sellers</span>
          <span className="primaryText">Popular Coffees</span>
        </div>

        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="popularCard">
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
  );
};

export default PopularCoffees;
