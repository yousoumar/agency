import { useEffect, useRef } from "react";
import { animHeroSectionOnLoad } from "./animHeroSection";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (document.readyState) {
      animHeroSectionOnLoad(ref);
      return;
    }
    window.addEventListener("load", () => animHeroSectionOnLoad(ref));
    return () => window.removeEventListener("load", () => animHeroSectionOnLoad(ref));
  }, [ref]);

  return (
    <section className="hero" ref={ref}>
      <div className="content first">
        <p className="primary">Et on adore ça</p>
        <h1>
          <strong>Nous refaçonnons le digital</strong> depuis plus d’une décenie
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur voluptatem inventore,
          saepe assumenda deleniti sint.
        </p>
        <a href="tel:+33 1 00 00 00 00" className="call-to-action">
          +33 1 00 00 00 00
        </a>
      </div>
    </section>
  );
}
