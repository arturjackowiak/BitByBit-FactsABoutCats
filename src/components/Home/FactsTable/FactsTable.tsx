import { Table, Button } from "rsuite";

import { useFactsContext } from "../../../context/FactsContext";

const { Column, HeaderCell, Cell } = Table;

const FactsTable = () => {
  const { facts } = useFactsContext();

  return (
    <Table data={facts} height={400} width={1000} wordWrap={"break-word"}>
      <Column align="center" flexGrow={1} fixed>
        <HeaderCell>Fact</HeaderCell>
        <Cell dataKey="fact" />
      </Column>
      <Column fixed width={60}>
        <HeaderCell>{null}</HeaderCell>
        <Cell style={{ padding: "6px" }}>
          <Button appearance="link">Edit</Button>
        </Cell>
      </Column>
      <Column fixed width={100}>
        <HeaderCell>{null}</HeaderCell>
        <Cell style={{ padding: "6px" }}>
          <Button appearance="link">Delete</Button>
        </Cell>
      </Column>
    </Table>
  );
};

export default FactsTable;
