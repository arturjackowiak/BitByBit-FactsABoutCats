import { Table, Button } from "rsuite";

import { useFactsContext } from "../../../context/Facts/FactsContext";
import { FactType } from "../../../types/FactType";

const { Column, HeaderCell, Cell } = Table;

interface IFactsTableProps {
  handleEdit: (fact: FactType) => void;
}

const FactsTable = ({ handleEdit }: IFactsTableProps) => {
  const { facts, deleteFact } = useFactsContext();

  return (
    <Table data={facts} height={400} width={1000} wordWrap={"break-word"}>
      <Column align="center" flexGrow={1} fixed>
        <HeaderCell>Fact</HeaderCell>
        <Cell dataKey="fact" />
      </Column>
      <Column fixed width={60}>
        <HeaderCell>{null}</HeaderCell>
        <Cell style={{ padding: "6px" }}>
          {(rowData) => (
            <Button
              appearance="link"
              onClick={() => handleEdit(rowData as FactType)}
            >
              Edit
            </Button>
          )}
        </Cell>
      </Column>
      <Column fixed width={100}>
        <HeaderCell>{null}</HeaderCell>
        <Cell style={{ padding: "6px" }}>
          {({ id }) => (
            <Button appearance="link" onClick={() => deleteFact(id)}>
              Delete
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

export default FactsTable;
