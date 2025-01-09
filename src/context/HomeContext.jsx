import { createContext, useContext, useState } from "react";

// Crea el contexto:
export const HomeContext = createContext();

// Crea el proveedor:
export const HomeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HomeContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </HomeContext.Provider>
  );
};