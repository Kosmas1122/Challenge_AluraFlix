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
  const [cardSelected, setCardSelected] = useState(null);

  let videosFrontend = []; // Guarda la lista categoría Frontend.
  let videosBackend = []; // Guarda la lista categoría Backend.
  let videosInnGest = []; // Guarda la lista categoría Innovación y Gestión.

  videosFrontend = filtrarLista(videos, "Frontend");
  videosBackend = filtrarLista(videos, "Backend");
  videosInnGest = filtrarLista(videos, "Innovación y Gestión");

  const openModal = (id) => {
    setIsModalOpen(true);
    //let cardSelected = videos.find((video) => video.id === id);
    setCardSelected(videos.find((video) => video.id === id));
  };









  async function eliminarVideo(id) {
    try {
      const url = `http://localhost:3001/videos/${id}`; // Usar el ID de la tarjeta seleccionada.
      // Llamada a la API para eliminar el producto del db.json:
      const conexion = await fetch(url, {
        method: "DELETE",
      });

      if (conexion.ok) {
        // Si la eliminación es exitosa, elimina el elemento del HTML:
        const video = document.getElementById(id);
        if (video) {
          video.remove();
          console.log(`Video con ID ${id} eliminado exitosamente.`);
        }
      } else {
        console.error("Error al eliminar el video:", conexion.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } 

  }








  
  //console.log("Card seleccionado: ", cardSelected);

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
        videosInnGest,
        cardSelected, 
        setCardSelected,
        eliminarVideo
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};