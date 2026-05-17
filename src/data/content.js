export const WA_NUMBER = "6565XXXXXX";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const products = [
  {
    id: 1,
    name: "Fresh Paneer",
    weight: "200g",
    desc: "Silky, firm-pressed homemade paneer made fresh from Amul full-cream milk. Perfect for curries, stir-fries, and paneer tikka. Minimum order.",
    price: "$10.00",
    tag: "Best Seller",
    emoji: "🧀",
    bg: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
    waText:
      "Hi! I'd like to pre-order 200g Fresh Paneer @ $10. Please confirm availability and share payment details.",
  },
  {
    id: 2,
    name: "Fresh Paneer",
    weight: "400g",
    desc: "Great value for larger households or weekly meal prep. Same fresh Amul milk quality — more to cook with, more to love.",
    price: "$19.00",
    tag: "Value Pack",
    emoji: "🧀",
    bg: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    waText:
      "Hi! I'd like to pre-order 400g Fresh Paneer @ $19. Please confirm availability and share payment details.",
  },
  {
    id: 3,
    name: "Bulk Order",
    weight: "Custom",
    desc: "Hosting a dinner party, festival, or event? Reach out for custom quantities and we'll work out the best arrangement for you.",
    price: "Let's chat",
    tag: "Custom",
    emoji: "🛒",
    bg: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
    waText:
      "Hi! I'm interested in a bulk/custom paneer order. Can we discuss quantities and pricing?",
  },
];

export const steps = [
  {
    num: "01",
    emoji: "💬",
    title: "Message Us",
    desc: "Send us a WhatsApp message with your quantity. Orders before 2pm are delivered next day.",
  },
  {
    num: "02",
    emoji: "✅",
    title: "Confirm & Pay",
    desc: "We'll confirm your slot and send PayNow details. Payment upfront to confirm your order.",
  },
  {
    num: "03",
    emoji: "🧀",
    title: "Fresh to Your Door",
    desc: "We make your paneer fresh on delivery day and bring it straight to you — same-day made.",
  },
];

export const faqs = [
  {
    q: "How fresh is the paneer?",
    a: "Very fresh — it's made on the same day it's delivered. We don't pre-make and store. Your order triggers the batch.",
  },
  {
    q: "How long does it last after delivery?",
    a: "Keep it refrigerated and consume within 3–4 days. For best texture, use within 2 days. You can also freeze it for up to a month.",
  },
  {
    q: "What milk do you use?",
    a: "We use Amul full-cream milk — a trusted Indian dairy brand known for rich, consistent quality. No powdered milk, no shortcuts.",
  },
  {
    q: "Does it contain any preservatives or additives?",
    a: "None at all. Just full-cream milk and a natural acid (lemon juice or citric acid) to curdle the milk. That's it.",
  },
  {
    q: "What allergens are present?",
    a: "Paneer is a dairy product and contains milk protein (casein) and lactose. It is not suitable for those with dairy allergies or lactose intolerance.",
  },
  {
    q: "How do I store it?",
    a: "Keep it in the refrigerator, submerged in clean water in an airtight container. Change the water daily to keep it fresh and moist.",
  },
  {
    q: "What is the minimum order?",
    a: "The minimum order is 200g at $10. We deliver personally so we ask for at least one block per delivery.",
  },
  {
    q: "How do I place an order?",
    a: "Simply WhatsApp us your desired quantity and preferred delivery date. Orders placed before 2pm are delivered the next day. Orders after 2pm are delivered the day after.",
  },
];
