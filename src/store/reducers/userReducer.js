const initState = {
  user: {},
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
