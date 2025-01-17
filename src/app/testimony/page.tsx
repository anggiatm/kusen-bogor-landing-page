import Breadcrumb from "@/components/Common/Breadcrumb";

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
        pageName="Testimoni Pelanggan"
        description="Kami bangga telah menjadi bagian dari banyak proyek yang memuaskan pelanggan kami."
      />
    </>
  );
};

export default ContactPage;
