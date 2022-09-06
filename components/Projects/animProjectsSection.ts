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
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
        },
      });
      tl.from(parent.querySelector(".title"), {
        opacity: 0.1,
      }).from(parent.querySelectorAll(".card"), {
        opacity: 0.1,
        stagger: 0.1,
      });
    },
  });
}
