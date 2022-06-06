import React, { useEffect } from "react";
import About from "../components/Id/About";
import Contact from "../components/Id/Contact";
import Download from "../components/Id/Download";
import Footer from "../components/Id/Footer";
import HeaderId from "../components/Id/HeaderId";
import Info from "../components/Id/Info";
import Main from "../components/Id/Main";

export default function HomeId() {
  useEffect(() => {
    localStorage.setItem("lang", "id");
  }, []);
  return (
    <>
      <HeaderId />
      <Main />
      <About />
      <Info />
      <Download />
      <Contact />
      <Footer />
    </>
  );
}
