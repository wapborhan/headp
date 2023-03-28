import React from "react";

const DrawerMenu = ({ isOpen, onClose, children }) => {
  return (
    <div className={`drawer-menu ${isOpen ? "open" : ""}`}>
      <div className="drawer-menu-content ">{children}</div>
      <div className="drawer-menu-overlay" onClick={onClose}></div>
    </div>
  );
};

export default DrawerMenu;
