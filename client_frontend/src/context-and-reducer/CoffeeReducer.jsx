export const initialState = {
  total: 0,
  coffee: [],
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
