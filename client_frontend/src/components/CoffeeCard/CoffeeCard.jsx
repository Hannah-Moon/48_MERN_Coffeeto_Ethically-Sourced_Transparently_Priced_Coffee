/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { useState, useContext, useEffect } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const CoffeeCard = ({ card }) => {
  const { addToFavorite, removeFromFavorite, coffees } =
    useContext(CoffeeContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the coffee is already in favorites
    const favorite = coffees.some(
      (favoriteCard) => favoriteCard.name === card.name
    );
    setIsFavorite(favorite);
  }, [coffees, card.name]);

  const handleAdd = () => {
    if (isFavorite) {
      removeFromFavorite(card);
    } else {
      addToFavorite(card);
    }
    setIsFavorite(!isFavorite);
  };

  const loaded = () => {
    return (
      <div className="flexColStart coffee-card">
        <div>
          <img src={card.image_url} alt={card.name} />
        </div>
        <div className="card-text">
          <span className="coffee-name">{card.name}</span>
          <span className="price-text">
            <span className="tertiaryText">$</span>
            <span>{card.price}</span>
            <span className="tertiaryText"> | </span>
            <span>{card.weight}g</span>
          </span>
          <span className="description-text">{card.description}</span>
        </div>
        <div className="button-container">
          <button className="tertiaryButton" onClick={handleAdd}>
            {isFavorite ? (
              <IoMdHeart color="red" size={30} />
            ) : (
              <CiHeart color="red" size={30} />
            )}
          </button>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <h4 className="text-xl font-semibold">
        {card.name} Sorry! We do not find the coffee you are looking for! Can
        you try another word?!
      </h4>
    );
  };

  return card ? loaded() : loading();
};

export default CoffeeCard;
