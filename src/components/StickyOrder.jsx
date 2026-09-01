import { useEffect, useState } from "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

/**
 * Mobile-only bottom bar. Slides in once the hero's CTAs have scrolled
 * away, so there is always an order button within thumb reach.
 */
export default function StickyOrder({ onOrder }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      const atFoot =
        window.innerHeight + window.scrollY >
        document.body.scrollHeight - 260;
      setShow(past && !atFoot);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`sticky-order${show ? " is-visible" : ""}`}>
      <div className="sticky-order-info">
        <span className="sticky-order-price">From $10</span>
        <span className="sticky-order-unit">200g · made fresh</span>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => onOrder()}
        tabIndex={show ? 0 : -1}
      >
        <WhatsAppIcon size={16} /> Order Now
      </button>
    </div>
  );
}
