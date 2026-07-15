import { useEffect, useState } from "react";
import {
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_ENTRY_IDS,
  WA_BASE,
  pickup,
  products,
} from "../data/content";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const EMPTY_FORM = {
  name: "",
  phone: "",
  product: "",
  quantity: "1",
  fulfillment: "Delivery",
  date: "",
  address: "",
  notes: "",
};

function buildMessage(form) {
  const lines = [
    "Hi! I'd like to place an order on The Paneer Pantry website:",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Product: ${form.product}`,
    `Quantity: ${form.quantity}`,
    `Fulfillment: ${form.fulfillment}`,
    `Needed by: ${form.date || "Not specified"}`,
  ];
  if (form.fulfillment === "Delivery") {
    lines.push(`Delivery address: ${form.address}`);
  } else {
    lines.push(`Pickup at: ${pickup.address}`);
  }
  if (form.notes) lines.push(`Notes: ${form.notes}`);
  lines.push("", "Please confirm availability and payment details.");
  return lines.join("\n");
}

function logToSheet(form) {
  if (!GOOGLE_FORM_ACTION_URL) return;
  const body = new URLSearchParams({
    [GOOGLE_FORM_ENTRY_IDS.name]: form.name,
    [GOOGLE_FORM_ENTRY_IDS.phone]: form.phone,
    [GOOGLE_FORM_ENTRY_IDS.product]: form.product,
    [GOOGLE_FORM_ENTRY_IDS.quantity]: form.quantity,
    [GOOGLE_FORM_ENTRY_IDS.fulfillment]: form.fulfillment,
    [GOOGLE_FORM_ENTRY_IDS.date]: form.date,
    [GOOGLE_FORM_ENTRY_IDS.address]:
      form.fulfillment === "Delivery" ? form.address : pickup.address,
    [GOOGLE_FORM_ENTRY_IDS.notes]: form.notes,
  });
  fetch(GOOGLE_FORM_ACTION_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  }).catch(() => {});
}

export default function OrderForm({ isOpen, initialProduct, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (isOpen) {
      setForm({ ...EMPTY_FORM, product: initialProduct || "" });
    }
  }, [isOpen, initialProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildMessage(form);
    window.open(
      `${WA_BASE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    logToSheet(form);
    onClose();
  };

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="order-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="order-modal-title">Place Your Order</h3>
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
                value={form.name}
                onChange={update("name")}
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                required
                value={form.phone}
                onChange={update("phone")}
              />
            </label>
          </div>

          <label>
            Product
            <select
              required
              value={form.product}
              onChange={update("product")}
            >
              <option value="" disabled>
                Select a product
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>

          <div className="order-form-row">
            <label>
              Quantity
              <input
                type="text"
                required
                value={form.quantity}
                onChange={update("quantity")}
              />
            </label>
            <label>
              Needed by
              <input
                type="date"
                required={form.fulfillment === "Pickup"}
                value={form.date}
                onChange={update("date")}
              />
            </label>
          </div>

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

          {form.fulfillment === "Delivery" ? (
            <label>
              Delivery address
              <input
                type="text"
                required
                value={form.address}
                onChange={update("address")}
              />
            </label>
          ) : (
            <p className="pickup-note">
              📍 Pickup at <strong>{pickup.address}</strong>
              <br />
              🕑 We'll confirm your pickup time over WhatsApp.
            </p>
          )}

          <label>
            Notes (optional)
            <textarea
              rows={2}
              value={form.notes}
              onChange={update("notes")}
            />
          </label>

          <button type="submit" className="btn-order order-form-submit">
            <WhatsAppIcon size={16} /> Continue on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
