import { useController, useFormContext } from 'react-hook-form';

import Input, { EInputType } from '../Input';

interface IInputControllerProps {
  name: string;
  type?: EInputType;
  label: string;
}

const InputController = ({ name, type, label }: IInputControllerProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return <Input {...field} type={type} error={error?.message} ref={field.ref} value={field.value} label={label} />;
};

export default InputController;
