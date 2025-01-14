import styled from "styled-components";
import { useContext } from "react";
import { MensajeContexto } from "../../context/MensajeContexto";

const MsgStyled = styled.p`
    box-sizing: border-box;
    width: 400px;
    height: 200px;
    background-color: #ffe4154b;
    border: 1px solid black;
    color: black;
    font-size: 60px;
    font-weight: bold;
`

// Componente hijo que usa el contexto:
const Mensaje = () => {
  const {msg2} = useContext(MensajeContexto);
  return <MsgStyled>{msg2}</MsgStyled>;
};

export default Mensaje;
