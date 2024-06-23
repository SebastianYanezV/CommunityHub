import React, { useState } from "react";
import "./DashboardMenuAdmin.css";
import DashboardMenuItemAdmin from "./dashboardMenuItemAdmin/DashboardMenuItemAdmin";

interface DashboardMenuAdminProps {
  onMenuItemClick: (item: string) => void;
}

const DashboardMenuAdmin: React.FC<DashboardMenuAdminProps> = ({
  onMenuItemClick,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("Gestión Financiera");

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    onMenuItemClick(item);
  };

  return (
    <div className="dashboardmenu-container">
      <div className="dashboardmenu-items-container">
        <DashboardMenuItemAdmin
          text="Gestión Financiera"
          icon="/dasboard/item-menu-history.svg"
          selectOn={selectedItem === "Gestión Financiera"}
          onClick={() => handleMenuItemClick("Gestión Financiera")}
        />
        <DashboardMenuItemAdmin
          text="Residentes"
          icon="/dasboard/item-menu-help.svg"
          selectOn={selectedItem === "Residentes"}
          onClick={() => handleMenuItemClick("Residentes")}
        />
        <DashboardMenuItemAdmin
          text="Notificaciones"
          icon="/dasboard/item-menu-configuracion.svg"
          selectOn={selectedItem === "Notificaciones"}
          onClick={() => handleMenuItemClick("Notificaciones")}
        />
        <DashboardMenuItemAdmin
          text="Recomendaciones"
          icon="/dasboard/item-menu-services.svg"
          selectOn={selectedItem === "Recomendaciones"}
          onClick={() => handleMenuItemClick("Recomendaciones")}
        />
      </div>
    </div>
  );
};

export default DashboardMenuAdmin;
