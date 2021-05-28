import constant from "../constant";

const initState = {
  user: {},
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case constant.type.user.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default userReducer;
