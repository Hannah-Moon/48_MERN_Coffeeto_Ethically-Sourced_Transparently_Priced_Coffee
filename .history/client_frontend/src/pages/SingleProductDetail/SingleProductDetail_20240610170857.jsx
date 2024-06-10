import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const SingleProductDetail = () => {
  const { pathname } = useLocation();

  const { data, isLoadingm, isError } = useQuery(["selectedCoffee"]);
  return (
    <>
      <Header />
      <h1>This is invidiual product detail page</h1>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
