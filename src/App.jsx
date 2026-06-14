import { useRef, useState, useLayoutEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function useDemoMidpointSplit(landingRef, demoEl) {
  useLayoutEffect(() => {
    const landing = landingRef.current;
    if (!landing || !demoEl) return;

    const update = () => {
      const landingTop = landing.getBoundingClientRect().top + window.scrollY;
      const demoRect = demoEl.getBoundingClientRect();
      const demoDocumentTop = demoRect.top + window.scrollY;
      const splitY = demoDocumentTop - landingTop + demoRect.height / 2;
      landing.style.setProperty("--bg-split", `${splitY}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(demoEl);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [landingRef, demoEl]);
}

export default function App() {
  const landingRef = useRef(null);
  const [demoEl, setDemoEl] = useState(null);
  const demoRef = useCallback((node) => setDemoEl(node), []);

  useDemoMidpointSplit(landingRef, demoEl);

  return (
    <>
      <Navbar />
      <main>
        <div ref={landingRef} className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 bg-primary-fixed"
            style={{ top: "var(--bg-split, 100%)" }}
          />
          <Hero />
          <FeaturedProjects demoRef={demoRef} />
        </div>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
