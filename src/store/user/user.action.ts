import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES,User } from "./user.types";
import { withMatcher,ActionWithPayload,Action } from "../../utils/reducer/reducer.utils";
import { AdditionalInfromation } from "../../utils/firebase/firebase.utils";

// export const setCurrentUser = (user:User) => {
//   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
// };
type EmailPassword ={
  email:string,
  password:string
}
type UserSignUp = EmailPassword & {
  displayName:string
}
type UserSignUpSuccess = {
  user:User,
  additionalDetails:AdditionalInfromation

}

export type SignFailed =  ActionWithPayload<USER_ACTION_TYPES.SIGN_FAILED,Error>
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START,EmailPassword>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, User>
export type SignUpstart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START,UserSignUp>
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,UserSignUpSuccess>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutSuccess =Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export const signFailed = withMatcher((error:Error):SignFailed=>createAction(USER_ACTION_TYPES.SIGN_FAILED,error))

export const checkUserSession = withMatcher(():CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignInStart = withMatcher(():GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatcher((email:string, password:string):EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMatcher((user:User):SignInSuccess =>
createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = (error:Error):SignFailed =>signFailed(error)
//  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart =withMatcher( (email:string, password:string, displayName:string):SignUpstart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));

export const signUpSuccess = withMatcher((user:User, additionalDetails:AdditionalInfromation):SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signUpFailed = (error:Error):SignFailed =>signFailed(error)
 // createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = withMatcher(():SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

export const signOutSuccess = withMatcher(():SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

export const signOutFailed = (error:Error):SignFailed => signFailed(error)
// {
//   return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
// };
