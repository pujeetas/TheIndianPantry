import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero({ onOrder }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">
            <span className="dot pulse-dot" />
            Made Fresh Daily in Singapore
          </span>
          <h1 className="hero-title">
            Homemade Paneer,
            <br />
            <em>Pure &amp; Fresh</em>
          </h1>
          <p className="hero-tagline">From our home kitchen to your table</p>
          <p className="hero-desc">
            Crafted from Fresh full-cream milk with no additives or
            preservatives. Pre-order your paneer and enjoy same-day freshness
            delivered to your door.
          </p>
          <div className="hero-delivery-note">
            ⏰ Order before <strong>2pm</strong> = delivered{" "}
            <strong>tomorrow</strong>. Order after 2pm = delivered in 2 days.
          </div>
          <div className="hero-btns">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOrder()}
            >
              <WhatsAppIcon size={18} /> Order on WhatsApp
            </button>
            <a className="btn-ghost" href="#products">
              View Products
            </a>
          </div>
          <div className="hero-pills">
            <span className="pill">
              <span className="dot pulse-dot" />
              Made Fresh Daily
            </span>
            <span className="pill">No Preservatives</span>
            <span className="pill">Fresh Milk</span>
            <span className="pill">Singapore-Made</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/HeroImg.png"
            alt="Fresh Homemade Paneer – The Indian Pantry"
            className="hero-product-img"
          />
        </div>
      </div>
    </section>
  );
}
