import { Navbar, Nav } from 'rsuite';

import { EViewType } from '../../enums/EViewType';
import { useNavigation } from './hooks/useNavigation';

const Navigation = () => {
  const { activeRoute, handleSelect } = useNavigation();

  return (
    <Navbar>
      <Nav activeKey={activeRoute} onSelect={handleSelect}>
        <Nav.Item eventKey={EViewType.HOME}>Home</Nav.Item>
        <Nav.Item eventKey={EViewType.RANDOM_FACT}>Random fact</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
