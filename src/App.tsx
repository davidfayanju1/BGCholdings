import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { EASE_OUT, EASE_IN } from "./lib/easing";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Strategy from "./pages/Strategy";
import Contact from "./pages/Contact";
import ScrollToTop from "./lib/ScrollToTop";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.35, ease: EASE_IN } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  useLenis();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--dark)" }}>
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}
