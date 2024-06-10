import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useEffect, useState, useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
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
  const { addToFavorite, removeFromFavorite, addToCart, favorites, cart } =
    useContext(CoffeeContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const {
    data: productDetail,
    isLoading,
    isError,
  } = useQuery(["selectedCoffee", id], () => getCoffee(id));

  useEffect(() => {
    if (productDetail) {
      const favorite = favorites.some(
        (favoriteCard) => favoriteCard.name === productDetail.name
      );
      setIsFavorite(favorite);

      const inCart = cart.some(
        (cartCard) => cartCard.name === productDetail.name
      );
      setIsCart(inCart);
    }
  }, [favorites, cart, productDetail]);

  const handleAddFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(productDetail);
    } else {
      addToFavorite(productDetail);
    }
    setIsFavorite(!isFavorite);
  };

  const handleAddCart = () => {
    if (isCart) {
      console.log(`${productDetail.name} is already in the cart!`);
      alert(`${productDetail.name} is already in the cart!`);
    } else {
      addToCart(productDetail);
      alert(`${productDetail.name} has been added to the cart!`);
      setIsCart(true);
    }
  };

  if (isError) {
    return (
      <>
        <Header />
        <div className="wrapper">
          <span>
            Sorry. We encountered an error while fetching data from our server!
          </span>
        </div>
        <Footer />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="wrapper flexCenter" style={{ height: "60vh" }}>
          <ClipLoader
            height={100}
            width={100}
            color="#352208"
            aria-label="clip-loader"
          />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="flexColStart paddings innerWidth singleproductdetail-container">
          <div className="button-container">
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
          {/* Add more product detail rendering here as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
