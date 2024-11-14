import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";
import SeoComponent from "../components/SEO/SeoComponent";

const schemaBlogs = {
  "@context": "https://schema.org",
  "@type": "BlogsPage",
  name: "Halaman Blog",
  description: "Ini adalah halaman daftar blog kami.",
  url: "https://fe-slicing-design-kelompok-2.vercel.app/blog",
};

const BlogsContainer = () => {
  return (
    <div>
      <SeoComponent
        title="Halaman Blog"
        description="Ini adalah halaman daftar blog"
        keywords="blog, artikel"
        schema={schemaBlogs}
      />
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogTopComponent />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogBottomComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
