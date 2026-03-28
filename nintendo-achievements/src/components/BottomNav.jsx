import React from 'react';
import { Home, Search, Trophy, User, Library } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Buscar' },
    { id: 'achievements', icon: Trophy, label: 'Logros' },
    { id: 'profile', icon: User, label: 'Perfil' },
    { id: 'library', icon: Library, label: 'Biblioteca' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button 
          key={item.id} 
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <item.icon size={24} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}