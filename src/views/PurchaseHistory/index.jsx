import { useContext, useEffect, useState } from "react";
import ContainerComponent from "../../components/Container";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function PurchaseHistoryView() {
  const { userSession, getUserPurchaseHistory } = useContext(UserContext);
  const navigate = useNavigate();

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const getUserHistory = async () => {
    const request = await getUserPurchaseHistory();
    if (request) {
      setPurchaseHistory(request);
    }
  };

  useEffect(() => {
    getUserHistory();
  }, []);

  if (!userSession) {
    navigate("/");
    return;
  }

  return (
    <ContainerComponent title={"Histórico de compras"}>
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
                <td>{new Date().toLocaleDateString(item.created_at)}</td>
                <th>
                  <button className="btn btn-accent btn-xs">Detalhes</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContainerComponent>
  );
}
