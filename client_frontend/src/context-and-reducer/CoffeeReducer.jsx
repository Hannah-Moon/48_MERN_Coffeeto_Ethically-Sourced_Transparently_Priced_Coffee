export const initialState = {
  favorites: [],
  cart: [],
};

const coffeeReducer = (state, action) => {
  switch (action.type) {
    case "add_favorite":
      console.log(
        "Favorite state is being updated. Selected coffee is added to the favorites.: ",
        state
      );
      return {
        ...state,
        favorites: action.payload,
      };

    case "remove_favorite":
      console.log("Favorite state is removed from favorites.: ", state);
      return {
        ...state,
        favorites: action.payload,
      };

    case "add_cart":
      console.log(
        "Cart state is being updated. Selected coffee is added to the cart.: ",
        state
      );
      return {
        ...state,
        cart: action.payload,
      };
    case "remove_cart":
      console.log("Cart state is removed from the cart.: ", state);

      return {
        ...state,
        cart: action.payload,
      };

    default:
      throw Error("Cannot match case with the reducer!");
  }
};

export default coffeeReducer;
