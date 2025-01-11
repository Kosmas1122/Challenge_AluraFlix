import styled from "styled-components";
import { HomeContext } from "../../context/HomeContext";
import { useContext } from "react";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  height: 320px;
  width: 380px;
  border-radius: 15px;
  border: 5px solid #777777;
  background: rgba(0, 0, 0, 0.9);
  background-blend-mode: normal;
`;

const CardVideoStyled = styled.iframe`
  height: 260px;
  width: 380px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 5px solid #777777;
`;

const BotonesCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  button {
    /* height: 30px;
    width: 40px; */
    background: none;
    border: none;
  }
`;

export default function CardVideo(props) {

  const { openModal } = useContext(HomeContext);  

  return (
    <CardStyled>
      <CardVideoStyled
        src={props.fuente}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <BotonesCardStyled>
        <button>
          <img
            src="/public/iconos/TablerTrashX.svg"
            height="35px"
            alt="Borrar"
          />
        </button>

        <button onClick={() => openModal(props.id)}>
          <img src="/public/iconos/LineMdEdit.svg" height="35px" alt="Editar" />
        </button>
      </BotonesCardStyled>
    </CardStyled>
  );
}
