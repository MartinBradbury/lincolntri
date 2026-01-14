import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Club info */}
        <div className="footer-section">
          <h4>Lincoln Tri Club</h4>
          <p>
            A friendly, inclusive tri club supporting athletes of all abilities
            across swim, bike and run.
          </p>
        </div>

        {/* Quick links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/training">Training</a>
            </li>
            <li>
              <a href="/membership">Membership</a>
            </li>
          </ul>
        </div>

        {/* Social icons */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/lincolntri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/lincoln.triclub/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="/membership" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lincoln Tri Club</p>
      </div>
    </footer>
  );
}

export default Footer;
