import {
  DELIVERY_FEE,
  formatPrice,
  productLines,
  products,
} from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";

export default function Products({ onOrder }) {
  return (
    <section className="products section section--tint" id="products">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow eyebrow--ruled">What We Offer</span>
          <h2 className="section-title">
            Fresh paneer, <em>your way</em>
          </h2>
          <p className="section-desc">
            Plain or spiced, in the size that suits your household. Everything
            is made fresh on delivery day — minimum order 200g.
          </p>
        </div>

        <div className="products-grid">
          {productLines.map((line, i) => {
            const sizes = products.filter((p) => p.line === line.line);
            return (
              <article
                className={`product${line.highlight ? " is-featured" : ""} reveal`}
                key={line.line}
                style={{ "--reveal-delay": `${i * 0.09}s` }}
              >
                <div className="product-media">
                  <img
                    src={line.img}
                    alt={line.alt}
                    width={560}
                    height={560}
                    loading="lazy"
                  />
                  <span
                    className={`product-tag${line.highlight ? " is-featured" : ""}`}
                  >
                    {line.tag}
                  </span>
                </div>

                <div className="product-body">
                  <h3 className="product-name">{line.name}</h3>
                  {line.note && <p className="product-note">{line.note}</p>}
                  <p className="product-desc">{line.desc}</p>

                  <ul className="product-sizes" aria-label={`${line.name} sizes`}>
                    {sizes.map((p) => (
                      <li key={p.id}>
                        <button
                          type="button"
                          className="size-row"
                          onClick={() => onOrder(p.label)}
                          aria-label={`Order ${p.label}`}
                        >
                          <span className="size-row-what">
                            <span className="size-row-weight">{p.weight}</span>
                            {p.meta && (
                              <span className="size-row-meta">{p.meta}</span>
                            )}
                          </span>
                          <span className="size-row-price">
                            {p.price === null ? "Let's chat" : formatPrice(p.price)}
                          </span>
                          <span className="size-row-go" aria-hidden="true">
                            <WhatsAppIcon size={15} />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="products-note reveal">
          <Icon name="pin" size={17} />
          <span>
            Delivered personally across Singapore for{" "}
            {formatPrice(DELIVERY_FEE)}, or collect free from Bukit Batok.
          </span>
        </p>
      </div>
    </section>
  );
}
