import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Data produk dapat ditambahkan sebanyak yang dibutuhkan
const data = [
  {
    title: "Kusen Aluminium",
    desc: "Cocok untuk pintu dan jendela, tahan lama, dan estetis.",
    image1: "/images/products/kusen.png",
    image2: "/images/products/kusen.png",
  },
  {
    title: "Canopy",
    desc: "Lindungi area luar rumah Anda dengan canopy yang kuat dan elegan.",
    image1: "/images/products/kusen.png",
    image2: "/images/products/kusen.png",
  },
  {
    title: "Kitchen Set Aluminium",
    desc: "Modern dan mudah dibersihkan, sempurna untuk dapur minimalis.",
    image1: "/images/products/kusen.png",
    image2: "/images/products/kusen.png",
  },
  // Tambahkan produk lainnya di sini
];

const ProductHighlight = () => {
  return (
    <section
      id="products"
      className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Produk Kami"
          paragraph="Kami menawarkan berbagai produk berkualitas untuk memenuhi kebutuhan Anda. Dengan pilihan yang beragam, material terbaik, dan layanan kustomisasi sesuai keinginan Anda, kami siap membantu mewujudkan proyek yang Anda impikan."
          center
        />
        {/* Iterasi data produk */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`-mx-4 flex flex-wrap items-center ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-2 aspect-[15/5] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={item.image1}
                  alt={`${item.title} image`}
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src={item.image2}
                  alt={`${item.title} image`}
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-14">
                  <h3 className=" text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlight;
