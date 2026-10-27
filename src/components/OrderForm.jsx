import { useEffect, useState } from "react";
import {
  DELIVERY_FEE,
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_ENTRY_IDS,
  WA_BASE,
  formatPrice,
  pickup,
  productLines,
  products,
} from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Icon from "./icons/Icon";

const MAX_QTY = 99;

let nextKey = 1;
const newItem = (product = "") => ({ key: nextKey++, product, qty: "1" });

const EMPTY_FORM = {
  name: "",
  phone: "",
  fulfillment: "Delivery",
  date: "",
  address: "",
  notes: "",
};

const findProduct = (label) => products.find((p) => p.label === label);

// "Fresh Paneer 400g" — shorter than the label, for the on-screen summary.
function shortName(p) {
  if (p.price === null) return "Bulk / custom order";
  const line = productLines.find((l) => l.line === p.line);
  return `${line?.name ?? p.label} ${p.weight}`;
}

// Orders in before 2pm can usually go out tomorrow; after that, the day after.
const CUTOFF_HOUR = 14;

/* Usual days of notice for a product: its own lead time if one is set
   (`leadDays` on a product line in content.js), otherwise the 2pm cutoff.
   Bulk timing is agreed on WhatsApp. Customers can still ask for an
   earlier date. It's sent as a request. */
function noticeDaysOf(p) {
  if (p.price === null) return 0;
  const own = productLines.find((l) => l.line === p.line)?.leadDays;
  if (own) return own;
  return new Date().getHours() < CUTOFF_HOUR ? 1 : 2;
}

// Today + n days, as both the date input's value format and a friendly label.
function daysFromToday(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  const pad = (x) => String(x).padStart(2, "0");
  return {
    value: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
    label: d.toLocaleDateString("en-SG", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }),
  };
}

function qtyOf(item) {
  const n = parseInt(item.qty, 10);
  return Number.isNaN(n) ? 1 : Math.min(Math.max(n, 1), MAX_QTY);
}

/* Turns the chosen items into priced lines plus totals. Items priced over
   WhatsApp (bulk) are listed but left out of the total. */
function priceOrder(items, isDelivery) {
  const lines = items
    .map((item) => ({ item, product: findProduct(item.product) }))
    .filter((l) => l.product)
    .map(({ item, product }) => {
      const qty = qtyOf(item);
      return {
        product,
        qty,
        subtotal: product.price === null ? null : product.price * qty,
      };
    });
  const itemsTotal = lines.reduce((sum, l) => sum + (l.subtotal ?? 0), 0);
  const hasPriced = lines.some((l) => l.subtotal !== null);
  const hasUnpriced = lines.some((l) => l.subtotal === null);
  const fee = isDelivery ? DELIVERY_FEE : 0;
  return {
    lines,
    fee,
    hasPriced,
    hasUnpriced,
    total: hasPriced ? itemsTotal + fee : null,
  };
}

function buildMessage(form, order, isEarly) {
  const isDelivery = form.fulfillment === "Delivery";
  const lines = [
    "Hi! I'd like to place an order on The Paneer Pantry website:",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    "",
    "Order:",
    ...order.lines.map((l) =>
      l.subtotal === null
        ? `• ${l.product.label} (details in notes)`
        : `• ${l.product.label} × ${l.qty} = ${formatPrice(l.subtotal)}`
    ),
    "",
    `Fulfillment: ${form.fulfillment}`,
    `Needed by: ${form.date || "Not specified"}${
      isEarly ? " (earlier than usual, a request: please confirm if possible)" : ""
    }`,
  ];
  if (isDelivery) {
    lines.push(`Delivery address: ${form.address}`);
    lines.push(`Delivery fee: ${formatPrice(DELIVERY_FEE)} (islandwide)`);
  } else {
    lines.push(`Pickup at: ${pickup.address}`);
  }
  if (order.total !== null) {
    lines.push(
      `Total: ${formatPrice(order.total)}${
        order.hasUnpriced ? " + bulk order (to confirm)" : ""
      }`
    );
  }
  if (form.notes) lines.push(`Notes: ${form.notes}`);
  lines.push("", "Please confirm availability and payment details.");
  return lines.join("\n");
}

/* One Sheet row per product, so the Product and Quantity columns stay one
   value each. Rows from the same order are tagged "[Item 1 of 2]" in Notes,
   and dates sooner than usual are tagged "[Early date request]". */
