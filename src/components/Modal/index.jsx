import styled from "styled-components";
import { useHomeContext } from "../../context/HomeContext";

const ModalStyled = styled.div`
  height: 400px;
  width: 600px;
  background-color: #7fc6e9;
  border: 1px solid white;
`;

export default function Modal() {
  const { isModalOpen, closeModal } = useHomeContext();

  if (!isModalOpen) return null;

	return <ModalStyled>
		<button onClick={closeModal}> Close </button>
	</ModalStyled>;
}
