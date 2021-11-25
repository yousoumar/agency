import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export const animAgencySection = (ref: RefObject<HTMLElement>) => {
  let parent = ref.current!;

  ScrollTrigger.matchMedia({
    "(min-width: 900px)": function () {
      let tl = gsap.timeline({
        defaults: {
          duration: 1,
        },
        scrollTrigger: {
          trigger: parent,
          start: "top 70%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(parent, {
        autoAlpha: 0.3,
      }).from(
        parent.querySelectorAll("img"),
        {
          autoAlpha: 0.3,
          stagger: 0.1,
        },
        "-=0.5"
      );
    },
  });
};
