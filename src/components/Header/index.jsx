import styled from "styled-components";
import { Link } from "react-router-dom";
import Boton from "../Boton";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 125px;
  border: 1px solid #2271d1;
  background: #262626;
  background-blend-mode: normal;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
`;

const LogoStyled = styled.img`
  width: 168.45px;
  height: 40px;
  margin-left: 51px;
`;

const BotonesStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-right: 51px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src="images/Logo_AluraFlix.png" alt="Logo Alura" />
      <BotonesStyled>
        <Link to="/">
          <Boton texto="home" estado="selected" />
        </Link>
        <Link to="/NuevoVideo">
          <Boton texto="nuevo video" estado="unSelected" />
        </Link>
      </BotonesStyled>
    </HeaderStyled>
  );
}
