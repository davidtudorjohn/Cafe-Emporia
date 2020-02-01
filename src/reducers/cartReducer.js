const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      return [...state.filter(item => item !== action.payload)];
    default:
      return state;
  }
};
export default cartReducer;
