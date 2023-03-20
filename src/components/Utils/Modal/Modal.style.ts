import styled from "styled-components";

export const ModalBackground = styled.div`
  align-items: center;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #181818;
  border-radius: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr min-content;
  max-width: 800px;
  padding: 3rem 4rem;
  width: 100%;
`;
