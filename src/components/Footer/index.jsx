import styled from "styled-components";

const FooterStyled = styled.footer`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  /* position: absolute;
  bottom: 0px; */
  width: 100%;
  height: 125px;
  border: 1px solid #2271d1;
  background: rgba(0, 0, 0, 0.9);
  background-blend-mode: normal;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
`;

const LogoStyled = styled.img`
  width: 168.45px;
  height: 40px;
  align-content: center;

  @media (max-width: 430px) {
    display: none;
  }

  @media (min-width: 1024px){
    display: block;
  }
`;

export default function Footer() {
    return (
      <FooterStyled>
        <LogoStyled src="images/Logo_AluraFlix.png" alt="Logo Alura" />
      </FooterStyled>
    );
}
