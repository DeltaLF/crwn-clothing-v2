import { createSelector } from "reselect";
import {UserState} from "./user.reduer"

const selectUserReducer = (state:any):UserState => state.user


export const selectCurrentUser = createSelector(
selectUserReducer,
  (user) => user.currentUser
)

// (state:any) => {
//   console.log("userSelector is triggered");
//   return state.user.currentUser;
// };




