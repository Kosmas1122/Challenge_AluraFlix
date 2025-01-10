import styled from "styled-components";
import Categoria from "../Categoria";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";


const CategoriasStyled = styled.div`
  background: #262626;
  background-blend-mode: normal;
`;

// Se hace una petición o requisición de tipo GET:
async function listarVideos() {
  try {
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionJSON = await conexion.json();

    return conexionJSON;
  }
  catch (error) {
    console.error("Error al obtener los videos: ", error);
  }
}


function Categorias() {
  const { setVideos, videosFrontend, videosBackend, videosInnGest } = useContext(HomeContext);
  
  // Lee la lista de videos desde json-server:
  useEffect(() => {
    listarVideos()
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error("Error al listar los videos:", error);
      });
  }, []);

  return (
    <CategoriasStyled>
      <Categoria nombre="frontend" fondo="#6bd1ff" videos={videosFrontend} />
      <Categoria nombre="backend" fondo="#00c86f" videos={videosBackend} />
      <Categoria nombre="innovación y gestión" fondo="#ffba05" videos={videosInnGest} />
    </CategoriasStyled>
  );
}

export default Categorias;