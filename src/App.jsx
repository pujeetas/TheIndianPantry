import { useState } from "react";
import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowToOrder from "./components/HowToOrder";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import OrderForm from "./components/OrderForm";

export default function App() {
  useReveal();
  const [orderModal, setOrderModal] = useState({ open: false, product: "" });

  const openOrder = (product = "") => setOrderModal({ open: true, product });
  const closeOrder = () => setOrderModal({ open: false, product: "" });

  return (
    <>
      <Nav />
      <Hero onOrder={openOrder} />
      <About />
      <Products onOrder={openOrder} />
      <HowToOrder onOrder={openOrder} />
      <FAQ />
      <Footer />
      <OrderForm
        isOpen={orderModal.open}
        initialProduct={orderModal.product}
        onClose={closeOrder}
      />
    </>
  );
}
