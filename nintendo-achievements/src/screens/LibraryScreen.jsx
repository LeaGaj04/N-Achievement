import React, { useState } from 'react';
import { games } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';

export default function LibraryScreen() {
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', 'Jugando', '100%'];

  const filteredGames = games.filter(g => {
    if (filter === 'Jugando') return g.status === 'jugando';
    if (filter === '100%') return g.progress === 100;
    return true;
  });

  return (
    <div className="screen fade-in">
      <h1 className="header-title">Biblioteca</h1>
      
      <div className="tabs-container">
        {tabs.map(tab => (
          <button 
            key={tab} 
            className={`tab-btn ${filter === tab ? 'active' : ''}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {filteredGames.map(game => (
        <div key={game.id} className="card">
          <img src={game.cover} alt={game.title} className="cover-img" />
          <div className="card-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="card-title">{game.title}</div>
              <span style={{ fontSize: '10px', background: 'var(--bg-color)', padding: '2px 8px', borderRadius: '10px', color: 'var(--text-muted)' }}>
                {game.status.toUpperCase()}
              </span>
            </div>
            <ProgressBar progress={game.progress} />
          </div>
        </div>
      ))}
    </div>
  );
}