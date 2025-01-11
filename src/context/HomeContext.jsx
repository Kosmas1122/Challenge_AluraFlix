import { createContext, useState } from "react";

// Crea el contexto:
export const HomeContext = createContext(false);


// Función para filtrar lista de videos:
function filtrarLista(lista, categoriaBuscada) {
  return lista.filter((elemento) => elemento.categoria === categoriaBuscada);
}



// Crea el proveedor:
export const HomeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  let videosFrontend = []; // Guarda la lista categoría Frontend.
  let videosBackend = []; // Guarda la lista categoría Backend.
  let videosInnGest = []; // Guarda la lista categoría Innovación y Gestión.

  videosFrontend = filtrarLista(videos, "Frontend");
  videosBackend = filtrarLista(videos, "Backend");
  videosInnGest = filtrarLista(videos, "Innovación y Gestión");

  const openModal = (id) => {
    setIsModalOpen(true);
    console.log("Video ID: ", id);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <HomeContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        videos,
        setVideos,
        videosFrontend,
        videosBackend,
        videosInnGest
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};