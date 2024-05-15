import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "../components/ContainerComponent";
import ModalOrderDetailsComponent from "../components/ModalOrderDetails";

export default function OrderHistoryView() {
  const { userSession, getUserPurchaseHistory } = useContext(UserContext);
  const navigate = useNavigate();
  document.title = 'Meus pedidos'

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const getUserHistory = async () => {
      const orders = await getUserPurchaseHistory();
      if (orders) {
        setPurchaseHistory(orders);
        console.log(orders);
      }
    };

    getUserHistory();
  }, [userSession]);

  if (!userSession) {
    navigate("/");
    return;
  }

  return (
    <ContainerComponent title={"Histórico de compras"}>
      {purchaseHistory && purchaseHistory.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Total</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((item) => (
                <tr key={item.id}>
                  <td className="font-bold">{item.id} </td>
                  <td>{item.total}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  <th>
                    <ModalOrderDetailsComponent order={item} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ContainerComponent>
  );
}
