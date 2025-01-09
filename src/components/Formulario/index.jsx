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

function Formulario() {
  return (
    <>
      <form>
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

        <div className="botones">
          <Button variant="contained" size="large">
            {" "}
            Guardar{" "}
          </Button>
          <Button variant="contained" size="large">
            {" "}
            Limpiar{" "}
          </Button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
