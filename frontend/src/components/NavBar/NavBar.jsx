import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NavBar.css';
import Brand from '../Brand/Brand';
import { CgMenu } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'; 

const NavBar = ({ searchTerm, onSearchTermChange, onSearch }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        console.log("Cerrar sesión");
    };

    return (
        <>
            <nav className='navbar'>
                <Brand />
                {location.pathname === '/scriptboard' && (
                    <SearchBar 
                        searchTerm={searchTerm}
                        onSearchTermChange={onSearchTermChange}
                        onSearch={onSearch}
                    />
                )}
                <div className="navbar-right">
                    <button onClick={handleLogout} className="logout-button">
                        Cerrar sesión
                    </button>
                </div>
            </nav>
            <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-top">
                    <button onClick={toggleSidebar} className="menu-icon">
                        <CgMenu />
                    </button>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <NavLink to="/Notas" onClick={toggleSidebar} className="nav-link">
                            Notas
                        </NavLink>  
                    </li>                 
                    <li>
                        <NavLink to="/Espacios" onClick={toggleSidebar} className="nav-link">
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
