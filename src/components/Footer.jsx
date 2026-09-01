import { WA_BASE, WA_NUMBER, pickup } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import Icon from "./icons/Icon";

const LINKS = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#how", label: "How to Order" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/logo-full.jpg"
            alt="The Paneer Pantry — made fresh daily in Singapore"
            width={500}
            height={712}
            loading="lazy"
          />
          <p className="footer-blurb">
            Fresh homemade paneer, pressed to order in a Singapore home
            kitchen. No preservatives, no stabilisers, no shortcuts.
          </p>
        </div>

        <div className="footer-col">
          <h2>Explore</h2>
          <ul className="footer-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Get In Touch</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="chat" size={17} />
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer">
                +65 {WA_NUMBER.slice(2)}
              </a>
            </li>
            <li>
              <Icon name="pin" size={17} />
              <span>{pickup.address}</span>
            </li>
            <li>
              <Icon name="clock" size={17} />
              <span>Order before 2pm for next-day delivery</span>
            </li>
          </ul>

          <div className="social-icons">
            <a
              className="social-icon"
              href={WA_BASE}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              className="social-icon"
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} The Paneer Pantry. All rights reserved.
        </span>
        <ul className="footer-badges">
          <li>SFA Compliant</li>
          <li>No Preservatives</li>
          <li>Full-Cream Milk</li>
        </ul>
      </div>
    </footer>
  );
}
