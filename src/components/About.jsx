export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-left reveal">
          <span className="about-tag">Our Story</span>
          <h2 className="about-title">
            Real Milk. Real Hands.
            <br />
            Real Flavour.
          </h2>
          <p className="about-body">
            The Indian Pantry was born out of a simple frustration — the
            supermarket paneer never tasted like home. So we started making our
            own, the traditional way: Amul full-cream milk, a squeeze of lemon,
            and patience. Word spread among friends and neighbours, and here we
            are.
            <br />
            <br />
            Every block is pressed to order, same-day fresh, and free of the
            stabilisers and preservatives that make store-bought paneer taste
            rubbery. What you get is soft, milky, and flavourful — just like it
            should be.
          </p>
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Amul full-cream milk</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">0</div>
              <div className="stat-label">Preservatives added</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Daily</div>
              <div className="stat-label">Fresh batches made</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">SG</div>
              <div className="stat-label">Proudly home-made</div>
            </div>
          </div>
        </div>

        <div className="about-cards reveal">
          <div className="card-big">
            <div className="icon-circle">🥛</div>
            <div>
              <h3>Amul Full-Cream Milk</h3>
              <p>
                We use Amul full-cream milk — trusted by Indian households for
                generations. Rich, consistent, and free from shortcuts like
                powdered or reconstituted milk.
              </p>
            </div>
          </div>
          <div className="cards-small">
            <div className="card-sm">
              <div className="icon">🏡</div>
              <h4>Home Kitchen</h4>
              <p>
                Made in a clean, loving home kitchen — not a factory line. Every
                block gets the same care.
              </p>
            </div>
            <div className="card-sm">
              <div className="icon">📋</div>
              <h4>Pre-Order Only</h4>
              <p>
                We make exactly what's ordered — nothing sits on a shelf,
                nothing goes to waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
