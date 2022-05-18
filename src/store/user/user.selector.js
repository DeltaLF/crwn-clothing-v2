export const selectCurrentUser = (state) => {
  console.log("userSelector is triggered");
  return state.user.currentUser;
};
