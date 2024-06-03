import { useState } from "react";
import "./SearchForm.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchForm(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.coffeeSearch([formData.searchterm]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="coffee-finder">
        <FaMagnifyingGlass
          color="var(--lightgrey)"
          size={22}
          className="MagnifyingGlass"
        />
        <input
          className="search-bar-shop"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input className="submit-key-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
