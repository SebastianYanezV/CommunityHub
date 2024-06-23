import React from 'react';
import './DashboardMenuItemAdmin.css';

interface DashboardMenuItemAdminProps { 
  text: string;
  icon: string;
  selectOn: boolean;
  onClick: () => void;
}

const DashboardMenuItemAdmin: React.FC<DashboardMenuItemAdminProps> = ({ text, icon, selectOn, onClick }) => {
  return (
    <div className={`dashboarmenuitem-container ${selectOn ? 'selected' : ''}`} onClick={onClick}>
      <div className="dashboarmenuitem-select-placeholder">
        {selectOn && <div className="dashboarmenuitem-select"></div>}
      </div>
      <div className="dashboarmenuitem-logo">
        <img src={icon} alt="icon" className="icon-img" />
      </div>
      <h5>{text}</h5>
    </div>
  );
};

export default DashboardMenuItemAdmin;
