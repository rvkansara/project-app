import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
    return <div className="sidebar">
        <ul className="sidebarContents">
            <li className="sidebarItem">Dashboard</li>
            <li className="sidebarItem">Inventory Management</li>
        </ul>
    </div>
}

export default Sidebar;