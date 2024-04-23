import React, { useState } from 'react';
import './style.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // fazer a configuração de envio ao firebase
    console.log('Email:', email);
    console.log('Password:', password);
    // Limpar os campos após o envio
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <div className="form-wrapper"> {/* Adicionando a classe form-wrapper */}
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className='input-field'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className='input-field'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
