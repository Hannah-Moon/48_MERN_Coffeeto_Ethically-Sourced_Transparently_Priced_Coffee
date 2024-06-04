import "./CartCard.css";
import { useState, useContext, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";

const CartCard = ({ cartCard }) => {
  const { removeFromCart, addToCart, cart } = useContext(CoffeeContext);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    // Ensure cartCard is defined before accessing its properties.
    if (cartCard) {
      // Check if the coffee is already in the cart.
      const inCart = cart.some((item) => item.name === cartCard.name);
      setIsCart(inCart);
    }
  }, [cart, cartCard]);

  // Remove from cart
  const handleRemove = () => {
    if (cartCard) {
      removeFromCart(cartCard);
    }
  };

  // Add to Cart
  const handleAddCart = () => {
    if (cartCard) {
      if (isCart) {
        console.log(`${cartCard.name} is already in the cart!`);
        alert(`${cartCard.name} is already in the cart!`);
      } else {
        addToCart(cartCard);
        alert(`${cartCard.name} has been added to the cart!`);
      }
      setIsCart(!isCart);
    }
  };

  // Return early if cartCard is not defined.
  if (!cartCard) {
    return null;
  }

  return (
    <div className="flexColStart cart-card">
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
        <button className="button" onClick={handleAddCart}>
          {isCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CartCard;
