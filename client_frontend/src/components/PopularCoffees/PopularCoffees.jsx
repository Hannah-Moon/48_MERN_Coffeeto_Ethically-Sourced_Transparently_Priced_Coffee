import "./PopularCoffees.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../data/slider.json";
import { sliderSettings } from "./swiperLogic.js";
import CoffeeCard from "../CoffeeCard/CoffeeCard.jsx";

const PopularCoffees = () => {
  return (
    <section className="popular-wrapper">
      <div className="paddings innerWidth popular-container">
        <div className="flexColStart popular-head">
          <span className="eyebrowText">Best Sellers</span>
          <span className="primaryText">Popular Coffees</span>
        </div>

        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <CoffeeCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCoffees;
