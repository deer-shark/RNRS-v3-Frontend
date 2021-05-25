import constant from "../constant";

const initState = {
  backgroundName: "general.jpg",
};

function appReducer(state = initState, action) {
  switch (action.type) {
    case constant.type.app.SET_BACKGROUND:
      return {
        ...state,
        backgroundName: action.name,
      };
    default:
      return state;
  }
}

export default appReducer;
