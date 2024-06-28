import React from 'react';
import InicioContent from './content/InicioContent';
import Historial from './content/HistorialContent';
import HistorialContent from './content/HistorialContent';
import SettingsContent from './content/SettingsContent';

interface DashboardContentProps {
  selectedItem: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case 'Inicio':
        return <InicioContent />;
      case 'Historial':
        return <HistorialContent />;
      case 'Ayuda':
        return <div>Contenido de Ayuda</div>;
      case 'Configuración':
        return <SettingsContent />;
      default:
        return <div>Seleccione una opción del menú</div>;
    }
  };

  return (
    <div className='dashboard-content'>
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
