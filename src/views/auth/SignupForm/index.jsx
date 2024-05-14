import { useContext, useState } from "react";
import "./style.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { userSession, setSession } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (userSession) {
    navigate("/");
    return;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const db = getFirestore();
      const usersCollection = collection(db, "users");
      const userSession = {
        name,
        lastname,
        email,
        password,
      };

      addDoc(usersCollection, userSession)
        .then((doc) => {
          setSession({ id: doc.id, name, email });
          setName("");
          setLastName("");
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

 return (
    <div className="form-container">
      <div className="signup-wrapper">
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold mb-4">Cadastre-se</h2>
            <div className="signup-form-group w-full">
              <label htmlFor="nome">Nome:</label>
              <input
                className="input input-bordered w-full"
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="signup-form-group w-full">
              <label htmlFor="lastname">Sobrenome:</label>
              <input
                className="input input-bordered w-full"
                type="text" 
                id="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          <div className="signup-form-group w-full">
            <label htmlFor="email">Email:</label>
            <input
              className="input input-bordered w-full"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group w-full">
            <label htmlFor="password">Password:</label>
            <input
              className="input input-bordered w-full"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary btn-signup w-full" type="submit">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
