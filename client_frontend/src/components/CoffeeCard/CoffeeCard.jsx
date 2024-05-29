/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
// import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ card }) => {
  const { addToFavorite } = useContext(CoffeeContext);

  const handleAdd = () => {
    addToFavorite(card);
  };

  // const navigate = useNavigate();
  const loaded = () => {
    return (
      <div
        className="flexColStart coffee-card"
        // onClick={() => navigate(`../favorite/${card.id}`)}
        // onClick={() => navigate(`../favorite`)}
      >
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
          <button className="tertiaryButton">
            <CiHeart
              color="red"
              size={30}
              onClick={() => {
                console.log("Added to favorite");
                handleAdd();
              }}
            />
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
