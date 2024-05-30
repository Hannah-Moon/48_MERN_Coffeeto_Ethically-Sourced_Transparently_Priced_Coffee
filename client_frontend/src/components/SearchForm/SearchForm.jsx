import { useState } from "react";
import "./SearchForm.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchForm(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to coffeesearch prop, which is App's getcoffee function
    props.coffeeSearch([formData.searchterm]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="coffee-finder">
        <FaMagnifyingGlass color="var(--lightgrey)" size={22} />
        <input
          // className="search"
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
