import constant from "../constant";

export const setUser = (user) => ({
  type: constant.type.user.SET_USER,
  user,
});

export const empty = () => ({});
