import { createContext, useState } from "react";

export const UserCon = createContext();
export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserCon.Provider value={{ isAuth, setIsAuth }}>
      {{ ...children }}
    </UserCon.Provider>
  );
};
