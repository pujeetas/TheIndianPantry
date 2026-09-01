import { useEffect, useState } from "react";
import { WA_BASE, WA_NUMBER } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";

const LINKS = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#how", label: "How to Order" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page behind the open mobile panel from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          <img
            className="nav-logo"
            src="/logo-mark.png"
            alt=""
            aria-hidden="true"
            width={46}
            height={40}
          />
          <span className="nav-brand-text">
            The Paneer <span>Pantry</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-phone"
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span>+65 {WA_NUMBER.slice(2)}</span>
          </a>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onOrder()}>
            Order Now
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className="nav-panel" hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <Icon name="arrowRight" size={18} />
            </a>
          ))}
        </nav>
        <div className="nav-panel-foot">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              setOpen(false);
              onOrder();
            }}
          >
            Order Now
          </button>
          <a
            className="nav-panel-wa"
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} /> +65 {WA_NUMBER.slice(2)}
          </a>
        </div>
      </div>
    </header>
  );
}
