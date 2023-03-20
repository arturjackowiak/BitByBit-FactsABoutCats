import { forwardRef, Ref, InputHTMLAttributes } from "react";

import { ErrorMessage } from "../ErrorMessage/ErrorMessage.style";
import { Wrapper, StyledInput, StyledLabel } from "./Input.style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: EInputType;
  placeholder?: string;
  error?: string;
  label?: string;
  name: string;
  value: string;
}

export enum EInputType {
  NUMBER = "number",
  TEXT = "text",
}

const Input = forwardRef(
  (
    {
      type = EInputType.TEXT,
      placeholder,
      error,
      name,
      label,
      value,
      ...rest
    }: IInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Wrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        id={name}
        name={name}
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
);
export default Input;
