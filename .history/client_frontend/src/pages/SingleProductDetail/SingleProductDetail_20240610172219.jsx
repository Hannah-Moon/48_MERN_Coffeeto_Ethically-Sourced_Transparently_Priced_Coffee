import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCoffee } from "../../coffeetoAPI/coffeetoAPI.js";

const SingleProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoadingm, isError } = useQuery(["selectedCoffee", id], () =>
    getCoffee(id)
  );
  // console.log(id);
  console.log(data);

  return (
    <>
      <Header />
      <h1>This is invidiual product detail page</h1>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
