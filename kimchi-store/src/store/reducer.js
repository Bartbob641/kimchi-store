const reducer = (state, action) => {
  switch (action.type) {
    case "newtext":
      return { ...state, amount: action.payload };
    case "addcount":
      return { ...state, amount: state.amount + 1 };
    case "reducecount":
      return { ...state, amount: state.amount - 1 };
    case "drawer":
      return { ...state, drawer: !state.drawer };
    case "addtocart":
      let temp = state.shoppingCart;
      const elementIndex = temp.findIndex(
        (element) => element.name === action.payload.name
      );
      if (elementIndex === -1) {
        temp = [
          ...state.shoppingCart,
          { name: action.payload.name, amount: action.payload.amount },
        ];
        const sum = temp.reduce(
          (a, { amount }) => parseInt(a) + parseInt(amount),
          0
        );
        return {
          ...state,
          shoppingCart: temp,
          amount: sum,
        };
      } else {
        temp[elementIndex] = {
          ...temp[elementIndex],
          amount: action.payload.amount,
        };
        const sum = temp.reduce(
          (a, { amount }) => parseInt(a) + parseInt(amount),
          0
        );
        return {
          ...state,
          shoppingCart: temp,
          amount: sum,
        };
      }
    default:
      throw new Error();
  }
};

export default reducer;
