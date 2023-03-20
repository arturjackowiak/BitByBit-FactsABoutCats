import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  justify-content: center;
  padding: 0 5rem;
  width: 100%;

  .rs-table {
    border-radius: 1rem;
  }

  .rs-table-cell-content:has(button) {
    padding: 6px;
  }
`;
