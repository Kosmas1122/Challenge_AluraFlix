import styled from "styled-components";
import Categoria from "../Categoria";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";


const CategoriasStyled = styled.div`
  background: #262626;
  background-blend-mode: normal;
`;


function Categorias() {
  
  const { videos, setVideos } = useContext(HomeContext);

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
    
  }, [setVideos]);

  return (
    <CategoriasStyled>
      <Categoria nombre="Frontend" fondo="#6bd1ff" videos={videos} />
      <Categoria nombre="Backend" fondo="#00c86f" videos={videos} />
      <Categoria nombre="Innovación y Gestión" fondo="#ffba05" videos={videos} />
    </CategoriasStyled>
  );
}

export default Categorias;