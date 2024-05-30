import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ShopBanner from "../components/ShopBanner/ShopBanner.jsx";
// import Products from "../components/Products/Products.jsx";
import Shops from "../components/Shops/Shops.jsx";

function Shop() {
  return (
    <>
      <Header />
      <ShopBanner />
      {/* <Products /> */}
      <Shops />
      <Footer />
    </>
  );
}

export default Shop;
