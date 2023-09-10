import React from "react";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import ancor from '../../assets/favicon.svg'

const Navigation = () => {
  return (
    <nav>
      <img src={ancor} alt="app logo" width={40} height={60} className={css.logo} />
      <NavLink to="/" className={({ isActive }) => `${isActive ? css.active : ''}`}>Main</NavLink>
      <NavLink to="/Shipments" className={({ isActive }) => `${isActive ? css.active : ''}`}>Shipments</NavLink>
    </nav>
  );
};

export default Navigation;