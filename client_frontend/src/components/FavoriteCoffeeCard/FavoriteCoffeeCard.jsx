import "./FavoriteCoffeeCard.css";
// import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";

const FavoriteCoffeeCard = ({ favoriteCard }) => {
  const { removeFromFavorite, addToCart, cart } = useContext(CoffeeContext);
  const [isCart, setIsCart] = useState(false);

  // --------------------- {Interacting with brower if user add the same item to the cart}

  // const notifyAlreadyInCart = (notifyUsersAboutRedundancy) => {
  //   let notification = prompt(notifyUsersAboutRedundancy);
  //   if (notification !== null) {
  //     notification = notification.trim().toLowerCase(); // Trim whitespace and convert to lowercase    if (answer === solution) {
  //       if (notification.toLowerCase() === cart.toLowerCase()) {
  //           alert({name} + 'is added to the cart!');
  //           notifyAlreadyInCart(notifyUsersAboutRedundancy);
  //       } else  {
  //           alert("is already in the cart!");
  //       }
  //   }
  // };

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
    }
    setIsCart(!isCart);
  };

  // const navigate = useNavigate();

  return (
    <div
      className="flexColStart coffee-card"
      // onClick={() => navigate(`../shop/${favoriteCard.id}`)}
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
        </button>{" "}
      </div>
    </div>
  );
};

export default FavoriteCoffeeCard;
