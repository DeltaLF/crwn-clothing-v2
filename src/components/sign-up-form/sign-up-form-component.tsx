import { ChangeEvent, FormEvent, useState } from "react";
import {AuthError, AuthErrorCodes} from 'firebase/auth'
import FormInput from "../form-input/form-input.component";
// import "./sign-up-form.styles.scss";
import { SignContainer } from "../sign-in-form/sign-in-form.styles";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "./../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password is inconsistent with confirm password");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("email already in use");
      } else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD)
        console.log("Password should be at least 6 characters");
    }
  };

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignContainer>
  );
};

export default SignUpForm;
