import { products } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";

export default function Products({
  onOrder,
  line,
  id,
  eyebrow,
  title,
  desc,
  tint = false,
  showNote = false,
}) {
  const items = products.filter((p) => p.line === line);

  return (
    <section
      className={`products section${tint ? " section--tint" : ""}`}
      id={id}
    >
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow eyebrow--ruled">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-desc">{desc}</p>
        </div>

        <div
          className={`products-grid${items.length === 2 ? " products-grid--two" : ""}`}
        >
          {items.map((p, i) => (
            <article
              className={`product${p.featured ? " is-featured" : ""} reveal`}
              key={p.id}
              style={{ "--reveal-delay": `${i * 0.09}s` }}
            >
              <div className="product-media">
                <img src={p.img} alt={p.alt} width={560} height={560} loading="lazy" />
                <span className={`product-tag${p.featured || p.isNew ? " is-featured" : ""}`}>
                  {p.tag}
                </span>
              </div>

              <div className="product-body">
                <div className="product-head">
                  <h3 className="product-name">{p.name}</h3>
                  <span className="product-weight">{p.weight}</span>
                </div>

                <p className="product-desc">{p.desc}</p>

                <div className="product-foot">
                  <div className="product-pricing">
                    <span className="product-price">
                      {p.price.startsWith("$") ? (
                        <>
                          <sup>$</sup>
                          {p.price.slice(1)}
                        </>
                      ) : (
                        p.price
                      )}
                    </span>
                    <span className="product-meta">{p.meta}</span>
                  </div>

                  <button
                    type="button"
                    className={`btn btn-sm ${p.featured ? "btn-primary" : "btn-ghost"} product-btn`}
                    onClick={() => onOrder(p.label)}
                  >
                    <WhatsAppIcon size={15} /> Order
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showNote && (
          <p className="products-note reveal">
            <Icon name="pin" size={17} />
            Delivered personally across Singapore, or collect from Bukit Batok —
            no delivery fee on pickup.
          </p>
        )}
      </div>
    </section>
  );
}
