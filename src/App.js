import React, { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:3333/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, senha }),
    })
    .then(response => response.json())
    .then(data => {
      alert("Dados enviados com sucesso");
      console.log(data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function handleInfo() {
    fetch('http://localhost:3333/api')
      .then(response => response.json())
      .then(data => {
        alert(`Usuário: ${data.usuario}\nSenha: ${data.senha}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <h1>Imperio Lanches</h1>
      <div id="login-form">
        <h2>Login</h2>
        <label htmlFor="usuario">Usuário:</label>
        <br />
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <br />
        <label htmlFor="senha">Senha:</label>
        <br />
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleInfo}>Informações</button>
      </div>
    </>
  );
}

export default App;
