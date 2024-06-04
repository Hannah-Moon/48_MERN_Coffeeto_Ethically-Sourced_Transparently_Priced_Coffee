import "./CartCard.css";
// import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";

const CartCard = ({ cartCard }) => {
  const { removeFromCart } = useContext(CoffeeContext);

  const handleRemove = () => {
    removeFromCart(cartCard);
  };

  // const navigate = useNavigate();

  return (
    <div
      className="flexColStart coffee-card"
      // onClick={() => navigate(`../shop/${favoriteCard.id}`)}
    >
      <div>
        <img src={cartCard.image_url} alt={cartCard.name} />
      </div>
      <div className="card-text">
        <span className="coffee-name">{cartCard.name}</span>

        <span className="price-text">
          <span className="tertiaryText">$</span>
          <span>{cartCard.price}</span>
          <span className="tertiaryText"> | </span>
          <span>{cartCard.weight}g</span>
        </span>
        <span className="description-text">{cartCard.description}</span>
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

export default CartCard;
