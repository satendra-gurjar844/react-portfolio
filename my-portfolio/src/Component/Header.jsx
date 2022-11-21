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
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
           </ul>
          </div>
        </div>    
        </nav>
    </>
  )
}

export default Header