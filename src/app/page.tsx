import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ProductHighlight from "@/components/Products/ProductHighlight";
// import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kusen Aluminium Bogor | kusenbogor.com",
  description:
    "Kusenbogor.com menyediakan kusen aluminium berkualitas dengan harga bersaing, pengerjaan rapi, dan bebas kustomisasi ukuran untuk area Bogor dan Jabodetabek.",
  keywords: [
    "kusen aluminium Bogor",
    "pembuatan kusen aluminium",
    "kusen murah Bogor",
    "produk aluminium custom",
  ],
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ProductHighlight />
      
      {/* <Pricing /> */}
      <Contact />
      <Brands />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
     
      <Blog />
      <Contact /> */}
    </>
  );
}
