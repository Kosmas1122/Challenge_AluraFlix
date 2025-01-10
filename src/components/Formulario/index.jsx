import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import styled from "styled-components";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Formulario() {
  // Estados:
  const [datos, setDatos] = useState({
    id: uuidv4(),
    titulo: "",
    categoria: "",
    imgURL: "",
    videoURL: "",
    descripcion: "",
  });

  const [selectedValue, setSelectedValue] = useState("");


  // Función asíncrona (POST) para enviar Video:
  async function enviarVideo() {
    try {
      const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (conexion.ok) {
        alert("¡Video guardado exitosamente!");
        setDatos({
          titulo: "",
          categoria: "",
          imgURL: "",
          videoURL: "",
          descripcion: "",
        }); // Resetear el formulario.
      } else {
        alert("Error al guardar el video.");
      }
    } catch (error) {
      console.error("Error en el POST:", error);
    }
  }

  /* Maneja el valor del campo Select: */
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Actualiza el estado con el valor seleccionado en Select.

    const { name, value } = event.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <>
      <TextField
        id="titulo"
        label="Título"
        name="titulo"
        value={datos.titulo}
        onChange={handleChange}
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
          name="categoria"
          value={selectedValue}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="Innovación y Gestión">Innovación y Gestión</MenuItem>
          <MenuItem value="" disabled>Categoría</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="imagen"
        label="Imagen"
        name="imgURL"
        value={datos.imgURL}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese la URL de la imagen ..."
        fullWidth
      />

      <TextField
        id="video"
        label="Vídeo"
        name="videoURL"
        value={datos.videoURL}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese la URL del video ..."
        fullWidth
      />

      <TextField
        id="descripcion"
        label="Descripcion"
        name="descripcion"
        value={datos.descripcion}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        size="medium"
        placeholder="Ingrese una descripción para el video ..."
        fullWidth
        multiline
        minRows={3}
        maxRows={3}
      />

      <Div>
        <Button variant="contained" size="large" onClick={enviarVideo}>
          Guardar
        </Button>
        <Button variant="contained" size="large">
          Limpiar
        </Button>
      </Div>
    </>
  );
}

export default Formulario;
