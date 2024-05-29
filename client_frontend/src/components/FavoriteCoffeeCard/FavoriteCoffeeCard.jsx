import "./FavoriteCoffeeCard.css";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";

const FavoriteCoffeeCard = ({ favoriteCard }) => {
  const navigate = useNavigate();
  const { removeFromFavorite } = useContext(CoffeeContext);
  const handleRemove = () => {
    removeFromFavorite(favoriteCard);
  };

  return (
    <div
      className="flexColStart coffee-card"
      onClick={() => navigate(`../shop/${favoriteCard.id}`)}
    >
      <div>
        <img src={favoriteCard.image_url} alt={favoriteCard.name} />
      </div>
      <div className="card-text">
        <span className="coffee-name">{favoriteCard.name}</span>

        <span className="price-text">
          <span className="tertiaryText">$</span>
          <span>{favoriteCard.price}</span>
          <span className="tertiaryText"> | </span>
          <span>{favoriteCard.weight}g</span>
        </span>
        <span className="description-text">{favoriteCard.description}</span>
      </div>
      <div className="button-container">
        <button className="tertiaryButton">
          <FaRegTrashAlt color="green" size={20} onClick={handleRemove} />
        </button>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default FavoriteCoffeeCard;
