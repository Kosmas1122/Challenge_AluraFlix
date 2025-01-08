import styled from "styled-components";

const CategoriaStyled = styled.div`
  height: 430px;
  margin: 90px 45px;
  border: 1px solid red;
  background: #262626;
  background-blend-mode: normal;
  /* color: #d1ea91; */ // Provisional.

  h1 {
    box-sizing: border-box;
    height: 70px;
    width: max-content;
    padding: 0px 10px;
    margin: 0;
    border-radius: 15px;
    background: ${(props) => props.fondo};
    background-blend-mode: normal;
    color: #f5f5f5;
    line-height: 70px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }
`;

function Categoria(props) {
    return <CategoriaStyled fondo={props.fondo}>
        <h1> {props.nombre} </h1>
    </CategoriaStyled>;
}

export default Categoria;
