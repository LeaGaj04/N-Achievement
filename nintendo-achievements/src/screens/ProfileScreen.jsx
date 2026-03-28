import React from 'react';
import { userProfile, games } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';

export default function ProfileScreen() {
  const perfectGame = games.find(g => g.progress === 100);

  return (
    <div className="screen fade-in" style={{ paddingBottom: '20px' }}>
      <div style={{ height: '150px', backgroundImage: `url(${userProfile.banner})`, backgroundSize: 'cover' }}></div>
      
      <div style={{ padding: '0 20px', marginTop: '-40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={userProfile.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'white', border: '4px solid white', boxShadow: 'var(--shadow)' }} />
        <h2 style={{ marginTop: '10px' }}>{userProfile.name}</h2>
        <p className="card-subtitle" style={{ textAlign: 'center', marginTop: '5px' }}>{userProfile.bio}</p>
      </div>

      <h2 className="section-title" style={{ marginTop: '20px' }}>Juego Destacado</h2>
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