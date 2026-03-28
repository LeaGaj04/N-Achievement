import React from 'react';
import { userProfile, games } from '../data/mockData';
// Quitamos ProgressBar si no lo estamos usando aquí

// Ahora recibimos "username" además de "onLogout"
export default function ProfileScreen({ onLogout, username }) {
  const perfectGame = games.find(g => g.progress === 100);

  return (
    <div className="screen fade-in" style={{ paddingBottom: '20px' }}>
      <div style={{ height: '150px', backgroundImage: `url(${userProfile.banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div style={{ padding: '0 20px', marginTop: '-40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={userProfile.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--card-bg)', border: '4px solid var(--bg-color)', boxShadow: 'var(--shadow)' }} />
        
        {/* AQUÍ MOSTRAMOS EL NOMBRE QUE ESCRIBIÓ EL USUARIO */}
        <h2 style={{ marginTop: '10px' }}>{username}</h2>
        
        <p className="card-subtitle" style={{ textAlign: 'center', margin: '5px 0 15px' }}>{userProfile.bio}</p>
        
        <button className="logout-button" onClick={onLogout}>
          Cambiar de usuario
        </button>
      </div>

      <h2 className="section-title" style={{ marginTop: '30px' }}>Juego Destacado</h2>
      {perfectGame && (
        <div className="card" style={{ border: '2px solid #FFD700' }}>
          <img src={perfectGame.cover} alt={perfectGame.title} className="cover-img" />
          <div className="card-content">
            <div className="card-title">{perfectGame.title}</div>
            <div className="card-subtitle" style={{ color: '#DAA520', fontWeight: 'bold' }}>¡100% Completado! 👑</div>
            <div className="card-subtitle">{perfectGame.hours} horas jugadas</div>
          </div>
        </div>
      )}
    </div>
  );
}