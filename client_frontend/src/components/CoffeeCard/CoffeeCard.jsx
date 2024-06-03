/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { useState, useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ card }) => {
  const { addToFavorite } = useContext(CoffeeContext);
  const [isFavorite, setIsFavorite] = useState(false); // State for managing heart icon fill

  const handleAdd = () => {
    addToFavorite(card);
    // Change color on click
    setIsFavorite(!isFavorite); // Toggle favorite state

    //--------------------------- { remove from favorite experiment }
    // const { removeFromFavorite } = useContext(CoffeeContext);

    // const handleRemove = () => {
    //   removeFromFavorite(card);

    //--------------------------- { remove from favorite experiment }
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
