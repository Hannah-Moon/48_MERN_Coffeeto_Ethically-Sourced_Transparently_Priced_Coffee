import { useState } from "react";

export default function Form(props) {
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
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input className="submitBtn" type="submit" value="search" />
      </form>
    </div>
  );
}
