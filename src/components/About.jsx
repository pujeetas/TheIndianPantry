import Icon from "./icons/Icon";
import { ArchOutline } from "./BrandArch";
import { values, stats } from "../data/content";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">
        <div className="about-visual reveal">
          <ArchOutline className="about-arch-line" />
          <div className="about-photo">
            <img
              src="/img/about-kitchen.jpg"
              alt="A block of fresh paneer beside a milk pot and a bowl of coriander"
              width={776}
              height={970}
              loading="lazy"
            />
          </div>
          <div className="about-float">
            <span className="about-float-icon">
              <Icon name="leaf" size={20} />
            </span>
            <span className="about-float-text">
              <strong>Nothing added</strong>
              No preservatives, no stabilisers — ever.
            </span>
          </div>
        </div>

        <div className="about-body reveal">
          <span className="eyebrow eyebrow--ruled">Our Story</span>
          <h2 className="section-title about-title">
            Real milk. Real hands.
            <br />
            <em>Real flavour.</em>
          </h2>

          <p className="about-para">
            The Paneer Pantry was born out of a simple frustration — the
            supermarket paneer never tasted like home. So we started making our
            own, the traditional way: good full-cream milk, small batches,
            and patience. Word spread among friends and neighbours, and here we
            are.
          </p>
          <p className="about-para">
            Every block is pressed to order, same-day fresh, and free of the
            stabilisers that make store-bought paneer taste rubbery. What you
            get is soft, milky, and flavourful — just like it should be.
          </p>

          <ul className="values-grid">
            {values.map((v) => (
              <li className="value" key={v.title}>
                <span className="value-icon">
                  <Icon name={v.icon} size={21} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <ul className="stats-row reveal">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
