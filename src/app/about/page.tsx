import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
