import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ViewProduct from "../../components/ViewProduct/ViewProduct.jsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { coffeetoAPI } from "../coffeetoAPI/coffeetoAPI";

const SingleProductDetail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(["product", id], async () => {
    const response = await coffeetoAPI.get(`/coffees/${id}`);
    return response.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <>
      <Header />
      <ViewProduct />
      <div className="product-detail">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>Price: ${data.price}</p>
        {/* Add other product details as needed */}
      </div>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
