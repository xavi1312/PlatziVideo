const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      console.log(action.payload);
      return { ...state, myList: [...state.myList, action.payload] };
    default:
      return state;
  }
};

export default reducer;
