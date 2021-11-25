import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function animServicesSection(ref: RefObject<HTMLElement>) {
  let parent = ref.current!;
  ScrollTrigger.saveStyles(".services .card, .services .line");
  ScrollTrigger.matchMedia({
    "(min-width : 900px)": function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      });
      tl.from(parent, {
        clipPath: "polygon(100% 100%, 0px 100%, 21.0793% 21.0793%, 100% 0px)",
      }).from(parent.querySelectorAll(".card"), {
        opacity: 0.1,
        stagger: 0.2,
      });
    },
  });
}
