import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithgooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form-component";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithgooglePopup();
    console.log(response);
    try {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    } catch (erorr) {
      console.log("fail to sign up", erorr.message);
    }
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in wiht Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in wiht Google Redirect
      </button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
