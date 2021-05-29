export const setUser = (user) => ({
  type: "SETUSER",
  payload: {
    currentUser: user,
  },
});
