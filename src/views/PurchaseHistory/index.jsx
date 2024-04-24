import { useContext, useEffect, useState } from "react";
import ContainerComponent from "../../components/Container";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function PurchaseHistoryView() {
  const { getSession } = useContext(UserContext);
  const userData = getSession();
  const navigate = useNavigate();
  const [purchaseHistory, setPurchaseHistory] = useState();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }

    const getPaymentHistory = async () => {
      const db = getFirestore();
      const findUser = query(
        collection(db, "paymentHistory"),
        where("idUser", "==", userData.id)
      );

      const docs = await getDocs(findUser);
      docs.forEach((doc) => {
        console.log(doc);
        if (doc.exists()) {
          setPurchaseHistory(doc.data);
        }
      });
    };

    getPaymentHistory();
  }, []);

  return (
    <ContainerComponent title={"Histórico de compras"}>
      {purchaseHistory}
    </ContainerComponent>
  );
}
