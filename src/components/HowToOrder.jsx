import { steps, WA_NUMBER, pickup } from "../data/content";
import Icon from "./icons/Icon";
import { ArchOutline } from "./BrandArch";

export default function HowToOrder() {
  return (
    <section className="how section" id="how">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow eyebrow--ruled">Simple Process</span>
          <h2 className="section-title">How to order</h2>
          <p className="section-desc">
            Three steps and fresh paneer is on its way to your table.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step reveal" key={s.num} style={{ "--reveal-delay": `${i * 0.1}s` }}>
              <div className="step-badge">
                <span className="step-badge-fill" aria-hidden="true" />
                <ArchOutline className="step-badge-line" />
                <Icon name={s.icon} size={26} strokeWidth={1.5} />
                <span className="step-num">{s.num}</span>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="logistics">
          <div className="logistic reveal">
            <div className="logistic-head">
              <span className="logistic-icon">
                <Icon name="truck" size={20} />
              </span>
              <h3>Delivery</h3>
            </div>

            <ul className="slots">
              <li>
                <span className="slot-time">Order before 2pm</span>
                <span className="slot-desc">Delivered the next day</span>
              </li>
              <li>
                <span className="slot-time">Order after 2pm</span>
                <span className="slot-desc">Delivered in two days</span>
              </li>
            </ul>

            <p className="logistic-note">
              We deliver personally across Singapore. Payment via PayNow upfront
              confirms your order — WhatsApp us at{" "}
              <strong>+65 {WA_NUMBER.slice(2)}</strong> any time.
            </p>
          </div>

          <div className="logistic reveal" style={{ "--reveal-delay": "0.08s" }}>
            <div className="logistic-head">
              <span className="logistic-icon">
                <Icon name="home" size={20} />
              </span>
              <h3>Pickup</h3>
            </div>

            <p className="logistic-note logistic-note--lead">
              Nearby? Choose <strong>Pickup</strong> in the order form and pick a
              date — no delivery fee. We'll confirm your collection time over
              WhatsApp.
            </p>

            <div className="pickup-address">
              <Icon name="pin" size={18} />
              <span>
                <strong>Collect from</strong>
                {pickup.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
