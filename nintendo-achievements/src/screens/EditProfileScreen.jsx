import React, { useState } from 'react';

export default function EditProfileScreen({ currentData, onSave, onCancel }) {
  // --- ESTADO LOCAL DEL FORMULARIO ---
  const [formData, setFormData] = useState({ ...currentData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica: simulamos que los cambios son exitosos
    onSave(formData);
  };

  // --- ESTILOS INTERNOS DE FORMULARIO (Basados en la captura) ---
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '30px 20px 80px', // Espacio para el botón y scroll
    width: '100%',
    maxWidth: '600px', // Limite de ancho para PC/Tablet
    margin: '0 auto', // Centramos
    flex: 1, // Toma todo el espacio
    overflowY: 'auto', // Scroll propio
  };

  const formGroupStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const labelStyles = {
    fontSize: '14px',
    color: 'var(--text-main)',
    fontWeight: 'bold',
  };

  return (
    <div className="screen fade-in" style={{ padding: 0, flexDirection: 'column' }}>
      <form onSubmit={handleSubmit} style={formStyles}>
        
        <h2 style={{ marginBottom: '10px' }}>Formulario de Edición</h2>
        
        {/* PORTADA PREVIEW */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>Imagen de Portada (Banner - URL)</label>
          <div style={{ height: '100px', backgroundImage: `url(${formData.banner})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px', marginBottom: '10px' }} />
          <input 
            type="text" 
            name="banner"
            placeholder="Introduce la URL de la imagen de portada" 
            className="login-input"
            value={formData.banner}
            onChange={handleChange}
          />
        </div>

        {/* AVATAR PREVIEW */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>Imagen de Perfil (Avatar - URL)</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
            <img src={formData.avatar} alt="Preview" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
            <input 
              type="text" 
              name="avatar"
              placeholder="Introduce la URL del avatar" 
              className="login-input"
              style={{ flex: 1 }}
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>Descripción (Bio)</label>
          <textarea 
            name="bio"
            rows="3"
            placeholder="Háblanos un poco de ti" 
            className="login-input"
            style={{ resize: 'none' }}
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        {/* FECHA DE NACIMIENTO */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>Fecha de Nacimiento</label>
          <input 
            type="date" 
            name="dob"
            className="login-input"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        {/* EDAD */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>Edad</label>
          <input 
            type="number" 
            name="age"
            placeholder="Ingresa tu edad" 
            className="login-input"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* PAÍS O REGIÓN */}
        <div style={formGroupStyles}>
          <label style={labelStyles}>País o Región</label>
          <input 
            type="text" 
            name="country"
            placeholder="Ej: España, México, etc." 
            className="login-input"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '30px', position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
          <button type="button" className="tab-btn" style={{ flex: 1, padding: '14px', borderRadius: '8px' }} onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="login-button" style={{ flex: 1, margin: 0 }}>
            Guardar Cambios
          </button>
        </div>
      </form>

    </div>
  );
}