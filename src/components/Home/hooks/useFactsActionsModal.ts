import { useCallback, useState } from "react";

import { useModal } from "../../../hooks/useModal";
import { FactType } from "../../../types/FactType";

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
