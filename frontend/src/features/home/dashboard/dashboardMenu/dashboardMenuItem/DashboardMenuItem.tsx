import React from 'react';
import './DashboardMenuItem.css';

interface DashboardMenuItemProps { 
  text: string;
  icon: string;
  selectOn: boolean;
  onClick: () => void;
}

const DashboardMenuItem: React.FC<DashboardMenuItemProps> = ({ text, icon, selectOn, onClick }) => {
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

export default DashboardMenuItem;
