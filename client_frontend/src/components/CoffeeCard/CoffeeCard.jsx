import "./CoffeeCard.css";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

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
        <CiHeart size={30} />
        <button className="tertiaryButton">Favorite</button>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
