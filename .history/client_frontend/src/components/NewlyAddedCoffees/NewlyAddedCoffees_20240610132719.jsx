import useCoffees from "../../hooks/useCoffees.jsx";
import "./NewlyAddedCoffees.css";
import { ClipLoader } from "react-spinners";

const NewlyAddedCoffees = () => {
  const { data, isError, isLoading } = useCoffees();
  //   console.log(data);
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
    <div className="flexColStart products-head">
      <span className="eyebrowText">Newly Added Coffee</span>
      <span className="primaryText">Try New Flavor</span>
    </div>
  );
};

export default NewlyAddedCoffees;
