import React, { useState } from 'react';
import './DashboardMenu.css';
import DashboardMenuItem from './dashboardMenuItem/DashboardMenuItem';

interface DashboardMenuProps {
  onMenuItemClick: (item: string) => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState<string>('Inicio');

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    onMenuItemClick(item);
  };

  return (
    <div className='dashboardmenu-container'>
      <div className='dashboardmenu-items-container'>
        <DashboardMenuItem
          text='Inicio'
          icon='/dasboard/item-menu-home.svg'
          selectOn={selectedItem === 'Inicio'}
          onClick={() => handleMenuItemClick('Inicio')}
        />
        <DashboardMenuItem
          text='Historial'
          icon='/dasboard/item-menu-history.svg'
          selectOn={selectedItem === 'Historial'}
          onClick={() => handleMenuItemClick('Historial')}
        />
        <DashboardMenuItem
          text='Ayuda'
          icon='/dasboard/item-menu-help.svg'
          selectOn={selectedItem === 'Ayuda'}
          onClick={() => handleMenuItemClick('Ayuda')}
        />
        <DashboardMenuItem
          text='Configuración'
          icon='/dasboard/item-menu-configuracion.svg'
          selectOn={selectedItem === 'Configuración'}
          onClick={() => handleMenuItemClick('Configuración')}
        />
      </div>
    </div>
  );
};

export default DashboardMenu;
