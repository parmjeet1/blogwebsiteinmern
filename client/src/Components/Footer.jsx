import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
     <footer id="footer" class="footer light-background">

<div class="footer-top">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-5 col-md-12 footer-about">
        <Link to="index.html" class="logo d-flex align-items-center">
          <span class="sitename">Nova</span>
        </Link>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div class="social-links d-flex mt-4">
          <Link to=""><i class="bi bi-twitter-x"></i></Link>
          <Link to=""><i class="bi bi-facebook"></i></Link>
          <Link to=""><i class="bi bi-instagram"></i></Link>
          <Link to=""><i class="bi bi-linkedin"></i></Link>
        </div>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About us</Link></li>
          <li><Link to="#">Services</Link></li>
          <li><Link to="#">Terms of service</Link></li>
          <li><Link to="#">Privacy policy</Link></li>
        </ul>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><Link to="#">Web Design</Link></li>
          <li><Link to="#">Web Development</Link></li>
          <li><Link to="#">Product Management</Link></li>
          <li><Link to="#">Marketing</Link></li>
          <li><Link to="#">Graphic Design</Link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>United States</p>
        <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
        <p><strong>Email:</strong> <span>info@example.com</span></p>
      </div>

    </div>
  </div>
</div>

<div class="container copyright text-center">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">Nova</strong> <span>All Rights Reserved</span></p>
  <div class="credits">
    
    Designed by <Link to="./">Nova</Link>
  </div>
</div>

</footer>
        </>
    )
}
export default Footer;