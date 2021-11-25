/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        headerRef.current!.classList.add("scrolled");
      } else {
        headerRef.current!.classList.remove("scrolled");
      }
    });
    showNav
      ? headerRef.current!.classList.add("clicked")
      : headerRef.current!.classList.remove("clicked");
  }, [showNav]);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <nav onClick={() => setShowNav(true)}>
          <div className="left">
            <div>
              <a href="">Accueil</a>
            </div>
            <div>
              <a href="">L&apos;agence</a>
            </div>
            <div>
              <a href="">L&apos;équipe</a>
            </div>
          </div>
          <a href="" className="brand">
            <img src="/logo.svg" alt="" />
          </a>
          <div className="right">
            <div>
              <a href="">Services</a>
            </div>

            <div>
              <a href="">Réalisations</a>
            </div>

            <div>
              <a href="">Contact</a>
            </div>
          </div>
        </nav>
        <a href="" className="brand">
          <img src="/logo.svg" alt="" />
        </a>
        <button className="hamburger" onClick={toggleNav}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </button>
      </div>
    </header>
  );
}
