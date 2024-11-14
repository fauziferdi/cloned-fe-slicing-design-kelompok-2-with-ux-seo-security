import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import SeoComponent from "../components/Seo/SeoComponent";

const schemaPortofolio = {
  "@context": "https://schema.org",
  "@type": "PortofolioPage",
  name: "Halaman Portofolio",
  description: "Ini adalah halaman portofolio kami",
  url: "https://fe-slicing-design-kelompok-2.vercel.app/portofolio",
};

const PortofolioContainer = () => {
  return (
    <>
      <SeoComponent
        title="Halaman Portofolio"
        description="Ini adalah halaman portofolio kami"
        keywords="portofolio, portfolio"
        schema={schemaPortofolio}
      />
      <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
      <OurWorkComponent />
      <BannerComponent />
    </>
  );
};

export default PortofolioContainer;
