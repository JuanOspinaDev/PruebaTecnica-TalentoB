import React from 'react';
import { GiFeather } from 'react-icons/gi';
import './Brand.css'; 
import { NavLink } from 'react-router-dom';

const Brand = ({ onClick }) => {
    return (
        <NavLink to="/" onClick={onClick} className="brand">
            <GiFeather className="logo-icon" />
            <span className="app-title">ScriptFlow</span>
        </NavLink>
    );
};

export default Brand;
