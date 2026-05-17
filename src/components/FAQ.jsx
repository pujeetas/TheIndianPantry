import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="section-header reveal">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked</h2>
          <p className="section-desc">
            Everything you need to know before ordering.
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((item, i) => (
            <div
              className={`faq-item${openIndex === i ? " open" : ""}`}
              key={i}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-chevron">▼</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
