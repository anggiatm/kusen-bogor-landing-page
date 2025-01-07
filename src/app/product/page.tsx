import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Produk Kami"
        description="Produk Berkualitas untuk Semua Kebutuhan Anda. Kami tidak hanya menyediakan kusen aluminium berkualitas tinggi, tetapi juga menawarkan berbagai produk lain yang dirancang untuk memenuhi kebutuhan Anda. Dengan keahlian kami dalam pengerjaan bahan aluminium, stainless, besi, dan kaca, kami siap membantu mewujudkan desain impian Anda."
      />

      <AboutSectionOne />
      <AboutSectionTwo />

      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;
