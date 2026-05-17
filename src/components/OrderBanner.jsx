import { WA_NUMBER } from "../data/content";

export default function OrderBanner() {
  return (
    <div className="order-banner">
      <p>
        🕑 Order before <span>2pm</span> → delivered tomorrow &nbsp;·&nbsp;
        Order after <span>2pm</span> → delivered in 2 days &nbsp;·&nbsp;
        WhatsApp: <span>+65 {WA_NUMBER.slice(2)}</span>
      </p>
    </div>
  );
}
