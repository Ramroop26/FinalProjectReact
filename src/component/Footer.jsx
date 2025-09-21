import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
       <div className="footer-section">
  <h3>Nike Shoe Store</h3>
  <p>Your one-stop destination for premium sneakers and sportswear.</p>
  <p><strong>Address:</strong> 123 Sneaker Street, New Delhi, India</p>
  <p><strong>Email:</strong> support@nikestore.com</p>
  <p><strong>Phone:</strong> +91 98765 43210</p>
  <p><strong>Hours:</strong> Mon - Sat, 9:00 AM - 8:00 PM</p>
</div>


        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/track">Track Order</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Nike Shoe Store | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
