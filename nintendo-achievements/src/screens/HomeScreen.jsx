import React from 'react';
import { games } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';
import nintendoLogo from '../assets/n-logo.png'; 

export default function HomeScreen() {
  const recentGames = games.filter(g => g.recent);

  return (
    <div className="screen fade-in">
      
      <div className="header-logo-container">
        <img src={nintendoLogo} alt="Nintendo" className="header-logo" />
      </div>
      
      <h2 className="section-title">Actividad Reciente</h2>
      
      {/* QUITAMOS la clase "games-grid" aquí para que sea de 1 sola columna */}
      <div style={{ paddingBottom: '10px' }}>
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
      </div>

      <h2 className="section-title" style={{ marginTop: '10px' }}>Todos los juegos</h2>
      
      {/* MANTENEMOS la clase "games-grid" aquí para que use 2 columnas en PC/Tablet */}
      <div className="games-grid">
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

    </div>
  );
}