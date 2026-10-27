export const WA_NUMBER = "6587700233";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// Flat delivery fee, islandwide. Waived for pickup orders.
export const DELIVERY_FEE = 3.99;

/* Everything a customer can order — one entry per size. `label` is logged
   verbatim to the order Sheet and appears in the WhatsApp message, so don't
   reword it. `price` is null for items priced over WhatsApp. */
export const products = [
  {
    id: 1,
    line: "plain",
    weight: "200g",
    label: "Fresh Paneer – 200g ($10.00)",
    price: 10,
    meta: "Minimum order",
  },
  {
    id: 2,
    line: "plain",
    weight: "400g",
    label: "Fresh Paneer – 400g ($19.00)",
    price: 19,
    meta: "Save $1",
  },
  {
    id: 3,
    line: "masala",
    weight: "200g",
    label: "Masala Paneer – 200g ($12.00)",
    price: 12,
  },
  {
    id: 4,
    line: "masala",
    weight: "400g",
    label: "Masala Paneer – 400g ($23.00)",
    price: 23,
    meta: "Save $1",
  },
  {
    id: 5,
    line: "bulk",
    weight: "Custom",
    label: "Bulk / Custom Order",
    price: null,
    meta: "Parties & events",
  },
];

/* The menu: one card per kind of paneer, listing its sizes. */
export const productLines = [
  {
    line: "plain",
    name: "Fresh Paneer",
    desc: "Silky, firm-pressed paneer made fresh from full-cream milk. Perfect for curries, stir-fries and paneer tikka.",
    tag: "Best Seller",
    highlight: true,
    img: "/img/paneer-200.jpg",
    alt: "Freshly pressed paneer cubes with coriander",
  },
  {
    line: "masala",
    name: "Masala Paneer",
    desc: "Our fresh paneer, pressed with chilli, herbs and spices. Raw and ready to cook — sear it, grill it or toss it into a curry.",
    tag: "New",
    highlight: true,
    // Usual notice needed to get the ingredients in. The order form shows
    // this as the earliest date; sooner dates go through as a request.
    leadDays: 2,
    note: "Order 2 days ahead",
    img: "/img/masala-paneer.jpg",
    alt: "Cubes of spiced masala paneer flecked with chilli and herbs",
  },
  {
    line: "bulk",
    name: "Bulk Order",
    desc: "Hosting a dinner party, festival or event? Tell us what you need and we'll work out custom quantities with you.",
    tag: "Custom",
    img: "/img/paneer-bulk.jpg",
    alt: "Close crop of paneer blocks on a wooden platter",
  },
];

export const formatPrice = (n) => `$${n.toFixed(2)}`;

/* The strip under the hero — the four things a first-time buyer wants
   to know before they'll consider ordering. */
export const trustPoints = [
  { icon: "milk", label: "Full-cream milk" },
  { icon: "shield", label: "Zero preservatives" },
  { icon: "clock", label: "Made the day it ships" },
  { icon: "truck", label: "Delivered islandwide" },
];

/* About-section values grid. */
export const values = [
  {
    icon: "milk",
    title: "Full-Cream Milk",
    desc: "A trusted Indian dairy brand — never powdered or reconstituted.",
  },
  {
    icon: "home",
    title: "Home Kitchen",
    desc: "Made in a clean home kitchen, not a factory line. Every block gets the same care.",
  },
  {
    icon: "calendar",
    title: "Pre-Order Only",
    desc: "We make exactly what's ordered. Nothing sits on a shelf, nothing is wasted.",
  },
  {
    icon: "leaf",
    title: "No Shortcuts",
    desc: "Made the traditional way, with nothing extra — no stabilisers, no preservatives.",
  },
];

export const stats = [
  { num: "100%", label: "Full-cream milk" },
  { num: "0", label: "Preservatives" },
  { num: "Same-day", label: "Made to order" },
  { num: "SG", label: "Home-made" },
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

/* Customer reviews, quoted verbatim. Add new entries at the top. */
export const testimonials = [
  {
    quote:
      "Hi. The paneer was great. Great product. Have shared the details with my friends.",
    author: "Verified customer",
  },
];

export const steps = [
  {
    num: "01",
    icon: "chat",
    title: "Send Your Order",
    desc: "Fill in the form and it opens WhatsApp with everything filled in. Order before 2pm for next-day delivery.",
  },
  {
    num: "02",
    icon: "card",
    title: "Confirm & Pay",
    desc: "We'll confirm your slot and send PayNow details. Payment upfront locks in your batch.",
  },
  {
    num: "03",
    icon: "truck",
    title: "Fresh to Your Door",
    desc: "We press your paneer on delivery morning and bring it to you the same day it's made.",
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
    a: "None at all — no preservatives, no stabilisers, nothing artificial. Just fresh full-cream milk, set and pressed the traditional way.",
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
    q: "How much notice does Masala Paneer need?",
    a: "Please order Masala Paneer at least 2 days ahead. We need the extra time to get the ingredients in for each batch. Need it sooner? Pick your date in the order form and we'll let you know on WhatsApp if we can make it. Fresh paneer follows the usual timing: order before 2pm for next-day delivery.",
  },
  {
    q: "How do I place an order?",
    a: "Fill in the order form on this site — it opens WhatsApp with your details pre-filled so we can confirm availability and payment quickly.",
  },
  {
    q: "Can I pick up instead of getting it delivered?",
    a: 'Yes! Choose "Pickup" in the order form and we\'ll confirm a time slot with you over WhatsApp. No delivery fee for pickup orders.',
  },
];
