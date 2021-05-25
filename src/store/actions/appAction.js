import constant from "../constant";

export const setBackground = (name) => ({
  type: constant.type.app.SET_BACKGROUND,
  name,
});

export const empty = () => ({});
