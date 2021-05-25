import userReducer from "./userReducer";
import appReducer from "./appReducer";

const combineReducer = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  const objInitState = {};
  reducerKeys.forEach((key) => {
    const initState = reducers[key](undefined, { type: "" });
    if (initState === "undefined") {
      throw new Error(`${key} does not return state.`);
    }
    objInitState[key] = initState;
  });
  return (state, action) => {
    if (action) {
      reducerKeys.forEach((key) => {
        const previousState = objInitState[key];
        objInitState[key] = reducers[key](previousState, action);
      });
    }
    return { ...objInitState };
  };
};

const reducers = combineReducer({
  ussr: userReducer,
  app: appReducer,
});

export default reducers;
