import "./../css/Footer.css";

function Footer() {
  return (
    <footer>
        
      <div className="footer-content"> 
        <div className="footer-pt1">
        <div className="footer-brand">
          <h2 className="footer-name">CyberHomes</h2>
          <p>
            Find your dream home with ease.
          </p>
        </div>


        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Agents</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Property Types</h3>
          <ul>
            <li><a href="#">Apartments</a></li>
            <li><a href="#">Houses</a></li>
            <li><a href="#">Lands</a></li>
            <li><a href="#">Commercial</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@CyberHomes.com</p>
          <p>Phone: +234 000 000 0000</p>
        </div> 
        
        <div class="socials">
            <h3>Follow Us</h3>
         <div class="social-icons">
            <a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
            <a href="https://x.com"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i class="fab fa-linkedin-in"></i></a>
        </div>   
        </div>
      </div>
        <div className="footer-line"></div>

    
         <div className="div-footer">
             
            <div className="footer-note">
                © {new Date().getFullYear()} CyberHomes. All rights reserved.
            </div>
            <div className="footer-end">
                <div>FAQs</div> 
                <div>Terms of use</div>
                <div> Privacy Policy </div>
            </div>
            </div> 
      </div>
    </footer>
  );
}

export default Footer;
