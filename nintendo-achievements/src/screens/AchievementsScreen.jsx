import React, { useState } from 'react';
import { achievements } from '../data/mockData';
import ProgressBar from '../components/ProgressBar';

export default function AchievementsScreen() {
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', 'Recientes', 'Raros', 'Bloqueados'];

  const filteredAchievements = achievements.filter(ach => {
    if (filter === 'Recientes') return ach.recent;
    if (filter === 'Raros') return ach.rare;
    if (filter === 'Bloqueados') return !ach.unlocked;
    return true;
  });

  return (
    <div className="screen fade-in">
      <h1 className="header-title">Logros</h1>
      
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

      {filteredAchievements.map(ach => (
        <div key={ach.id} className={`card ${!ach.unlocked ? 'locked' : ''}`}>
          <div className="achievement-icon">
            {ach.unlocked ? '🏆' : '🔒'}
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="card-title">{ach.name}</div>
              <div className="card-subtitle" style={{ color: 'var(--nintendo-red)', fontWeight: 'bold' }}>{ach.rarity}%</div>
            </div>
            <div className="card-subtitle">{ach.desc}</div>
            <ProgressBar progress={ach.progress} />
          </div>
        </div>
      ))}
    </div>
  );
}