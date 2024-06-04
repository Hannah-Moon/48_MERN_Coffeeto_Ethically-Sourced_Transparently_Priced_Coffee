import { createContext, useReducer } from "react";
import coffeeReducer, { initialState } from "./CoffeeReducer.jsx";

export const CoffeeContext = createContext();

// eslint-disable-next-line react/prop-types
export const CoffeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coffeeReducer, initialState);

  // Create value for AddtoFavorites & RemoveFromFavorites
  const addToFavorite = (coffee) => {
    const updatedFavorites = [...state.favorites, coffee];
    dispatch({
      type: "add_favorite",
      payload: updatedFavorites,
    });
  };

  const removeFromFavorite = (coffee) => {
    const updatedFavorites = state.favorites.filter(
      (currentCoffee) => currentCoffee.name !== coffee.name
    );

    dispatch({
      type: "remove_favorite",
      payload: updatedFavorites,
    });
  };

  // Create value for AddtoCart & RemoveFromCart
  const addToCart = (coffee) => {
    const updatedCart = [...state.cart, coffee];
    dispatch({
      type: "add_cart",
      payload: updatedCart,
    });
  };

  const removeFromCart = (coffee) => {
    const updatedCart = state.cart.filter(
      (currentCoffee) => currentCoffee.name !== coffee.name
    );

    dispatch({
      type: "remove_cart",
      payload: updatedCart,
    });
  };

  const value = {
    favorites: state.favorites,
    cart: state.cart,
    addToFavorite,
    removeFromFavorite,
    addToCart,
    removeFromCart,
  };

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  );
};
