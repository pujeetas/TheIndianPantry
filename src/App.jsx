import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowToOrder from "./components/HowToOrder";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Products />
      <HowToOrder />
      <FAQ />
      <Footer />
    </>
  );
}
