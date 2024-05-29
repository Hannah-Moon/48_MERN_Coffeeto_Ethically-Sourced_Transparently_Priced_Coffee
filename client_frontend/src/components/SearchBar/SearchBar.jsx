import "./SearchBar.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="inputText" />
      <button className="tertiaryButton">
        <FaMagnifyingGlass color="var(--orange)" />
      </button>
    </div>
  );
};

export default SearchBar;
