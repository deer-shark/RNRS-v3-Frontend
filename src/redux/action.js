import constant from "./constant";

export const setBackground = (name) => ({
  type: constant.type.SET_BACKGROUND,
  name,
});

export const empty = () => ({});
