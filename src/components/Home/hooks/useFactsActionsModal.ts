import { useCallback, useState } from 'react';

import { useModal } from 'Hooks/useModal';
import { FactType } from 'Types/FactType';

export const useFactsActionsModal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [edited, setEdited] = useState<FactType>();

  const handleCloseModal = useCallback(() => {
    setEdited(undefined);
    closeModal();
  }, [setEdited, closeModal]);

  const handleEdit = useCallback(
    (fact: FactType) => {
      openModal();
      setEdited(fact);
    },
    [openModal, setEdited]
  );

  return { isModalOpen, handleCloseModal, openModal, handleEdit, edited };
};
