import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ShopBanner from "../components/ShopBanner/ShopBanner.jsx";
import Products from "../components/Products/Products.jsx";
// import Shops from "../components/Shops/Shops.jsx";
import "./Home.css";

function Shop() {
  return (
    <>
      <Header />
      <ShopBanner />
      <Products />
      {/* <Shop /> */}
      <Footer />
    </>
  );
}

export default Shop;
