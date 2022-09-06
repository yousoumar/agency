import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export const animClientSection = (ref: RefObject<HTMLElement>) => {
  let parent = ref.current!;
  let clients = parent.querySelectorAll(".card");
  ScrollTrigger.matchMedia({
    "(min-width: 900px)": function () {
      let tl = gsap.timeline({
        defaults: {
          duration: 1,
        },
        scrollTrigger: {
          trigger: parent,
          start: "top 70%",
          end: "bottom+=100 70%",
          scrub: true,
        },
      });

      clients.forEach((c) => {
        tl.from(c, {
          autoAlpha: 0.1,
        });
      });
    },
  });
};
