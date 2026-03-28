import React, { useState } from 'react';
import { games } from '../data/mockData';
import { Search } from 'lucide-react';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredGames = games.filter(g => 
    g.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="screen fade-in">
      <h1 className="header-title">Buscar</h1>
      
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: 'var(--shadow)', alignItems: 'center', gap: '10px' }}>
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Buscar juegos..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px' }}
          />
        </div>
      </div>

      {filteredGames.map(game => (
        <div key={game.id} className="card">
          <img src={game.cover} alt={game.title} className="cover-img" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <div className="card-content">
            <div className="card-title" style={{ marginBottom: 0 }}>{game.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}