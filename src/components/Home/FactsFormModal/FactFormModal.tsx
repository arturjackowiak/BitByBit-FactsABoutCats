import { FormProvider } from 'react-hook-form';
import { Button } from 'rsuite';

import { FactType } from 'Types/FactType';
import InputController from 'Components/Utils/Input/InputController/InputController';
import Modal from 'Components/Utils/Modal/Modal';
import { ButtonsWrapper, Form } from './FactFormModal.style';
import { useFactFormModal } from './hooks/useFactFormModal';

interface IAddTrackModalProps {
  closeHandler: () => void;
  fact?: FactType;
}

const FactFormModal = ({ closeHandler, fact }: IAddTrackModalProps) => {
  const { methods, handleFormSubmit } = useFactFormModal({
    defaultFact: fact,
    closeHandler
  });

  return (
    <Modal closeHandler={closeHandler}>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <InputController label="Fact" maxLength={75} name="fact" />
          <ButtonsWrapper>
            <Button type="submit">{fact ? 'Edit' : 'Add'}</Button>
            <Button onClick={closeHandler} type="button">
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default FactFormModal;
