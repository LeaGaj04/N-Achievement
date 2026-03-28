import React from 'react';
import { games } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';

// 1. Importas la imagen local desde la carpeta assets
import nintendoLogo from '../assets/n-logo.png'; 

export default function HomeScreen() {
  const recentGames = games.filter(g => g.recent);

  return (
    <div className="screen fade-in">
      {/* 2. Usas la variable que importaste en el src */}
      <div className="header-logo-container">
        <img src={nintendoLogo} alt="Nintendo" className="header-logo" />
      </div>
      
      <h2 className="section-title">Actividad Reciente</h2>
      
      {/* ... el resto del código sigue igual ... */}
      {recentGames.map(game => (
        <div key={`recent-${game.id}`} className="card">
          <img src={game.cover} alt={game.title} className="cover-img" />
          <div className="card-content">
            <div className="card-title">{game.title}</div>
            <div className="card-subtitle">{game.progress}% Logros desbloqueados</div>
            <ProgressBar progress={game.progress} />
          </div>
        </div>
      ))}

      <h2 className="section-title" style={{ marginTop: '20px' }}>Todos los juegos</h2>
      {games.map(game => (
        <div key={`all-${game.id}`} className="card">
          <img src={game.cover} alt={game.title} className="cover-img" />
          <div className="card-content">
            <div className="card-title">{game.title}</div>
            <div className="card-subtitle">{game.hours} horas jugadas</div>
            <ProgressBar progress={game.progress} />
          </div>
        </div>
      ))}
    </div>
  );
}