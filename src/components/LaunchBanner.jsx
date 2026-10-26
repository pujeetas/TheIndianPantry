import { products } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";

export default function LaunchBanner({ onOrder }) {
  const sizes = products.filter((p) => p.line === "masala");
  const masala = sizes.find((p) => p.isNew);
  if (!masala) return null;

  return (
    <section className="launch" aria-labelledby="launch-title">
      <div className="container">
        <div className="launch-card reveal">
          <div className="launch-media">
            <img
              src="/img/masala-paneer-plate.jpg"
              alt="Herb-speckled masala paneer cubes on a plate"
              width={1000}
              height={800}
              loading="lazy"
            />
          </div>

          <div className="launch-body">
            <span className="launch-eyebrow">
              <span className="pulse-dot" />
              Introducing — new this season
            </span>
            <h2 className="launch-title" id="launch-title">
              Masala <em>Paneer</em>
            </h2>
            <p className="launch-desc">
              Our fresh paneer, pressed with chilli, herbs and whole spices.
              Raw and ready to cook — the flavour is already in the block.
            </p>
            <p className="launch-meta">
              {sizes.map((p, i) => (
                <span key={p.id}>
                  {i > 0 && " · "}
                  <strong>{p.price}</strong> {p.weight}
                </span>
              ))}{" "}
              · Pre-order only
            </p>
            <div className="launch-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOrder(masala.label)}
              >
                <WhatsAppIcon size={18} /> Pre-order Masala Paneer
              </button>
              <a className="btn btn-ghost" href="#masala-paneer">
                See details
                <Icon name="arrowRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
