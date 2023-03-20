import { Button } from "rsuite";

import { Wrapper } from "./Home.style";
import FactsTable from "./FactsTable/FactsTable";

const Home = () => {
  return (
    <Wrapper>
      <Button>Add new fact</Button>
      <FactsTable />
    </Wrapper>
  );
};

export default Home;
