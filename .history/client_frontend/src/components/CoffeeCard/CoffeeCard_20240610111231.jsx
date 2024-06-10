/* eslint-disable react/prop-types */
import "./CoffeeCard.css";
import { useState, useContext, useEffect } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const CoffeeCard = ({ card }) => {
  const {
    addToFavorite,
    removeFromFavorite,
    addToCart,
    // removeFromCart,
    favorites,
    cart,
  } = useContext(CoffeeContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    // Check if the coffee is already in favorites
    const favorite = favorites.some(
      (favoriteCard) => favoriteCard.name === card.name
    );
    setIsFavorite(favorite);

    const inCart = cart.some((cartCard) => cartCard.name === card.name);
    setIsCart(inCart);
  }, [favorites, cart, card.name]);

  // Add to favorites
  const handleAddFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(card);
    } else {
      addToFavorite(card);
    }
    setIsFavorite(!isFavorite);
  };

  // Add to Cart
  // const handleAddCart = () => {
  //   if (isCart) {
  //     removeFromCart(card);
  //   } else {
  //     addToCart(card);
  //   }
  //   setIsCart(!isCart);
  // };

  const handleAddCart = () => {
    if (isCart) {
      console.log(`${card.name} is already in the cart!`);
      alert(`${card.name} is already in the cart!`);
    } else {
      addToCart(card);
      alert(`${card.name} has been added to the cart!`);
      setIsCart(true); // Ensure the button text updates to "Added to Cart"
    }
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
          {" "}
          <button className="tertiaryButton" onClick={handleAddFavorite}>
            {isFavorite ? (
              <IoMdHeart color="red" size={30} />
            ) : (
              <CiHeart color="red" size={30} />
            )}
          </button>
          <button className="button" onClick={handleAddCart}>
            {isCart ? "Added to Cart" : "Add to Cart"}
          </button>
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
