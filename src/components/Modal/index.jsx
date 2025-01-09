// Estados y Contexto:
import { useHomeContext } from "../../context/HomeContext";
import { useState } from "react";

// styled-component y Material UI:
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";

// Fuentes:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Componentes:
import Formulario from "../Formulario";


const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  height: 720px;
  width: 774px;
  padding: 0px 100px;
  border: 5px solid #6bd1ff;
  border-radius: 10px;
  background: #dcf3ff;
  background-blend-mode: normal;
  
  h1 {
    margin: 40px 0px 20px 0px;
    color: #2271d1;
  }

  /* form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  } */

  /* div.botones {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  } */

  .BtnCerrar {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default function Modal() {
  const { isModalOpen, closeModal } = useHomeContext();
  const [selectedValue, setSelectedValue] = useState("");

  /* Maneja el valor del campo Select: */
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Actualiza el estado con el valor seleccionado
  };


  
  /* Sube la ventana al inicio: */
  {window.scrollTo({ top: 0, behavior: "smooth" });}

  if (!isModalOpen) return null;

  return (
    <>
      <Overlay />
      <ModalStyled>
        <Typography variant="h3" align="center" component="h1">
          Editar Card:
        </Typography>

        {/* <form>
          <TextField
            id="titulo"
            label="Título"
            variant="outlined"
            margin="normal"
            size="medium"
            placeholder="Ingrese un título para el video ..."
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel id="cat">Categoria</InputLabel>
            <Select
              labelId="cat"
              label="Categoria"
              value={selectedValue}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Frontend">Frontend</MenuItem>
              <MenuItem value="Backend">Backend</MenuItem>
              <MenuItem value="Innovación y Gestión">
                Innovación y Gestión
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="imagen"
            label="Imagen"
            variant="outlined"
            margin="normal"
            size="medium"
            placeholder="Ingrese la URL de la imagen ..."
            fullWidth
          />

          <TextField
            id="video"
            label="Vídeo"
            variant="outlined"
            margin="normal"
            size="medium"
            placeholder="Ingrese la URL del video ..."
            fullWidth
          />

          <TextField
            id="descripcion"
            label="Descripcion"
            variant="outlined"
            margin="normal"
            size="medium"
            placeholder="Ingrese una descripción para el video ..."
            fullWidth
            multiline
            minRows={3}
            maxRows={3}
          />
        </form> */}

        {/* 
        <div className="botones">
          <Button variant="contained" size="large">
            {" "}
            Guardar{" "}
          </Button>
          <Button variant="contained" size="large">
            {" "}
            Limpiar{" "}
          </Button>
        </div> */}

        <Formulario />
        <Button className="BtnCerrar" variant="contained" size="large" onClick={closeModal}>Cerrar</Button>
      </ModalStyled>
      ;
    </>
  );
}
