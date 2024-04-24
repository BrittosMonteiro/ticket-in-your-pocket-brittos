import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    const localSession =
      JSON.parse(localStorage.getItem("localSession")) || null;
    if (localSession) {
      setSession(localSession);
    }
  }, []);

  const setSession = (data) => {
    localStorage.setItem("localSession", JSON.stringify(data));
    setUserSession(data);
  };

  const getSession = () => {
    return userSession;
  };

  const removeSession = () => {
    localStorage.removeItem("localSession");
    setUserSession();
  };

  return (
    <UserContext.Provider value={{ setSession, getSession, removeSession }}>
      {children}
    </UserContext.Provider>
  );
};
