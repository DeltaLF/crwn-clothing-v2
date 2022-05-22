import { createSelector } from "reselect";
import {UserState} from "./user.reduer"
import { RootState } from "../store";

const selectUserReducer = (state:RootState):UserState => state.user


export const selectCurrentUser = createSelector(
selectUserReducer,
  (user) => user.currentUser
)

// (state:any) => {
//   console.log("userSelector is triggered");
//   return state.user.currentUser;
// };




