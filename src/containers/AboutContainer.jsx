import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import { leadersData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import SeoComponent from "../components/SEO/SeoComponent";

const AboutContainer = () => {
  const schemaAbout = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang Kami",
    description: "Ini adalah halaman tentang kami",
    url: "https://fe-slicing-design-kelompok-2.vercel.app/about",
  };

  return (
    <div>
      <SeoComponent
        title="Tentang Kami"
        description="Ini adalah halaman tentang kami."
        keywords="tentang kami, perusahaan, tim"
        schema={schemaAbout}
      />
      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...leadersData, ...leadersData]} />
      <BannerComponent />
    </div>
  );
};

export default AboutContainer;
