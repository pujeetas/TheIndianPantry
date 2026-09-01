import { useCallback, useState } from "react";
import useReveal from "./hooks/useReveal";
import { ArchDefs } from "./components/BrandArch";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowToOrder from "./components/HowToOrder";
import FAQ from "./components/FAQ";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import OrderForm from "./components/OrderForm";
import StickyOrder from "./components/StickyOrder";

export default function App() {
  useReveal();
  const [orderModal, setOrderModal] = useState({ open: false, product: "" });

  const openOrder = useCallback(
    (product = "") => setOrderModal({ open: true, product }),
    [],
  );
  const closeOrder = useCallback(
    () => setOrderModal({ open: false, product: "" }),
    [],
  );

  return (
    <>
      <ArchDefs />
      <Nav onOrder={openOrder} />
      <main>
        <Hero onOrder={openOrder} />
        <About />
        <Products onOrder={openOrder} />
        <HowToOrder />
        <FAQ />
        <CtaBand onOrder={openOrder} />
      </main>
      <Footer />
      <StickyOrder onOrder={openOrder} />
      <OrderForm
        isOpen={orderModal.open}
        initialProduct={orderModal.product}
        onClose={closeOrder}
      />
    </>
  );
}
