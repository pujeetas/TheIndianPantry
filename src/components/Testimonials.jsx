import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow eyebrow--ruled">Kind Words</span>
          <h2 className="section-title">What our customers say</h2>
        </div>

        <ul className="testimonial-list reveal">
          {testimonials.map((t) => (
            <li key={t.quote}>
              <figure className="testimonial">
                <blockquote>
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption>{t.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
