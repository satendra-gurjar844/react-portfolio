import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
            
              <Link className="nav-link nav-item" to="/">Home</Link>
              <Link className="nav-link nav-item" to="/portfolio">Portfolio</Link>
              <Link className="nav-link nav-item" to="/resume">Resume</Link>
              <Link className="nav-link nav-item" to="/about">About</Link>
              <Link className="nav-link nav-item" to="/contact">Contact</Link>
           
          </div>
        </div>
        </nav>
    </>
  )
}

export default Header