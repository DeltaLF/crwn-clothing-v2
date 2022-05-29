import { Group, FormInputStyled, FormInputLabel } from "./form-input.styles";
import { InputHTMLAttributes, FC } from "react";

type FormInputProps = {label:string} & InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps>= ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyled {...otherProps} />
      {label && (
        <FormInputLabel
          isShrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}
          // className={`${
          //   otherProps.value.length ? "shrink" : ""
          // } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
