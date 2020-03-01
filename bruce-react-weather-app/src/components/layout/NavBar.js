import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-white" to="/">
        Bruce-Weather-Service
          </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/weather">
              Weather
          </Link>
          </li>



        </ul>

      </div>
    </nav>
  )
};
export default NavBar 
