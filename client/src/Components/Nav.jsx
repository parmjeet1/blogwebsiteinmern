import React from 'react'
import { Link } from 'react-router-dom';

 function Nav() {
  return (
    <>
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
      
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1 className="sitename">MERN Stack</h1>
      </Link>

      <nav id="navmenu" className="navmenu" >
        <ul>
          <li><Link to="/" className="active">Home<br/></Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          
          <li><Link to="post/create">Create Post</Link></li>

          <li><Link to="/single-blog">SingleBlog</Link></li>

         
          {/* <li><Link to="about.html">About</Link></li>
          <li><Link to="services.html">Services</Link></li>
          <li><Link to="portfolio.html">Portfolio</Link></li>
          <li><Link to="team.html">Team</Link></li>
           */}
          {/* <li className="dropdown"><a Link="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a Link="#">Dropdown 1</a></li>
              <li className="dropdown"><a Link="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a Link="#">Deep Dropdown 1</a></li>
                  <li><a Link="#">Deep Dropdown 2</a></li>
                  <li><a Link="#">Deep Dropdown 3</a></li>
                  <li><a Link="#">Deep Dropdown 4</a></li>
                  <li><a Link="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a Link="#">Dropdown 2</a></li>
              <li><a Link="#">Dropdown 3</a></li>
              <li><a Link="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a Link="contact.html">Contact</a></li> */}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
<div class></div>
    </div>
  </header>

    </>
  )
}
export default Nav;