import React from 'react';
import { games } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';

export default function HomeScreen() {
  const recentGames = games.filter(g => g.recent);

  return (
    <div className="screen fade-in">
      <h1 className="header-title">Home</h1>
      
      <h2 className="section-title">Actividad Reciente</h2>
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