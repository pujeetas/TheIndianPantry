import { products } from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Products({ onOrder }) {
  return (
    <section className="products" id="products">
      <div className="section-header reveal">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">Fresh Paneer, Your Way</h2>
        <p className="section-desc">
          Choose the size that suits your household. All orders are made fresh
          on delivery day — minimum order 200g.
        </p>
      </div>

      <div className="products-grid">
        {products.map((p, i) => (
          <div
            className="product-card reveal"
            key={p.id}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="product-img" style={{ background: p.bg }}>
              <span style={{ fontSize: "3.5rem" }}>{p.emoji}</span>
              <span className="product-tag">{p.tag}</span>
            </div>
            <div className="product-body">
              <div className="product-name">{p.name}</div>
              <div className="product-weight">{p.weight}</div>
              <p className="product-desc">{p.desc}</p>
              <div className="product-price">
                {p.price.startsWith("$") ? (
                  <>
                    <sup>$</sup>
                    {p.price.slice(1)}
                  </>
                ) : (
                  p.price
                )}
              </div>
              <button
                type="button"
                className="btn-order"
                onClick={() => onOrder(p.label)}
              >
                <WhatsAppIcon size={16} /> Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
