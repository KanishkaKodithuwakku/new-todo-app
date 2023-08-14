import React from "react";

const Sidebar = () => {
  return (
    <div>
      <h5>Sidebar Menu</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#dashboard">Dashboard</a>
        </li>
        <li className="list-group-item">
          <a href="#profile">Profile</a>
        </li>
        <li className="list-group-item">
          <a href="#settings">Settings</a>
        </li>
        <li className="list-group-item">
          <a href="#help">Help</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
