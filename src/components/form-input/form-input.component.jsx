import { Group, FormInputStyled, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyled {...otherProps} />
      {label && (
        <FormInputLabel
          isShrink={otherProps.value.length}
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
