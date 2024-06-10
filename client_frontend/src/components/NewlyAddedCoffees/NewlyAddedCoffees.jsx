import useCoffees from "../../hooks/useCoffees.jsx";
import "./NewlyAddedCoffees.css";

const NewlyAddedCoffees = () => {
  const { data, isError, isLoading } = useCoffees();
  console.log(data);
  return (
    <div className="flexColStart products-head">
      <span className="eyebrowText">Newly Added Coffee</span>
      <span className="primaryText">Try New Flavor</span>
    </div>
  );
};

export default NewlyAddedCoffees;
