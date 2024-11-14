import React from "react";
import "../components/Contact/FormContactStyles.css";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import FormContactComponent from "../components/Contact/FormContactComponent";
import SeoComponent from "../components/SEO/SeoComponent";

const schemaContact = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Halaman Kontak",
  description: "Ini adalah halaman kontak kami.",
  url: "https://fe-slicing-design-kelompok-2.vercel.app/contact",
};

const ContactContainer = () => {
  return (
    <>
      <SeoComponent
        title="Halaman Kontak"
        description="Ini adalah halaman kontak kami"
        keywords="kontak, informasi"
        schema={schemaContact}
      />
      <AboutComponent title="Contact" subtitle="Home / Contact" />
      <div className="bg-color-container-contact">
        <FormContactComponent />
      </div>
      <BannerComponent />
    </>
  );
};

export default ContactContainer;
