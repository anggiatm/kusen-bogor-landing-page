import ProductHighlight from "@/components/Products/ProductHighlight";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kusen Aluminium Bogor | kusenbogor.com",
  description:
    "Kusenbogor.com menyediakan kusen aluminium berkualitas dengan harga bersaing, pengerjaan rapi, dan bebas kustomisasi ukuran untuk area Bogor dan Jabodetabek.",
  keywords: [
    "kusen aluminium Bogor",
    "pembuatan kusen aluminium",
    "cimande rolling door",
    "toko kaca dan alumunium cimande rolling door",
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
      <Contact/>
    </>
  );
}
