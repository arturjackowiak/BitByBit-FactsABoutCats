import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const StyledLabel = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 0.5rem;
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: normal;
  outline: none;
  padding: 1.5rem;
  width: 100%;

  &:focus {
    backdrop-filter: blur(12rem);
    border-radius: 0.5rem;
    box-shadow: 0 0 0 0.4rem rgba(31, 38, 135, 0.37);
    display: inline-block;
  }

  &::placeholder {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 100;
  }
`;
