import { useContext } from "react";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext.jsx";
import CoffeeCard from "../CoffeeCard/CoffeeCard.jsx";

const FavoriteCoffee = ({ coffee }) => {
  const { removeFromFavorite } = useContext(CoffeeContext);

  const handleRemove = () => {
    removeFromFavorite(coffee);
  };

  return (
    <div className="products-grid">
      {data.slice(0, 4).map((i) => (
        <div key={i} className="just-in-card">
          <CoffeeCard card={card} />
        </div>
      ))}
      <button
        className="bg-pink-700 text-white text-lg font-medium rounded-md p-1 hover:bg-yellow-500 mt-2 mb-5"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default FavoriteCoffee;
