import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { USER_ACTION_TYPES } from "./user.types";
import {User} from "firebase/auth"
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpstart,
  SignUpSuccess

} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithgooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInfromation,UserData
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth:User, addidionalDetails?:AdditionalInfromation) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      addidionalDetails
    );
    if(userSnapshot){
         yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
 
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailPasswordSignInStart),
    call(onSignUpstart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}

/// sign in with google

export function* googleSignInSaga() {
  try {
    const { user } = yield* call(signInWithgooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

// sign in with email and password

export function* emailPasswordSignInSaga(emailSignInAction:EmailSignInStart) {
  const { email, password } = emailSignInAction.payload;
  try {
    const userCredential = yield* call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    if(userCredential){
      const {user} = userCredential
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onEmailPasswordSignInStart() {
  yield* takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    emailPasswordSignInSaga
  );
}

///  sign up with email


export function* signUp({ payload: { email, password, displayName } }:SignUpstart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if(userCredential){
      const user  = userCredential.user
      yield* put(signUpSuccess(user, { displayName }));
    }
   
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* onSignUpstart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

// signup success

export function* signInAfterSignUp({ payload: { user, additionalDetails } }:SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// sign out

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
