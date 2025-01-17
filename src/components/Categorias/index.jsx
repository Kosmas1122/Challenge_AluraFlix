import styled from "styled-components";
import Categoria from "../Categoria";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";


const CategoriasStyled = styled.div`
  background: #262626;
  background-blend-mode: normal;
`;

/* // Función para filtrar lista de videos
function filtrarLista(lista, categoriaBuscada) {
  return lista.filter((elemento) => elemento.categoria === categoriaBuscada);
} */


function Categorias() {
  
  const { videos, setVideos } = useContext(HomeContext);

  // Estados adicionales para las listas filtradas
  //const [videosFrontend, setVideosFrontend] = useState([]);
  //const [videosBackend, setVideosBackend] = useState([]);
  //const [videosInnGest, setVideosInnGest] = useState([]);


  // Efecto para cargar la lista completa de videos desde json-server
  useEffect(() => {
    async function listarVideos() {
      try {
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionJSON = await conexion.json();
        setVideos(conexionJSON);
      } catch (error) {
        console.error("Error al obtener los videos: ", error);
      }
    }

    listarVideos();
    console.log("videos: ", videos);
    
  }, [setVideos]); // [setVideos].

  // Efecto para actualizar las listas derivadas cuando cambia `videos`
  /* useEffect(() => {
    //setVideosFrontend(filtrarLista(videos, "Frontend"));
    //setVideosBackend(filtrarLista(videos, "Backend"));
    //setVideosInnGest(filtrarLista(videos, "Innovación y Gestión"));
  }, [videos]);  // [videos]     // Este efecto se ejecutará cada vez que cambie `videos`
 */

  return (
    <CategoriasStyled>
      <Categoria nombre="Frontend" fondo="#6bd1ff" videos={videos} />
      <Categoria nombre="Backend" fondo="#00c86f" videos={videos} />
      <Categoria nombre="Innovación y Gestión" fondo="#ffba05" videos={videos} />
    </CategoriasStyled>
  );
}

export default Categorias;