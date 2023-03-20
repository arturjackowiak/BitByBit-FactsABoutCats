import { forwardRef, Ref, InputHTMLAttributes } from 'react';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage.style';
import { Wrapper, StyledInput, StyledLabel } from './Input.style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: EInputType;
  placeholder?: string;
  error?: string;
  label?: string;
  name: string;
  value: string;
}

export enum EInputType {
  NUMBER = 'number',
  TEXT = 'text'
}

const Input = forwardRef(
  (
    { type = EInputType.TEXT, placeholder, error, name, label, value, ...rest }: IInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Wrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        ref={ref}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        {...rest}
      />
      <ErrorMessage>{error || ''}</ErrorMessage>
    </Wrapper>
  )
);
export default Input;
