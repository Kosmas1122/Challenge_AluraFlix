import Formulario from "../components/Formulario";

// styled-component y Material UI:
import styled from "styled-components";
import Typography from "@mui/material/Typography";

// Fuentes:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";



const FormStyled = styled.form`
  background-color: #dcf3ff;
  padding: 0px 400px 40px 400px;

  h1 {
    padding: 35px 0px;
    text-transform: uppercase;
    font-weight: 700;
    color: #2271d1;
  }
`;

export default function NuevoVideo() {
  return (
    <FormStyled>
      <Typography variant="h3" align="center" component="h1">
        nuevo video
      </Typography>
      <Formulario />
    </FormStyled>
  );
}
