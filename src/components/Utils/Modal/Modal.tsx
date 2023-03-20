import { MouseEvent, useRef } from "react";
import ReactDOM from "react-dom";

import { ModalBackground, ModalContainer } from "./Modal.style";

interface IModalProps {
  children: (string | JSX.Element) | JSX.Element[];
  closeHandler: () => void;
}

const Modal = ({ children, closeHandler }: IModalProps) => {
  const backgroundRef = useRef<HTMLDivElement>();

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      closeHandler();
    }
  };

  return ReactDOM.createPortal(
    <ModalBackground ref={backgroundRef} onClick={closeModal}>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackground>,
    document.getElementById("modal")
  );
};

export default Modal;
