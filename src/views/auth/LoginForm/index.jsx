import { useContext, useState } from "react";
import "./style.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

function LoginForm() {
  document.title = "Login";
  const { userSession, setSession } = useContext(UserContext);
  const navigate = useNavigate();
  const { search } = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (userSession) {
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
          const userSession = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
          };
          setSession(userSession);
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
    <div className="form-container space-y-4">
      <div className="login-wrapper bg-white p-4 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold mb-4">Login</h2>
          <div className="login-form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input input-bordered"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="input input-bordered"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary btn-signin" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
