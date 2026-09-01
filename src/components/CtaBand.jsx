import { WA_BASE, WA_NUMBER } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";
import { Flourish } from "./BrandArch";

export default function CtaBand({ onOrder }) {
  return (
    <section className="cta-band">
      <div className="cta-pattern" aria-hidden="true" />

      <div className="container cta-inner reveal">
        <div className="flourish cta-flourish" aria-hidden="true">
          <Flourish size={13} />
        </div>

        <h2 className="cta-title">
          Fresh paneer, made
          <br />
          <em>the day it reaches you</em>
        </h2>

        <p className="cta-desc">
          Order before 2pm and it's at your door tomorrow. Tell us what you need
          and we'll press it fresh.
        </p>

        <div className="cta-actions">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onOrder()}
          >
            <WhatsAppIcon size={18} /> Start Your Order
          </button>
          <a
            className="btn btn-outline-light"
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" size={18} /> +65 {WA_NUMBER.slice(2)}
          </a>
        </div>
      </div>
    </section>
  );
}
