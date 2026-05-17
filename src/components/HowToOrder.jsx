import { steps, WA_BASE, WA_NUMBER } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function HowToOrder() {
  return (
    <section className="how" id="how">
      <div className="how-inner">
        <div className="section-header reveal">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How to Order</h2>
          <p className="section-desc">
            Three easy steps and fresh paneer is on its way to your table.
          </p>
        </div>

        <div className="delivery-policy reveal">
          <h4>🚚 Delivery Schedule</h4>
          <div className="delivery-slots">
            <div className="slot-item">
              <div className="slot-time">Order before 2pm</div>
              <div className="slot-desc">Delivered the next day</div>
            </div>
            <div className="slot-item">
              <div className="slot-time">Order after 2pm</div>
              <div className="slot-desc">Delivered in 2 days</div>
            </div>
          </div>
          <p className="delivery-note">
            📍 We deliver personally across Singapore. Payment via PayNow
            upfront to confirm your order. WhatsApp us at{" "}
            <strong>+65 {WA_NUMBER.slice(2)}</strong> to place your order
            anytime.
          </p>
        </div>

        <div className="steps reveal">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-cta reveal">
          <a
            className="btn-primary"
            href={WA_BASE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} /> Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
