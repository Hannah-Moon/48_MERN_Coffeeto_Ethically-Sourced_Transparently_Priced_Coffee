import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCoffee } from "../../coffeetoAPI/coffeetoAPI.js";
import { ClipLoader } from "react-spinners";
import "./SingleProductDetail.css";

const SingleProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

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
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <ClipLoader
          height="100"
          width="100"
          color="352208"
          aria-label="clip-loader"
        />
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <div className="flexColStart paddings innerWidth singleproductdetail-container"></div>
      </div>
    </>
  );
};

export default SingleProductDetail;
