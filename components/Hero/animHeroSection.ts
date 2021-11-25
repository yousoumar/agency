import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export function animHeroSectionOnLoad(ref: RefObject<HTMLElement>) {
  const parent = ref.current!;
  let tl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  });

  tl.to(".loader p", {
    autoAlpha: 0,
  })
    .to(".loader ", {
      autoAlpha: 0,
    })
    .from(
      parent.querySelector(".content.first h1"),
      {
        autoAlpha: 0,
        clipPath: "polygon(100% 100%, 0 100%, 100% 100%, 100% 0)",
      },
      "<"
    )
    .from(
      parent.querySelectorAll(".content.first  p"),
      {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
      },
      "-=.3"
    )

    .from(
      parent.querySelector(".content.first a"),
      {
        autoAlpha: 0,
      },
      "-=.3"
    )

    .from(
      document.querySelector("header"),
      {
        autoAlpha: 0,
        y: -50,
      },
      "-=.6"
    );
}
