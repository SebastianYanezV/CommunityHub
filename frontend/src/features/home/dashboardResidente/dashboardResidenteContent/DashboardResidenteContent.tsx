import React from 'react';
import GastoComunContent from './contentResidente/GastoComunContent';
import MultasContent from './contentResidente/MultasContent';
import GastosAdministrativosContent from './contentResidente/GastosAdministrativosContent';
import AreaComunContent from './contentResidente/AreaComunContent';
import NotificacionesContent from './contentResidente/NotificacionesContent';
import RecomendacionesContent from './contentResidente/RecomendacionesContent';

interface DashboardContentProps {
  selectedItem: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
        case 'Gastos Comunes':
            return <GastoComunContent />;
        case 'Multas':
            return <MultasContent />;
        case 'Gastos Administrativos':
            return <GastosAdministrativosContent />;
        case 'Reservar Áreas Comunes':
            return <AreaComunContent />;
        case 'Notificaciones':
            return <NotificacionesContent />;
        case 'Recomendaciones':
            return <RecomendacionesContent />;
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