import { WA_BASE, WA_NUMBER } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            The Paneer <span>Pantry</span>
          </h2>
          <p>
            Fresh homemade paneer made daily in Singapore.
            <br />
            Pre-order yours today — delivered to your door.
          </p>
          <a
            className="footer-wa-link"
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} /> +65 {WA_NUMBER.slice(2)}
          </a>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#how">How to Order</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              className="social-icon"
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className="social-icon"
              href={WA_BASE}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} The Paneer Pantry. All rights reserved.
        </span>
        <div className="footer-badges">
          <span className="badge">SFA Compliant</span>
          <span className="badge">No Preservatives</span>
          <span className="badge">Amul Milk</span>
        </div>
      </div>
    </footer>
  );
}
