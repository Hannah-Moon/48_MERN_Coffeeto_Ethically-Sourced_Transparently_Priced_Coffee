export const initialState = {
  coffees: [],
};

const coffeeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        coffees: action.payload,
      };
    case "remove":
      return {
        ...state,
        coffees: action.payload,
      };
    default:
      throw Error("Cannot match case in reducer");
  }
};

export default coffeeReducer;
