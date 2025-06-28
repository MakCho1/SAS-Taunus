import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">SAS Taunus</div>
      <nav className="nav-links">
  <a href="#ueber-uns" className="header-link">Über uns</a>
  <a href="#leistungen" className="header-link">Leistungen</a>
  <a href="#kontakt" className="header-link">Kontakt</a>
</nav>

    </header>
  );
}

export default Header;