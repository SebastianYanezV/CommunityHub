import React from 'react';
import RecomendationsContent from './contentAdmin/RecomendationsContent';
import NotificationsContent from './contentAdmin/NotificationsContent';
import ResidentesContent from './contentAdmin/ResidentesContent';
import GestionFinancieraContent from './contentAdmin/GestionFinancieraContent';

interface DashboardContentAdminProps {
  selectedItem: string;
}

const DashboardContentAdmin: React.FC<DashboardContentAdminProps> = ({ selectedItem }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case 'Gestión Financiera':
        return <GestionFinancieraContent />;

      case 'Residentes':
        return <ResidentesContent />;

      case 'Notificaciones':
        return <NotificationsContent/>;

      case 'Recomendaciones':
        return <RecomendationsContent />;

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

export default DashboardContentAdmin;
