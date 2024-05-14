import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userSession, setUserSession] = useState();

  const db = getFirestore();
  const purchaseHistoryCollection = collection(db, "purchaseHistory");

  const loadLocalSession = () => {
    const getLocalSession = JSON.parse(localStorage.getItem("localSession"));
    if (getLocalSession) {
      setUserSession(getLocalSession);
    }
  };

  useEffect(() => {
    const getLocalSession = loadLocalSession();
    getLocalSession;
  }, []);

  const setSession = (data) => {
    localStorage.setItem("localSession", JSON.stringify(data));
    setUserSession(data);
  };

  const removeSession = () => {
    localStorage.removeItem("localSession");
    setUserSession();
  };

  const getUserPurchaseHistory = async () => {
    let purchaseHistory = [];
    const q = query(
      purchaseHistoryCollection,
      where("idUser", "==", userSession.id)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() };
      purchaseHistory.push({ ...purchaseHistory, ...data });
    });

    return purchaseHistory;
  };

  return (
    <UserContext.Provider
      value={{
        setSession,
        removeSession,
        userSession,
        getUserPurchaseHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
