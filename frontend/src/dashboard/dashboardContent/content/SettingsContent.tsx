  import React from 'react';
  import './SettingsContent.css';
  import Button from '../../../components/button/Button';
  import InputField from '../../../components/inputField/InputField';

  const SettingsContent: React.FC = () => {

    const handleClick = async () => {
      // Lógica para manejar el clic del botón
    };

    return (
      <div className="settings-content-container">
        <div className='edit-profile'>
          <h2>Editar Perfil</h2>
          <div className="edit-profile-select"></div>
        </div>
        <div className='edit-profile-settings-container'>
          <div className='edit-profile-photo-container'>
            <div className='photo-container'>
              <img src='/dasboard/item-user.png' alt="User"></img>
            </div>
            <div className='edit-profile-photo-selector'>
              <img src='/dasboard/pencil-alt 1.svg' alt="Edit Icon"></img>
            </div>
          </div>
          <div className='settings-container'>
            <div className='input-container'>
              <h3>Nombre</h3>
              <InputField inputText='Nombre' type='string'/>
            </div>
            <div className='input-container'>
              <h3>Email</h3>
              <InputField inputText='Email'/>
            </div>
            <div className='input-container'>
              <h3>Telefono</h3>
              <InputField inputText='+560593213'/>
            </div>
            <div className='input-container'>
              <h3>Usuario</h3>
              <InputField inputText='User1234'/>
            </div>
            <div className='input-container'>
              <h3>Contraseña</h3>
              <InputField />
            </div>
            <div className='input-container'>
              <h3>Repite Contraseña</h3>
              <InputField />
            </div>
          </div>
        </div>
        <div className='edit-profile-button'>
          <Button onClick={handleClick} buttonText='Guardar'></Button>
        </div>
      </div>
    );
  };

  export default SettingsContent;
