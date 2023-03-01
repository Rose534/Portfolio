import React from 'react';

function NavigationBar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#f5f5f5'}}>
        <img id = "logo" src="https://53525363.000webhostapp.com/Images/PORTLO-removebg-preview.png" alt="PORTLO" />
      <div className="container">
        
        <a className="navbar-brand" href="#">PORTLO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
