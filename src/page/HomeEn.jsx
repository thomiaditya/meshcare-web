import React, { useEffect } from "react";
import AboutEn from "../components/En/AboutEn";
import ContactEn from "../components/En/ContactEn";
import DownloadEn from "../components/En/DownloadEn";
import FooterEn from "../components/En/Footer";
import HeaderEn from "../components/En/HeaderEn";
import InfoEn from "../components/En/InfoEn";
import MainEn from "../components/En/MainEn";

export default function HomeId() {
  useEffect(() => {
    localStorage.setItem("lang", "en");
  }, []);

  return (
    <>
      <HeaderEn />
      <MainEn />
      <AboutEn />
      <InfoEn />
      <DownloadEn />
      <ContactEn />
      <FooterEn />
    </>
  );
}
