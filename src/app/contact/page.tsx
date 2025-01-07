import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | kusenbogor.com",
  description:
    "halaman kontak kusenbogor.com",
  keywords: [
    "kontak kusen aluminium Bogor",
    "kontak pembuatan kusen aluminium",
    "customer service kusen murah Bogor",
    "kontak penawaran produk aluminium custom",
  ],
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hubungi Kami"
        description="Kami siap membantu menjawab pertanyaan Anda. Hubungi kami melalui WhatsApp atau isi formulir di bawah ini."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
