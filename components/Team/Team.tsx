/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import animTeamSection from "./animTeamSection";

export default function Team() {
  const ref = useRef(null);

  useEffect(() => {
    if (document.readyState) {
      animTeamSection(ref);
      return;
    }

    window.addEventListener("load", () => animTeamSection(ref));
    return () => window.removeEventListener("load", () => animTeamSection(ref));
  }, [ref]);

  return (
    <section className="team" ref={ref}>
      <div className="title">
        <p className="primary">On se dit tu, on se tout ?</p>
        <h1>Notre Equipe</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/doe.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">François Doe</div>
              <div className="post">Chef de projet</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/alex.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">Jhon Doe</div>
              <div className="post">Web Designer</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/anne.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">Abakar Doe</div>
              <div className="post">Lead dévelopeur</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/abakar.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">Arjun Doe</div>
              <div className="post">Développeur Web</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/estelle.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">Alex Doe</div>
              <div className="post">Cheffe de projet</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="img">
              <img src="/youssouf.svg" alt="" />
            </div>
            <div className="text">
              <div className="name primary">Nicolas Doe</div>
              <div className="post">Développeur Web</div>
            </div>
          </div>
          <div className="link row">
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
            <a href="">
              <img src="/email.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
