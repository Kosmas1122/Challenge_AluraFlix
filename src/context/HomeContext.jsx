import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

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

export const useHomeContext = () => useContext(HomeContext);