import { Table, Button } from 'rsuite';

import { useFactsContext } from 'Context/Facts/FactsContext';
import { FactType } from 'Types/FactType';

const { Column, HeaderCell, Cell } = Table;

interface IFactsTableProps {
  handleEdit: (fact: FactType) => void;
}

const FactsTable = ({ handleEdit }: IFactsTableProps) => {
  const { facts, deleteFact, isFetching } = useFactsContext();

  return (
    <Table data={facts} height={400} loading={isFetching} width={800} wordWrap={'break-word'}>
      <Column align="center" fixed flexGrow={1}>
        <HeaderCell>Fact</HeaderCell>
        <Cell dataKey="fact" />
      </Column>
      <Column fixed width={60}>
        <HeaderCell>{null}</HeaderCell>
        <Cell>
          {(rowData) => (
            <Button appearance="link" onClick={() => handleEdit(rowData as FactType)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
      <Column fixed width={100}>
        <HeaderCell>{null}</HeaderCell>
        <Cell>
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
