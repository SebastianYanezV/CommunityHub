import React, { useState } from 'react';
import './DashboardResidenteMenu.css';
import DashboardResidenteMenuItem from './dashboardResidenteMenuItem/DashboardResidenteMenuItem';

interface DashboardMenuProps {
  onMenuItemClick: (item: string) => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState<string>('Gastos Comunes');

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    onMenuItemClick(item);
  };

  return (
    <div className='dashboardmenu-container'>
      <div className='dashboardmenu-items-container'>
        <DashboardResidenteMenuItem
          text='Gastos Comunes'
          icon='/dasboard/item-menu-gastosComunes.svg'
          selectOn={selectedItem === 'Gastos Comunes'}
          onClick={() => handleMenuItemClick('Gastos Comunes')}
        />
        <DashboardResidenteMenuItem
          text='Multas'
          icon='/dasboard/item-menu-multas.svg'
          selectOn={selectedItem === 'Multas'}
          onClick={() => handleMenuItemClick('Multas')}
        />
        <DashboardResidenteMenuItem
          text='Gastos Administrativos'
          icon='/dasboard/item-menu-gastosAdministrativos.svg'
          selectOn={selectedItem === 'Gastos Administrativos'}
          onClick={() => handleMenuItemClick('Gastos Administrativos')}
        />
        <DashboardResidenteMenuItem
          text='Reservar Áreas Comunes'
          icon='/dasboard/item-menu-areaComun.svg'
          selectOn={selectedItem === 'Reservar Áreas Comunes'}
          onClick={() => handleMenuItemClick('Reservar Áreas Comunes')}
        />
        <DashboardResidenteMenuItem
          text='Notificaciones'
          icon='/dasboard/item-menu-configuracion.svg'
          selectOn={selectedItem === 'Notificaciones'}
          onClick={() => handleMenuItemClick('Notificaciones')}
        />
        <DashboardResidenteMenuItem
          text='Recomendaciones'
          icon='/dasboard/item-menu-configuracion.svg'
          selectOn={selectedItem === 'Recomendaciones'}
          onClick={() => handleMenuItemClick('Recomendaciones')}
        />
      </div>
    </div>
  );
};

export default DashboardMenu;
