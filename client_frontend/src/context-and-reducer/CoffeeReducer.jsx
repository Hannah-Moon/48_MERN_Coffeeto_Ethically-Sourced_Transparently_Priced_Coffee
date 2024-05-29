export const initialState = {
  coffees: [],
};

const coffeeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log(
        "State is being updated. Selected coffee is added to favorite.: ",
        state
      );
      return {
        ...state,
        coffees: action.payload,
      };
    case "remove":
      console.log("State is removed from favorite.: ", state);

      return {
        ...state,
        coffees: action.payload,
      };

    default:
      throw Error("Cannot match case with the reducer!");
  }
};

export default coffeeReducer;
