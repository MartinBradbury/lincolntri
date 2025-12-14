import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Club info */}
        <div className="footer-section">
          <h4>Lincoln Triathlon Club</h4>
          <p>
            A friendly, inclusive triathlon club supporting athletes of all
            abilities across swim, bike and run.
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
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/join">Join Us</a>
            </li>
          </ul>
        </div>

        {/* Contact / socials */}
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lincoln Triathlon Club</p>
      </div>
    </footer>
  );
}

export default Footer;
