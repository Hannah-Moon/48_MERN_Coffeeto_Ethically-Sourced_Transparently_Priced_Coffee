import "./PopularCoffees.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";

const PopularCoffees = () => {
  return (
    <section className="popularWrapper">
      <div className="paddings innerwidth pupularContainer">
        <div className="popularHead flexColStart">
          <span>Best Sellers</span>
          <span>Popular Coffees</span>
        </div>
      </div>
    </section>
  );
};

export default PopularCoffees;
