import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalExclude, setModalExclude] = useState(false);
  return (
    <AuthContext.Provider
      value={{ modal, setModal, modalExclude, setModalExclude }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
