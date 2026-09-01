import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";
import { ArchOutline } from "./BrandArch";
import { trustPoints } from "../data/content";

export default function Hero({ onOrder }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-text">
          <span className="hero-eyebrow">
            <span className="pulse-dot" />
            Made fresh daily in Singapore
          </span>

          <h1 className="hero-title">
            Homemade Paneer,
            <br />
            <em>Pure &amp; Fresh</em>
          </h1>

          <p className="hero-lede">
            Pressed from full-cream milk in our home kitchen the same morning it
            reaches you. No additives, no preservatives — and no shelf life to
            hide behind.
          </p>

          <div className="hero-cta">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onOrder()}
            >
              <WhatsAppIcon size={18} /> Order on WhatsApp
            </button>
            <a className="btn btn-ghost" href="#products">
              View Products
              <Icon name="arrowRight" size={17} />
            </a>
          </div>

          <p className="hero-cutoff">
            <Icon name="clock" size={17} />
            <span>
              Order before <strong>2pm</strong> for delivery{" "}
              <strong>tomorrow</strong> — after 2pm, in two days.
            </span>
          </p>
        </div>

        <div className="hero-visual">
          <ArchOutline className="hero-arch-line" />
          <div className="hero-photo">
            <img
              src="/img/hero-paneer.jpg"
              alt="Freshly pressed paneer cubes stacked on a wooden platter with coriander"
              width={1010}
              height={1284}
              fetchpriority="high"
            />
          </div>

          <div className="hero-chip">
            <span className="hero-chip-text">
              <span className="hero-chip-label">Starting at</span>
              <span className="hero-chip-unit">200g block</span>
            </span>
            <span className="hero-chip-price">$10</span>
          </div>
        </div>
      </div>

      <div className="trust-strip">
        <ul className="trust-strip-inner container">
          {trustPoints.map((t) => (
            <li key={t.label}>
              <Icon name={t.icon} size={20} />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