function logToSheet(form, order, isEarly) {
  if (!GOOGLE_FORM_ACTION_URL) return;
  const count = order.lines.length;
  order.lines.forEach((l, i) => {
    const tag = [
      count > 1 ? `[Item ${i + 1} of ${count}]` : "",
      isEarly ? "[Early date request]" : "",
    ]
      .filter(Boolean)
      .join(" ");
    const body = new URLSearchParams({
      [GOOGLE_FORM_ENTRY_IDS.name]: form.name,
      [GOOGLE_FORM_ENTRY_IDS.phone]: form.phone,
      [GOOGLE_FORM_ENTRY_IDS.product]: l.product.label,
      [GOOGLE_FORM_ENTRY_IDS.quantity]:
        l.subtotal === null ? "Custom" : String(l.qty),
      [GOOGLE_FORM_ENTRY_IDS.fulfillment]: form.fulfillment,
      [GOOGLE_FORM_ENTRY_IDS.date]: form.date,
      [GOOGLE_FORM_ENTRY_IDS.address]:
        form.fulfillment === "Delivery" ? form.address : pickup.address,
      [GOOGLE_FORM_ENTRY_IDS.notes]: [tag, form.notes].filter(Boolean).join(" "),
    });
    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }).catch(() => {});
  });
}

