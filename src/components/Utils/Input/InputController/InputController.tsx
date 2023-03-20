import { useController, useFormContext } from 'react-hook-form';

import Input, { EInputType } from '../Input';

interface IInputControllerProps {
  name: string;
  type?: EInputType;
  label: string;
  maxLength?: number;
}

const InputController = ({ name, type, label, maxLength }: IInputControllerProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ control, name });

  return (
    <Input
      {...field}
      ref={field.ref}
      error={error?.message}
      label={label}
      maxLength={maxLength}
      type={type}
      value={field.value}
    />
  );
};

export default InputController;
