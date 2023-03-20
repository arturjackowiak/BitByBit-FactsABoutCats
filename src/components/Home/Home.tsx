import { Button } from 'rsuite';

import FactFormModal from './FactsFormModal/FactFormModal';
import FactsTable from './FactsTable/FactsTable';
import { useFactsActionsModal } from './hooks/useFactsActionsModal';
import { Wrapper } from './Home.style';

const Home = () => {
  const { isModalOpen, handleCloseModal, openModal, handleEdit, edited } = useFactsActionsModal();

  return (
    <Wrapper>
      <Button onClick={openModal}>Add new fact</Button>
      <FactsTable handleEdit={handleEdit} />
      {isModalOpen && <FactFormModal closeHandler={handleCloseModal} fact={edited} />}
    </Wrapper>
  );
};

export default Home;
