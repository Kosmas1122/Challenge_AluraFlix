import { createContext } from "react";

// Crear el contexto "MensajeContexto":
export const MensajeContexto = createContext();

// Crear el proveedor "MensajeProvider":
export const MensajeProvider = ({ children }) => {
    const msg1 = "¡Hola desde el contexto!";
    const msg2 = "Adiós mundo.";

  return (
    <MensajeContexto.Provider value={{msg1, msg2}}>
      {children}
    </MensajeContexto.Provider>
  );
};