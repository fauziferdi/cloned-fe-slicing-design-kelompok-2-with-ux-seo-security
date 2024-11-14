import React from "react";
import HeroSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import { servicesData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import AboutComponent from "../components/About/AboutComponent";
import SeoComponent from "../components/SEO/SeoComponent";

const schemaOurServices = {
  "@context": "https://schema.org",
  "@type": "OurServicesPage",
  name: "Halaman Layanan",
  description: "Ini adalah halaman layanan kami",
  url: "https://fe-slicing-design-kelompok-2.vercel.app/our-services",
};

const ServicesContainer = () => {
  return (
    <>
      <SeoComponent
        title="Halaman Layanan"
        description="Ini adalah halaman layanan kami"
        keywords="layanan, layanan"
        schema={schemaOurServices}
      />
      <AboutComponent title={"Services"} subtitle={"Home / Services"} />
      <HeroSection />
      <TitlePageComponent title="Our Services" description="Our Expertise" />
      <ExpertiseSection services={servicesData} />
      <BannerComponent />
    </>
  );
};

export default ServicesContainer;