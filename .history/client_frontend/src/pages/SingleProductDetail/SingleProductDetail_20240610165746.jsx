import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useQuery } from "react-query";

const SingleProductDetail = () => {
  const { data, isLoadingm, isError } = useQuery;
  return (
    <>
      <Header />
      <h1>This is invidiual product detail page</h1>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
