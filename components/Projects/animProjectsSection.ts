import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function animProjectsSection(ref: RefObject<HTMLElement>) {
  let parent = ref.current!;
  ScrollTrigger.saveStyles(".projects .card");
  ScrollTrigger.matchMedia({
    "(min-width : 900px)": function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.from(parent.querySelectorAll(".card, .title"), {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
    },
  });
}
