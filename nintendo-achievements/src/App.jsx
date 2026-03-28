import React, { useState } from 'react';
import './styles/app.css';

// Importación de Componentes
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibraryScreen from './screens/LibraryScreen';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Renderizado condicional basado en la pestaña activa
  const renderScreen = () => {
    switch(activeTab) {
      case 'home': return <HomeScreen />;
      case 'search': return <SearchScreen />;
      case 'achievements': return <AchievementsScreen />;
      case 'profile': return <ProfileScreen />;
      case 'library': return <LibraryScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;