import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { SignContainer, ButtonsContainer } from "./sign-in-form.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  //const { setCurrentUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
    //const response = await signInWithgooglePopup();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      //const response = await signInAuthWithEmailAndPassword(email, password);
      dispatch(emailSignInStart(email, password));
      // setCurrentUser(response.user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("incorrect passwrod or email");
          break;
        case "auth/wrong-password":
          alert("incorrect passwrod or email");
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Eamil"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignContainer>
  );
};

export default SignInForm;
