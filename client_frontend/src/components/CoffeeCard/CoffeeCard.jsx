/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart coffee-card"
      onClick={() => navigate(`../shop/${card.id}`)}
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
              navigate("/favorite");
            }}
          />
        </button>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
