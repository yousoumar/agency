import { useEffect, useRef } from "react";
import animProjectsSectionfrom from "./animProjectsSection";

/* eslint-disable @next/next/no-img-element */
export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("load", () => animProjectsSectionfrom(ref));
    return () => window.removeEventListener("load", () => animProjectsSectionfrom(ref));
  }, [ref]);

  return (
    <section className="projects" ref={ref}>
      <div className="title">
        <p className="primary">Une partie de tout ce qu’on a fait</p>
        <h1>Nos réalisations</h1>
      </div>

      <div className="cards">
        <div className="row">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1595234336271-178875797b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1622050756792-5b1180bbb873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
