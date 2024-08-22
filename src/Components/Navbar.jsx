import React from 'react';
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div className='header_conainer'>
        <nav className="navbar navbarclass navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    
        <h3 style={{display:"inline-block"}}>

       <span className='ml-4' style={{fontWeight:"700",color:"navy"}}>
        <i>
        LOGO
        </i>
        </span>
        </h3>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ulclass w-100 ">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
            Page
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Gallery
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact Us
        </a>
      </li>
      
       <button className='btn btn-outline-danger btn-sm  m-2' style={{borderRadius:"1.5rem",width:"5rem"}}>Login</button>
       <button className='btn btn-danger btn-sm  m-2' style={{borderRadius:"1.5rem",width:"5rem"}}>Sigh up</button>
    </ul>
    
  </div>
</nav>

    </div>
  )
}

export default Navbar
