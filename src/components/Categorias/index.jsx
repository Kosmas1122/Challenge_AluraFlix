import styled from "styled-components";
import Categoria from "../Categoria";

const CategoriasStyled = styled.div`
  background: #262626;
  background-blend-mode: normal;
  /* height: 200px; */ // Provisional.
  /* color: white; */ // Provisional.
`;

function Categorias() {
  return (
    <CategoriasStyled>
      <Categoria nombre="frontend" fondo="#6bd1ff" />
      <Categoria nombre="backend" fondo="#00c86f" />
      <Categoria nombre="innovación y gestión" fondo="#ffba05" />
    </CategoriasStyled>
  );
}

export default Categorias;