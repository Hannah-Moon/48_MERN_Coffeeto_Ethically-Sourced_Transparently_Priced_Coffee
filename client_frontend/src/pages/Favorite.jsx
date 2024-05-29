import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import FavoriteBanner from "../components/FavoriteBanner/FavoriteBanner.jsx";
import "./Home.css";
import { useContext } from "react";
import { CoffeeContext } from "../context-and-reducer/CoffeeContext.jsx";
import FavoriteCoffeeCard from "../components/FavoriteCoffeeCard/FavoriteCoffeeCard.jsx";

const Favorite = () => {
  const { coffees } = useContext(CoffeeContext);
  return (
    <>
      <Header />
      <FavoriteBanner />
      <div className="flex flex-row items-center lg:grid lg:grid-cols-3 px-8 mt-10 mb-10">
        {coffees.map((card, i) => (
          <FavoriteCoffeeCard key={i} favoriteCard={card} />
        ))}
      </div>

      {/* Test code from Product component to store cards. */}

      <Footer />
    </>
  );
};

export default Favorite;
