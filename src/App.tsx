import { Routes, Route } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Strategy from "./pages/Strategy";
import Contact from "./pages/Contact";
import ScrollToTop from "./lib/ScrollToTop";

export default function App() {
  useLenis();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--dark)" }}>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
