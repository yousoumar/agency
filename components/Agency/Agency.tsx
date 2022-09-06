import Image from "next/image";
import { useEffect, useRef } from "react";
import { animAgencySection } from "./animAgencySection";

export default function Agency() {
  const ref = useRef(null);

  useEffect(() => {
    if (document.readyState) {
      animAgencySection(ref);
      return;
    }
    window.addEventListener("load", () => animAgencySection(ref));
    return () => window.removeEventListener("load", () => animAgencySection(ref));
  }, [ref]);

  return (
    <section className="agency" ref={ref}>
      <div className="text">
        <div className="title">
          <p className="primary">En pleine nature dans le parc saint christophe</p>
          <h1>Notre agence</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit urna pretium, vestibulum
          elit suspendisse risus aliquam. Purus, eget scelerisque felis etiam facilisis. Arcu id id
          morbi nec, vitae suspendisse. Ultrices tristique commodo varius habitasse interdum feugiat
          mattis.
        </p>
      </div>
      <div className="imgs">
        <div className="img">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
        <div className="img">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
        <div className="img">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
