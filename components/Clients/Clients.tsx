import Image from "next/image";
import { useEffect, useRef } from "react";
import { animClientSection } from "./animClientSection";

export default function Clients() {
  const clients = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("load", () => animClientSection(ref));
    return () => window.removeEventListener("load", () => animClientSection(ref));
  }, [ref]);

  return (
    <div className="clients" ref={ref}>
      <div className="container">
        <div className="left">
          <div className="title">
            <p className="primary">Ils nous font confiance</p>
            <h1>Nos Clients</h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, laboriosam? Illo,
            deserunt quaerat expedita nemo omnis dignissimos. Labore error minus natus laboriosam,
            alias nesciunt.
          </p>
        </div>
        <div className="right">
          {clients.map((c) => (
            <div className="card" key={c}>
              <Image src="/client.png" alt="" height={900} width={900} layout="responsive" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
