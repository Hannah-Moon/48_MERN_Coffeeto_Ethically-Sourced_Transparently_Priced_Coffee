import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import Construction from "../components/Construction/Construction.jsx";
import CartCard from "../components/CartCard/CartCard.jsx";
import { useContext } from "react";
import { CoffeeContext } from "../context-and-reducer/CoffeeContext.jsx";

const Cart = () => {
  const { cart } = useContext(CoffeeContext);

  return (
    <>
      <Header />
      {/* <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((cartItem, index) => (
            <CartCard key={index} cartCard={cartItem} />
          ))
        )  */}
      <section className="products-wrapper">
        <div className="paddings innerWidth products-container">
          <div className="flexColStart products-head">
            <span className="eyebrowText">Review</span>
            <span className="primaryText">Shopping cart </span>
          </div>

          <div className="cart-grid">
            {cart.map((cartItem, i) => (
              <CartCard key={i} cartCard={cartItem} />
            ))}
          </div>
        </div>
      </section>{" "}
      : (
      <>
        {/* <p>Your cart is empty.</p> */}
        <img src="/No_Product.png" alt="Empty Cart" />
      </>
      )
      <Footer />
    </>
  );
};

export default Cart;
