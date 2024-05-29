import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const CoffeeContext = createContext();

// eslint-disable-next-line react/prop-types
export const CoffeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavorite = (coffee) => {
    const updatedFavorites = [...state.coffees, coffee];
    dispatch({
      type: "add",
      payload: updatedFavorites,
    });
  };

  const removeFromFavorite = (coffee) => {
    const updatedFavorites = state.coffees.filter(
      (currentCoffee) => currentCoffee.name !== coffee.name
    );

    dispatch({
      type: "remove",
      payload: updatedFavorites,
    });
  };

  const value = {
    coffees: state.coffees,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  );
};
