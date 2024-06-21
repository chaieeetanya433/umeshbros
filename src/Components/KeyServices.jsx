import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Engineering",
    imgSrc: "/Engineering-Procurment-1.webp",
  },
  {
    title: "Procurement",
    imgSrc: "/Engineering-Procurement-Construction-1.webp",
  },
  {
    title: "Construction",
    imgSrc: "/engineering-procurement-and-construction-1.webp",
  },
  {
    title: "Commissioning",
    imgSrc: "/Engineering-Procurement-Construction-and-Commissioning-1.webp",
  },
];

const KeyServices = () => {
  return (
    <main
      className="py-8 px-4 md:px-12 lg:px-24"
      style={{ fontFamily: "Barlow Condensed, sans-serif" }}
    >
      <div className="my-4 grid grid-cols-1 items-center">
        <div className="mb-4">
          <p className="text-sm sm:text-[16px] text-[#7f8284] sm:leading-[16px] tracking-[1.8px] text-left py-2 uppercase">
            our key services
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#000000] tracking-normal text-left py-2">
            Areas of Services
          </h3>
        </div>
        {/* <div className="sm:absolute right-0 pr-4 md:pr-8 lg:pr-24 pb-5 sm:pb-0">
          <Link
            href="#"
            className="bg-[#eac073] hover:bg-[#cea862] rounded-sm text-[#000000] text-[16px] sm:text-[19px] leading-[16px] sm:leading-[19px] items-center p-3 w-[124px] h-[43px]"
          >
            All Services
          </Link>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-2">
        {services.map((service) => (
          <div className="image-box" key={service.title}>
            <Image
              src={service.imgSrc}
              alt={service.title}
              width="316"
              height="250"
              className="img rounded-md"
            />
            <p className="text-[#ffffff] text-4xl md:text-3xl font-semibold">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default KeyServices;
