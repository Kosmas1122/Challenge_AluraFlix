import styled from "styled-components";
import CardVideo from "../CardVideo";

const CategoriaStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* height: 430px; */
  margin: 90px 45px;
  border: 1px solid red; // Provisional.
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

  div.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
`;

function Categoria(props) {
    return <CategoriaStyled fondo={props.fondo}>
      <h1> {props.nombre} </h1>
      <div className="cards">
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </div>
    </CategoriaStyled>;
}

export default Categoria;
