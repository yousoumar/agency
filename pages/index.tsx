import Head from "next/head";

import Agency from "../components/Agency/Agency";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agency | The leading digitale agency</title>
        <meta name="theme-color" content="#2debdb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader />
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Team />
      <Agency />
      <Projects />
      <Footer />
    </>
  );
}
