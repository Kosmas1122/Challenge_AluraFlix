import styled from "styled-components";


const MsgStyled = styled.p`
  box-sizing: border-box;
  width: 400px;
  height: 200px;
  background-color: #ffe4154b;
  border: 1px solid black;
  color: black;
  font-size: 60px;
  font-weight: bold;
`;


// Componente hijo que usa el contexto:
const MensajeProp = (props) => {
  return <MsgStyled>{props.msg}</MsgStyled>;
};

export default MensajeProp;
