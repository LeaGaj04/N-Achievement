import React, { useState } from 'react';
import { Pencil, ArrowLeft } from 'lucide-react'; // Importamos los iconos
import { games } from '../data/mockData';
import EditProfileScreen from './EditProfileScreen'; // Importaremos el nuevo componente

// Ahora recibimos "profileData" y "onUpdate"
export default function ProfileScreen({ onLogout, profileData, onUpdate }) {
  // --- NUEVO ESTADO: Controla si estamos en modo edición ---
  const [isEditing, setIsEditing] = useState(false);
  const perfectGame = games.find(g => g.progress === 100);

  // --- SI ESTAMOS EDITANDO, MOSTRAMOS LA PANTALLA DE EDICIÓN ---
  if (isEditing) {
    return (
      <div className="app-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: 100, height: '100%' }}>
        {/* Usamos un header falso para simular una navegación nativa */}
        <div style={{ display: 'flex', alignItems: 'center', background: '#1A1A1A', padding: '15px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button className="logout-button" style={{ border: 'none', color: 'white' }} onClick={() => setIsEditing(false)}>
            <ArrowLeft size={20} style={{ marginRight: '5px' }} />
            Volver
          </button>
          <h2 className="section-title" style={{ margin: 0, flex: 1, textAlign: 'center' }}>Editar Perfil</h2>
        </div>
        
        <EditProfileScreen 
          currentData={profileData} 
          onSave={(updated) => {
            onUpdate(updated); // Guardamos en App.jsx
            setIsEditing(false); // Volvemos al perfil
          }} 
          onCancel={() => setIsEditing(false)} 
        />
      </div>
    );
  }

  // --- RENDERIZADO DEL PERFIL NORMAL ---
  return (
    <div className="screen fade-in" style={{ paddingBottom: '20px' }}>
      <div style={{ height: '150px', backgroundImage: `url(${profileData.banner})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        {/* BOTÓN DE LÁPIZ PARA PORTADA (Simulado, abre la edición general) */}
        <button 
          className="achievement-icon" 
          style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', width: '40px', height: '40px', fontSize: '18px' }}
          onClick={() => setIsEditing(true)}
        >
          <Pencil size={18} color="white" />
        </button>
      </div>
      
      <div style={{ padding: '0 20px', marginTop: '-40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img src={profileData.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--card-bg)', border: '4px solid var(--bg-color)', boxShadow: 'var(--shadow)' }} />
          {/* BOTÓN DE LÁPIZ PARA AVATAR (Simulado, abre la edición general) */}
          <button 
            className="achievement-icon" 
            style={{ position: 'absolute', bottom: '0px', right: '0px', background: 'rgba(0,0,0,0.5)', width: '35px', height: '35px', fontSize: '16px', border: '2px solid var(--bg-color)' }}
            onClick={() => setIsEditing(true)}
          >
            <Pencil size={16} color="white" />
          </button>
        </div>
        
        <h2 style={{ marginTop: '10px' }}>{profileData.name}</h2>
        <p className="card-subtitle" style={{ textAlign: 'center', margin: '5px 0 15px' }}>{profileData.bio}</p>
        
        <button className="logout-button" style={{ marginBottom: '15px' }} onClick={onLogout}>
          Cambiar de usuario
        </button>
      </div>

      <h2 className="section-title" style={{ marginTop: '30px' }}>Juego Destacado</h2>
      {perfectGame && (
        <div className="card" style={{ border: '2px solid #FFD700' }}>
          <img src={perfectGame.cover} alt={perfectGame.title} className="cover-img" />
          <div className="card-content">
            <div className="card-title">{perfectGame.title}</div>
            <div className="card-subtitle" style={{ color: '#DAA520', fontWeight: 'bold' }}>¡100% Completado! 👑</div>
            <div className="card-subtitle">{perfectGame.hours} horas jugadas</div>
          </div>
        </div>
      )}
    </div>
  );
}