"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Kusen Aluminium Bogor | Kusenbogor.com</title>
        <meta
          name="description"
          content="kusenbogor.com menyediakan kusen aluminium berkualitas dengan harga bersaing, pengerjaan rapi, dan bebas kustomisasi ukuran untuk area Bogor dan Jabodetabek."
        />
        <meta
          name="keywords"
          content="kusen aluminium Bogor, pembuatan kusen aluminium, kusen murah Bogor, produk aluminium custom"
        />
        <meta name="author" content="kusenbogor.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kusen Aluminium Bogor | kusenbogor.com" />
        <meta property="og:description" content="kusenbogor.com menyediakan kusen aluminium berkualitas dengan harga bersaing." />
        <meta property="og:url" content="https://kusenbogor.com" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "kusenbogor.com",
              description:
                "Kusen aluminium berkualitas dengan harga bersaing, pengerjaan rapi, dan bebas kustomisasi ukuran untuk area Bogor dan Jabodetabek.",
              url: "https://kusenbogor.com",
              telephone: "+62-822-1339-4565",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Mayjend HE Sukma Ciherang Pondok, Caringin, Bogor Regency, West Java 16730",
                addressLocality: "Bogor",
                addressRegion: "Jawa Barat",
                postalCode: "16730",
                addressCountry: "ID",
              },
              openingHours: "Mo-Fr 08:00-17:00",
              sameAs: [
                "https://instagram.com/toko_crd",
              ],
              image: "https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-19/47694708_297241394259917_1274651812762222592_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=3dYk5wwQVqkQ7kNvgExPXd5&_nc_gid=9f2e2c3e83a9433ab23bf2201ea69068&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB5cfXlEAZ5GG7GzDnLBIRtPc_R5hmxHmlS_e4jtS7pGw&oe=67467AF1&_nc_sid=8b3546",
              priceRange: "$$",
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.698652483835689,
                longitude: 106.83321103974457,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kusenbogor.com",
              url: "https://kusenbogor.com",
              logo: "https://instagram.fcgk43-1.fna.fbcdn.net/v/t51.2885-19/47694708_297241394259917_1274651812762222592_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk43-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=3dYk5wwQVqkQ7kNvgExPXd5&_nc_gid=9f2e2c3e83a9433ab23bf2201ea69068&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB5cfXlEAZ5GG7GzDnLBIRtPc_R5hmxHmlS_e4jtS7pGw&oe=67467AF1&_nc_sid=8b3546",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-822-1339-4565",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://instagram.com/toko_crd",
              ],
            }),
          }}
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
