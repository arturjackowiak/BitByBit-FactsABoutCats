import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useFactsContext } from '../../../../context/Facts/FactsContext';
import { FactType } from '../../../../types/FactType';
import { factSchema } from '../../../../schemas/factSchema';

interface IFactFormModalProps {
  defaultFact?: FactType;
  closeHandler: () => void;
}

export const useFactFormModal = ({ defaultFact, closeHandler }: IFactFormModalProps) => {
  const defaultValues = {
    id: nanoid()
  };
  const factFormModalDefaultValues = defaultFact || defaultValues;
  const { editFact, addFact } = useFactsContext();
  const methods = useForm<FactType>({
    defaultValues: factFormModalDefaultValues,
    resolver: yupResolver(factSchema),
    mode: 'onSubmit'
  });

  const handleFormSubmit = useCallback(
    ({ fact, length, id }: FactType) => {
      if (defaultFact) editFact(id, { fact, length, id });
      else addFact({ fact, length: fact.length, id });
      closeHandler();
    },
    [addFact, editFact, closeHandler, defaultFact]
  );

  return {
    handleFormSubmit,
    methods
  };
};
