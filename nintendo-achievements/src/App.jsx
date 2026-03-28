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
  const [loggedUsername, setLoggedUsername] = useState(''); 

  // --- NUEVO ESTADO: Datos de perfil (inicializados con valores por defecto) ---
  const [userProfileData, setUserProfileData] = useState({
    name: "NintenFan_99", // Este será reemplazado por el login
    bio: "Completando todo al 100%. ¡Esperando la Switch 2!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninten",
    banner: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80&w=800&h=300",
    dob: "", // Fecha de nacimiento (vacío por defecto)
    age: "", // Edad
    country: "", // País
  });

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedUsername(username);
    // Actualizamos el nombre en el perfil también
    setUserProfileData(prev => ({ ...prev, name: username }));
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedUsername(''); 
    setActiveTab('home'); 
  };

  // --- NUEVA FUNCIÓN: Guardar cambios de perfil ---
  const handleUpdateProfile = (updatedData) => {
    setUserProfileData(updatedData);
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
      // --- PASAMOS DATOS Y FUNCIÓN AL PERFIL ---
      case 'profile': return <ProfileScreen 
                               onLogout={handleLogout} 
                               profileData={userProfileData} 
                               onUpdate={handleUpdateProfile}
                             />; 
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