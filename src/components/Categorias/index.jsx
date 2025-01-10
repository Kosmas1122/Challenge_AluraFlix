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

// Función para filtrar lista de videos:
function filtrarLista(lista, categoriaBuscada) {
  return lista.filter((elemento) => elemento.categoria === categoriaBuscada);
}


function Categorias() {
  const { videos, setVideos } = useContext(HomeContext);
  let videosFrontend = []; // Guarda la lista categoría Frontend.
  let videosBackend = []; // Guarda la lista categoría Backend.
  let videosInnGest = []; // Guarda la lista categoría Innovación y Gestión.

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

  
  videosFrontend = filtrarLista(videos, "Frontend");
  videosBackend = filtrarLista(videos, "Backend");
  videosInnGest = filtrarLista(videos, "Innovación y Gestión");
  
  /* console.log(videos); */
  /* console.log(videosInnGest); */

  return (
    <CategoriasStyled>
      <Categoria nombre="frontend" fondo="#6bd1ff" />
      <Categoria nombre="backend" fondo="#00c86f" />
      <Categoria nombre="innovación y gestión" fondo="#ffba05" />
    </CategoriasStyled>
  );
}

export default Categorias;