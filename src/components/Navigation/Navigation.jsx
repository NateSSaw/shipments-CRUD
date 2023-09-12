import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import ancor from '../../assets/favicon.svg';

const Navigation = () => {
  return (
    <nav>
          <NavLink to="/" className={css.logo}>
        <img
          src={ancor}
          alt="app logo"
          width={30}
          height={50}
          
        />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? css.active : ''}`}
      >
        Main
      </NavLink>
      <NavLink
        to="/Shipments"
        className={({ isActive }) => `${isActive ? css.active : ''}`}
      >
        Shipments
      </NavLink>
    </nav>
  );
};

export default Navigation;
