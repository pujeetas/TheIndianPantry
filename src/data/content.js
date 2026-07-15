export const WA_NUMBER = "6587700233";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const products = [
  {
    id: 1,
    name: "Fresh Paneer",
    weight: "200g",
    label: "Fresh Paneer – 200g ($10.00)",
    desc: "Silky, firm-pressed homemade paneer made fresh from full-cream milk. Perfect for curries, stir-fries, and paneer tikka. Minimum order.",
    price: "$10.00",
    tag: "Best Seller",
    emoji: "🧀",
    bg: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
  },
  {
    id: 2,
    name: "Fresh Paneer",
    weight: "400g",
    label: "Fresh Paneer – 400g ($19.00)",
    desc: "Great value for larger households or weekly meal prep. Same fresh milk quality — more to cook with, more to love.",
    price: "$19.00",
    tag: "Value Pack",
    emoji: "🧀",
    bg: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
  {
    id: 3,
    name: "Bulk Order",
    weight: "Custom",
    label: "Bulk / Custom Order",
    desc: "Hosting a dinner party, festival, or event? Reach out for custom quantities and we'll work out the best arrangement for you.",
    price: "Let's chat",
    tag: "Custom",
    emoji: "🛒",
    bg: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
  },
];

// Pickup address shown on-site and referenced in order confirmations.
// Pickup timing is confirmed manually over WhatsApp, not shown on-site.
export const pickup = {
  address: "290A Street 24, Bukit Batok, Singapore 652290",
};

// Auto-logs every order to the "Paneer Pantry" Google Form's linked Sheet.
// NOTE: the "Date Needed" question must be type "Short answer" (not "Date") —
// Date-type questions split into year/month/day sub-fields and won't accept
// the plain date string the site sends.
export const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdMkEWM_RXbB6qaXVhS2y9f-tjvBEYM1kfphdjNCxxNzBTp2Q/formResponse";
export const GOOGLE_FORM_ENTRY_IDS = {
  name: "entry.1430103135",
  phone: "entry.279936600",
  product: "entry.1436203403",
  quantity: "entry.2027580849",
  fulfillment: "entry.153873980",
  date: "entry.753504",
  address: "entry.1560533275",
  notes: "entry.884601771",
};

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
    a: "We use full-cream milk — a trusted Indian dairy brand known for rich, consistent quality. No powdered milk, no shortcuts.",
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
    a: "Fill in the order form on this site — it opens WhatsApp with your details pre-filled so we can confirm availability and payment quickly.",
  },
  {
    q: "Can I pick up instead of getting it delivered?",
    a: "Yes! Choose \"Pickup\" in the order form and we'll confirm a time slot with you over WhatsApp. No delivery fee for pickup orders.",
  },
];
