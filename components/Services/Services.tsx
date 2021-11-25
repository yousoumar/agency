import Image from "next/image";
import { useEffect, useRef } from "react";
import animServicesSection from "./animServicesSection";

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("load", () => animServicesSection(servicesRef));
    return () => window.removeEventListener("load", () => animServicesSection(servicesRef));
  }, [servicesRef]);

  return (
    <section className="services" ref={servicesRef}>
      <div className="title">
        <p className="primary">Ce que nous proposons</p>
        <h1>Nos Services</h1>
      </div>

      <div className="cards">
        <div className="row first-row">
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>UX & UI</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Infographie</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Motion design</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
        </div>
        <div className="row with-two-card second-row">
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Développement Web</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Développement Mobile</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
        </div>
        <div className="row with-two-card third-row">
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Hebergement</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
          <div className="card">
            <div className="img">
              <Image src="/uxui.svg" height={84} layout="responsive" width={71} alt="" />
            </div>
            <h2>Mainténance</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the stard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