export default function OrderForm({ isOpen, initialProduct, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [items, setItems] = useState(() => [newItem()]);

  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM);
      setItems([newItem(initialProduct || "")]);
    }
  }, [isOpen, initialProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const updateItem = (key, patch) =>
    setItems((list) =>
      list.map((it) => (it.key === key ? { ...it, ...patch } : it))
    );
  const stepQty = (item, delta) =>
    updateItem(item.key, {
      qty: String(Math.min(Math.max(qtyOf(item) + delta, 1), MAX_QTY)),
    });
  const removeItem = (key) =>
    setItems((list) => list.filter((it) => it.key !== key));
  const addItem = () => setItems((list) => [...list, newItem()]);

  const isDelivery = form.fulfillment === "Delivery";
  const order = priceOrder(items, isDelivery);
  const chosen = items.map((it) => it.product).filter(Boolean);
  const canAddMore = chosen.length === items.length && chosen.length < products.length;

  // The product needing the most notice sets the usual earliest date.
  let noticeDays = 0;
  let slowest = null;
  order.lines.forEach((l) => {
    const d = noticeDaysOf(l.product);
    if (d > noticeDays) {
      noticeDays = d;
      slowest = l.product;
    }
  });
  const earliest = noticeDays > 0 ? daysFromToday(noticeDays) : null;
  // Set only when a product with its own lead time is the reason.
  const slowLine = productLines.find(
    (l) => l.line === slowest?.line && l.leadDays
  );
  const isEarly = Boolean(earliest && form.date && form.date < earliest.value);
  const chosenLabel = form.date
    ? new Date(`${form.date}T00:00`).toLocaleDateString("en-SG", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!order.lines.length) return;
    const message = buildMessage(form, order, isEarly);
    window.open(
      `${WA_BASE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    logToSheet(form, order, isEarly);
    onClose();
  };

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div
        className="order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="order-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <Icon name="close" size={18} strokeWidth={1.8} />
        </button>

        <h2 className="order-modal-title" id="order-modal-title">
          Place your order
        </h2>
        <p className="order-modal-subtitle">
          We'll open WhatsApp with your details filled in — just hit send to
          confirm with us.
        </p>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="order-form-row">
            <label>
              Name
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={update("phone")}
              />
            </label>
          </div>

          <fieldset className="order-items">
            <legend className="fulfillment-label">Your order</legend>

            {items.map((item, i) => {
              const product = findProduct(item.product);
              const isCustom = product?.price === null;
              return (
                <div className="order-item" key={item.key}>
                  <select
                    required
                    aria-label={`Product ${i + 1}`}
                    value={item.product}
                    onChange={(e) =>
                      updateItem(item.key, { product: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    {products.map((p) => (
                      <option
                        key={p.id}
                        value={p.label}
                        disabled={p.label !== item.product && chosen.includes(p.label)}
                      >
                        {p.label}
                      </option>
                    ))}
                  </select>

                  {isCustom ? (
                    <span className="order-item-hint">Add details in notes</span>
                  ) : (
                    <div className="qty-stepper">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => stepQty(item, -1)}
                        disabled={qtyOf(item) <= 1}
                      >
                        <Icon name="minus" size={15} strokeWidth={2.2} />
                      </button>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={MAX_QTY}
                        required
                        aria-label={`Quantity of product ${i + 1}`}
                        value={item.qty}
                        onChange={(e) =>
                          updateItem(item.key, { qty: e.target.value })
                        }
                        onBlur={() =>
                          updateItem(item.key, { qty: String(qtyOf(item)) })
                        }
                      />
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => stepQty(item, 1)}
                        disabled={qtyOf(item) >= MAX_QTY}
                      >
                        <Icon name="plus" size={15} strokeWidth={2.2} />
                      </button>
                    </div>
                  )}

                  {items.length > 1 && (
                    <button
                      type="button"
                      className="order-item-remove"
                      aria-label={`Remove product ${i + 1}`}
                      onClick={() => removeItem(item.key)}
                    >
                      <Icon name="close" size={15} strokeWidth={2} />
                    </button>
                  )}
                </div>
              );
            })}

            {canAddMore && (
              <button type="button" className="order-add" onClick={addItem}>
                <Icon name="plus" size={15} strokeWidth={2.2} />
                Add another product
              </button>
            )}
          </fieldset>

          <label>
            Needed by
            <input
              type="date"
              required={form.fulfillment === "Pickup"}
              min={daysFromToday(0).value}
              aria-describedby={earliest ? "lead-time-hint" : undefined}
              value={form.date}
              onChange={update("date")}
            />
          </label>

          {earliest && (
            <p
              className={`lead-note${isEarly ? " is-early" : ""}`}
              id="lead-time-hint"
              aria-live="polite"
            >
              <Icon name="calendar" size={17} />
              {isEarly ? (
                <span>
                  <strong>{chosenLabel}</strong> is sooner than we usually
                  manage. We&apos;ll treat it as a request and confirm on
                  WhatsApp whether we can make it.
                </span>
              ) : (
                <span>
                  {slowLine &&
                    `${slowLine.name} needs ${slowLine.leadDays} days' notice, so the `}
                  {slowLine ? "usual" : "Usual"} earliest date is{" "}
                  <strong>{earliest.label}</strong>. Need it sooner? Pick your
                  date and we&apos;ll try.
                </span>
              )}
            </p>
          )}

          <div className="fulfillment-toggle">
            <span className="fulfillment-label">Fulfillment</span>
            <div className="fulfillment-options">
              {["Delivery", "Pickup"].map((opt) => (
                <label
                  key={opt}
                  className={`fulfillment-pill${
                    form.fulfillment === opt ? " active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="fulfillment"
                    value={opt}
                    checked={form.fulfillment === opt}
                    onChange={update("fulfillment")}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {isDelivery ? (
            <label>
              Delivery address
              <input
                type="text"
                required
                autoComplete="street-address"
                value={form.address}
                onChange={update("address")}
              />
            </label>
          ) : (
            <p className="pickup-note">
              <Icon name="pin" size={17} />
              <span>
                Pickup at <strong>{pickup.address}</strong>
                <br />
                We&apos;ll confirm your collection time over WhatsApp.
              </span>
            </p>
          )}

          {order.lines.length > 0 && (
            <div className="order-summary" aria-live="polite">
              {order.lines.map((l) => (
                <div className="order-summary-row" key={l.product.id}>
                  <span>
                    {shortName(l.product)}
                    {l.subtotal !== null && ` × ${l.qty}`}
                  </span>
                  <span>
                    {l.subtotal === null ? "On WhatsApp" : formatPrice(l.subtotal)}
                  </span>
                </div>
              ))}
              {isDelivery && (
                <div className="order-summary-row">
                  <span>Delivery fee (islandwide)</span>
                  <span>{formatPrice(DELIVERY_FEE)}</span>
                </div>
              )}
              {order.total !== null && (
                <div className="order-summary-row order-summary-total">
                  <span>{order.hasUnpriced ? "Total (excl. bulk)" : "Total"}</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              )}
              {order.hasUnpriced && (
                <p className="order-summary-hint">
                  We&apos;ll price your bulk order with you over WhatsApp.
                </p>
              )}
            </div>
          )}

          <label>
            Notes (optional)
            <textarea
              rows={2}
              value={form.notes}
              onChange={update("notes")}
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary btn-block order-form-submit"
          >
            <WhatsAppIcon size={17} /> Continue on WhatsApp
          </button>

          <p className="order-modal-fineprint">
            Nothing is charged here — this opens WhatsApp so we can confirm
            availability and send PayNow details.
          </p>
        </form>
      </div>
    </div>
  );
}
