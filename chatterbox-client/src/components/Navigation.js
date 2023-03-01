import React from 'react';

function Navigation({ onNavClick }) {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      <img id="logo" src="https://53525363.000webhostapp.com/Images/PORTLO-removebg-preview.png" alt="PORTLO" />
      <div className="container">

        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li id="navbar-pages" className="nav-item">
              <a className="nav-link" href="#home" onClick={() => onNavClick('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={() => onNavClick('portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={() => onNavClick('skills')}>Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
