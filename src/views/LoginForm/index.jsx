import { useContext, useState } from "react";
import "./style.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

function LoginForm() {
  const { getSession, setSession } = useContext(UserContext);
  const userData = getSession();
  const navigate = useNavigate();
  const { search } = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (userData) {
    navigate("/");
    return;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const db = getFirestore();
      const findUser = query(
        collection(db, "users"),
        where("email", "==", email),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(findUser);
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          const userData = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
          };
          setSession(userData);
          if (search) {
            const return_to = search.split("=")[1];
            navigate(return_to);
          } else {
            navigate("/");
          }
          setEmail("");
          setPassword("");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        {/* Adicionando a classe form-wrapper */}
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input-field"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="input-field"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
