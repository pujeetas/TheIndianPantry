import { useEffect, useState } from "react";
import { WA_BASE, WA_NUMBER } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-brand" href="#">
        The Paneer <span>Pantry</span>
      </a>
      <div className="nav-right">
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#how" onClick={() => setOpen(false)}>
              How to Order
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>
        <a
          className="btn-wa-nav"
          href={WA_BASE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={16} /> +65 {WA_NUMBER.slice(2)}
        </a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
