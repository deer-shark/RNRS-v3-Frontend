import constant from "./constant";

const initState = {
  backgroundName: "general.jpg",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case constant.type.SET_BACKGROUND: {
      return {
        ...state,
        backgroundName: action.name,
      };
    }
    default:
      return state;
  }
}

export default reducer;
