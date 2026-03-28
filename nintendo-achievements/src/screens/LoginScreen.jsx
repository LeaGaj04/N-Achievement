import React, { useState } from 'react';
import nintendoLogo from '../assets/n-logo.png'; 

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      // ¡Aquí está el cambio! Enviamos el "username" al App.jsx
      onLogin(username); 
    } else {
      setError('Por favor ingresa tu usuario y contraseña.');
    }
  };

  return (
    <div className="screen fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <img src={nintendoLogo} alt="Nintendo" style={{ width: '120px' }} />
      </div>
      
      <div className="card" style={{ width: '100%', maxWidth: '350px', flexDirection: 'column', padding: '30px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {error && <div style={{ color: 'var(--nintendo-red)', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
          
          <input 
            type="text" 
            placeholder="Usuario o Correo" 
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>

    </div>
  );
}