import styled from "styled-components";
import { useHomeContext } from "../../context/HomeContext";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalStyled = styled.div`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  height: 1140px;
  width: 974px;

  border: 5px solid #6bd1ff;
  border-radius: 10px;
  background: #03122f;
  background-blend-mode: normal;

  /* background-color: #7fc6e9; */
`;

export default function Modal() {
  const { isModalOpen, closeModal } = useHomeContext();

  /* Sube la ventana al inicio: */
  {window.scrollTo({ top: 0, behavior: "smooth" });}

  if (!isModalOpen) return null;

  return (
    <>
      <Overlay />
      <ModalStyled>
        <button onClick={closeModal}> Close </button>
      </ModalStyled>
      ;
    </>
  );
}
