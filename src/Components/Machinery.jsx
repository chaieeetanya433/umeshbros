import Image from "next/image";
import Link from "next/link";

const machineries = [
  {
    title: "Mechanized track laying gantries",
    imgSrc: "/self-propelled-mechanized-tracklaying-gantries.jpg",
  },
  {
    title: "Rail threader",
    imgSrc: "/rail-threader-1.jpg",
  },
  {
    title: "Mobile flash butt welding machine",
    imgSrc: "/mobile-flash-butt-welding-machine.jpg",
  },
];

const Machinery = () => {
  return (
    <main
      className="py-4 px-4 md:px-12 lg:px-24 mb-12" 
    >
      <div className="my-4 grid grid-cols-1 items-center">
        <div className="mb-4">
          <p className="text-sm sm:text-[16px] text-[#7f8284] sm:leading-[16px] tracking-[1.8px] text-left py-2 uppercase">
            machinery
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#000000] tracking-normal text-left py-2">
          Building the Future of Railways with Precision Machinery
          </h3>
        </div>
        {/* <div className="sm:absolute right-0 pr-4 md:pr-8 lg:pr-24 pb-5 sm:pb-0">
          <Link
            href="#"
            className="bg-[#eac073] hover:bg-[#cea862] rounded-sm text-[#000000] text-[16px] sm:text-[19px] leading-[16px] sm:leading-[19px] items-center p-3 w-[124px] h-[43px]"
          >
            All Projects
          </Link>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
        {machineries.map((machine) => (
          <div className="relative" key={machine.title}>
              <Image
                src={machine.imgSrc}
                alt={machine.title}
                width="447"
                height="251"
                className="h-[251px] sm:h-[347px] md:h-[194px] lg:h-[243px] w-full brightness-[85%] hover:brightness-[90%] rounded-md"
              />

            <div className="my-2">
              <p
                className="text-[#000000] text-[24px] md:text-[24px] lg:text-[22px] leading-[45.9px] md:leading-[40.8px] lg:leading-[20px] tracking-normal text-left font-semibold"
              >
                {machine.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Machinery;
