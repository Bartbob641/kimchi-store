const reducer = (state, action) => {
  switch (action.type) {
    case "newtext":
      return { ...state, amount: action.payload };
    case "addcount":
      return { ...state, amount: state.amount + 1 };
    case "reducecount":
      return { ...state, amount: state.amount - 1 };
    case "addproduct":
      return {
        ...state,
        products: [...state.products, state.newProduct],
        newProduct: "",
      };
    default:
      throw new Error();
  }
};

export default reducer;
