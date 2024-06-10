import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCoffee } from "../../coffeetoAPI/coffeetoAPI.js";
import { ClipLoader } from "react-spinners";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import "./SingleProductDetail.css";

const SingleProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
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

  const { data, isLoading, isError } = useQuery(["selectedCoffee", id], () =>
    getCoffee(id)
  );
  //  ---------------------- [ Test data ]
  console.log(id);
  console.log(data);

  if (isError) {
    return (
      <div className="wrapper">
        <span>
          Sorry. We encountered error while fetching data from our server!
        </span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="wrapper flexCenter" style={{ height: "60vh" }}>
          <ClipLoader
            height="100"
            width="100"
            color="352208"
            aria-label="clip-loader"
          />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="wrapper">
        <div className="flexColStart paddings innerWidth singleproductdetail-container">
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
      </div>
    </>
  );
};

export default SingleProductDetail;
