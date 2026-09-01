import { useState } from "react";
import { faqs } from "../data/content";
import Icon from "./icons/Icon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section section--tint" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow eyebrow--ruled">Got Questions?</span>
          <h2 className="section-title">Frequently asked</h2>
          <p className="section-desc">
            Everything worth knowing before you order.
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-sign" aria-hidden="true">
                      <Icon name="plus" size={17} strokeWidth={1.8} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div className="faq-panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
