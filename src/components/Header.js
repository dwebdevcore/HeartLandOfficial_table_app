import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoSm from '../images/logo-sm.png';
import logo from '../images/logo.png';
import logoLg from '../images/logo-lg.png';

const Header = () => (
  <header className="page-header">
    <div className="content">
      <Link to={`${process.env.PUBLIC_URL}/`} className="logo">
        <img
          src={logo}
          srcSet={`${logoSm} 300w, ${logo} 600w, ${logoLg} 1200w`}
          alt="Heartland Patient Marketing logo"
          title="Heartland Dental Patient Marketing &ndash; Strategic &middot; Innovative &middot; Impactful"
          width="400"
        />
      </Link>
    </div>
  </header>
);
export default Header;
