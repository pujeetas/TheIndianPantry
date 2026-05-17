import "./styles/global.css";
import "./styles/nav.css";
import "./styles/hero.css";
import "./styles/components.css";

import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import OrderBanner from "./components/OrderBanner";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowToOrder from "./components/HowToOrder";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <OrderBanner />
      <Hero />
      <About />
      <Products />
      <HowToOrder />
      <FAQ />
      <Footer />
    </>
  );
}
