import { products } from "../data/content";
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
            Choose the size that suits your household. Everything is made fresh
            on delivery day — minimum order 200g.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <article
              className={`product${p.featured ? " is-featured" : ""} reveal`}
              key={p.id}
              style={{ "--reveal-delay": `${i * 0.09}s` }}
            >
              <div className="product-media">
                <img src={p.img} alt={p.alt} width={560} height={560} loading="lazy" />
                <span className={`product-tag${p.featured ? " is-featured" : ""}`}>
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

        <p className="products-note reveal">
          <Icon name="pin" size={17} />
          Delivered personally across Singapore, or collect from Bukit Batok —
          no delivery fee on pickup.
        </p>
      </div>
    </section>
  );
}
