import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function animTeamSection(ref: RefObject<HTMLElement>) {
  let parent = ref.current!;
  ScrollTrigger.saveStyles(".team .card");
  ScrollTrigger.matchMedia({
    "(min-width : 900px)": function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });
      tl.from(parent.querySelector(".title"), {
        opacity: 0.1,
      }).from(parent.querySelectorAll(".card"), {
        opacity: 0.1,
        stagger: 0.2,
      });
    },
  });
}
