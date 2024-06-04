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
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((cartItem, index) => (
            <CartCard key={index} cartCard={cartItem} />
          ))
        ) : (
          <>
            {/* <p>Your cart is empty.</p> */}
            <img src="/No_Product.png" alt="Empty Cart" />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
