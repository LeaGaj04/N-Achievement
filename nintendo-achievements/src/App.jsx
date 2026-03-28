import React, { useState } from 'react';
import './styles/app.css';

// Importación de Componentes
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibraryScreen from './screens/LibraryScreen';
import LoginScreen from './screens/LoginScreen'; 

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  // NUEVO ESTADO: Guardamos el nombre del usuario logueado
  const [loggedUsername, setLoggedUsername] = useState(''); 

  // Actualizamos handleLogin para que reciba y guarde el nombre
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedUsername(username);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedUsername(''); // Borramos el nombre al salir
    setActiveTab('home'); 
  };

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <LoginScreen onLogin={handleLogin} />
      </div>
    );
  }

  const renderScreen = () => {
    switch(activeTab) {
      case 'home': return <HomeScreen />;
      case 'search': return <SearchScreen />;
      case 'achievements': return <AchievementsScreen />;
      // Pasamos el nombre de usuario como propiedad al perfil
      case 'profile': return <ProfileScreen onLogout={handleLogout} username={loggedUsername} />; 
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