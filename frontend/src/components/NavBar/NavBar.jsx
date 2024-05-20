import React, { useState } from 'react';
import './NavBar.css';
import { CgMenu } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <button onClick={toggleSidebar} className="menu-icon">
                    <CgMenu />
                </button>
            </nav>
            <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-top">
                    <button onClick={toggleSidebar} className="menu-icon">
                        <CgMenu />
                    </button>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink 
                            to="/Notas" 
                            onClick={toggleSidebar} 
                            className="nav-link" >
                            Notas
                        </NavLink>  
                    </li>                 
                    <li>
                        <NavLink 
                            to="/Espacios" 
                            onClick={toggleSidebar} 
                            className="nav-link" >
                            Espacios
                        </NavLink> 
                    </li>
                </ul>
            </aside>
            <div className={`backdrop ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar} />
        </>
    );
};

export default NavBar;
