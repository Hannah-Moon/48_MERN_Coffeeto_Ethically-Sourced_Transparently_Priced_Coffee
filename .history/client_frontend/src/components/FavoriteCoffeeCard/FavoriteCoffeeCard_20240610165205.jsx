import "./FavoriteCoffeeCard.css";
import { useState, useContext, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
import { useNavigate } from "react-router-dom";

const FavoriteCoffeeCard = ({ favoriteCard }) => {
  const navigate = useNavigate();
  const { removeFromFavorite, addToCart, cart } = useContext(CoffeeContext);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    // Check if the coffee is already in the cart.
    const inCart = cart.some((cartCard) => cartCard.name === favoriteCard.name);
    setIsCart(inCart);
  }, [cart, favoriteCard.name]);

  // Remove from favorites
  const handleRemove = () => {
    removeFromFavorite(favoriteCard);
  };

  // Add to Cart
  const handleAddCart = () => {
    if (isCart) {
      console.log(`${favoriteCard.name} is already in the cart!`);
      alert(`${favoriteCard.name} is already in the cart!`);
    } else {
      addToCart(favoriteCard);
      alert(`${favoriteCard.name} has been added to the cart!`);
      setIsCart(true); // Ensure the button text updates to "Added to Cart"
    }
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
        <button className="button" onClick={handleAddCart}>
          {isCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default FavoriteCoffeeCard;
