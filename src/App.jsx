import { useCallback, useState } from "react";
import useReveal from "./hooks/useReveal";
import { ArchDefs } from "./components/BrandArch";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LaunchBanner from "./components/LaunchBanner";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
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
        <LaunchBanner onOrder={openOrder} />
        <About />
        <Products
          onOrder={openOrder}
          line="plain"
          id="products"
          tint
          eyebrow="What We Offer"
          title={
            <>
              Fresh paneer, <em>your way</em>
            </>
          }
          desc="Choose the size that suits your household. Everything is made fresh on delivery day — minimum order 200g."
        />
        <Products
          onOrder={openOrder}
          line="masala"
          id="masala-paneer"
          eyebrow="New · Pre-order only"
          title={
            <>
              Masala paneer, <em>ready to cook</em>
            </>
          }
          desc="Our fresh paneer pressed with chilli, herbs and spices — the flavour is already in the block."
          showNote
        />
        <Testimonials />
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
