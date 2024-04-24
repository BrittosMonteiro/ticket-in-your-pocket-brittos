import { useState } from "react";
import "./style.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function SignupForm() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const db = getFirestore();
      const usersCollection = collection(db, "users");
      const userData = {
        name,
        lastname,
        email,
        password,
      };

      addDoc(usersCollection, userData)
        .then((doc) => {
          console.log(doc.id);
          setName("");
          setLastName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        {" "}
        {/* Adicionando a classe form-wrapper */}
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              className="input-field"
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Lastname">Sobrenome:</label>
            <input
              className="input-field"
              type="Lastname"
              id="LastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
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

export default SignupForm;
