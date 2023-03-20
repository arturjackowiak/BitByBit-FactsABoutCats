import { FormProvider } from "react-hook-form";
import { Button } from "rsuite";

import { FactType } from "../../../types/FactType";
import InputController from "../../Utils/Input/InputController/InputController";
import Modal from "../../Utils/Modal/Modal";
import { ButtonsWrapper, Form } from "./FactFormModal.style";
import { useFactFormModal } from "./hooks/useFactFormModal";

interface IAddTrackModalProps {
  closeHandler: () => void;
  fact?: FactType;
}

const FactFormModal = ({ closeHandler, fact }: IAddTrackModalProps) => {
  const { methods, handleFormSubmit } = useFactFormModal({
    defaultFact: fact,
    closeHandler,
  });

  return (
    <Modal closeHandler={closeHandler}>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputController label="Fact" name="fact" />
          <ButtonsWrapper>
            <Button type="submit">{fact ? "Edit" : "Add"}</Button>
            <Button type="button" onClick={closeHandler}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default FactFormModal;
