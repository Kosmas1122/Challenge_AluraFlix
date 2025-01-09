import { createContext, useState } from "react";

// Crea el contexto:
export const HomeContext = createContext();

// Crea el proveedor:
export const HomeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HomeContext.Provider value={{ isModalOpen, openModal, closeModal, videos, setVideos }}>
      {children}
    </HomeContext.Provider>
  );
};