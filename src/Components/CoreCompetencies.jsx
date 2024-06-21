import Image from "next/image";
import { IoMdCheckbox } from "react-icons/io";

const CoreCompetencies = () => {
  return (
    <section
      style={{ fontFamily: "Barlow Condensed, sans-serif" }}
      className="p-3 mb-12"
    >
      <div className="mb-4 lg:mx-[4rem]">
        <p className="text-sm sm:text-[16px] text-[#7f8284] sm:leading-[16px] tracking-[1.8px] text-left py-2 uppercase">
          core competencies
        </p>
        <h3 className="text-3xl sm:text-4xl font-semibold text-[#000000] tracking-normal text-left py-2">
          Your Trusted Railway EPCC & Logistics Partner
        </h3>
      </div>
      <div className="flex flex-col md:flex-row p-1 lg:mx-[4rem] lg:my-[4rem]">
        <div className="">
          <h3 className="text-[#3f3f3f] py-1 md:ml-[13px] text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[33.4px] tracking-normal text-start">
            TRACK LAYING
          </h3>
          <ul className="p-2 md:w-[433px] lg:w-[603px] lg:mr-[40px]">
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Ballasted Track
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Installation of tracks using a bed of ballast, providing
                stability, drainage, and load distribution.
              </p>
            </li>
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Ballast Less Track (BLT)
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Modern track laying technique utilizing concrete or asphalt
                bases, ensuring durability and low maintenance.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/tracklaying1.png"
            alt="tracklaying1"
            width="443"
            height="277"
            className="w-[443px] sm:w-[689px] lg:w-[603px] h-[277px] sm:h-[431px] lg:h-[382px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse p-1 lg:mx-[4rem] lg:my-[4rem]">
        <div className="">
          <h3 className="text-[#3f3f3f] md:ml-[46px] text-[20px] py-1 md:text-[24px] font-semibold leading-[28px] md:leading-[33.4px] tracking-normal text-start">
            TRACK RENEWAL
          </h3>
          <ul className="p-2 md:w-[433px] lg:w-[603px] lg:ml-[40px]">
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Complete Track Renewal (CTR)
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Comprehensive replacement of the entire track structure,
                including rails, sleepers, and ballast.
              </p>
            </li>
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  ckeckThrough Rail Renewal (TRR)
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Replacement of worn rails while retaining the existing sleepers
                and ballast.
              </p>
            </li>
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  ckeckThrough Sleeper Renewal (TSR)
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Replacement of old or damaged sleepers, preserving the existing
                rails and ballast.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:mr-[29px]">
          <Image
            src="/trackrenewal.png"
            alt="trackrenewal"
            width="443"
            height="315"
            className="w-[443px] sm:w-[649px] md:w-[446px] lg:w-[603px] h-[315px] sm:h-[462px] md:h-[317px] lg:h-[429px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-1 lg:mx-[4rem] lg:my-[4rem]">
        <div className="">
          <h3 className="text-[#3f3f3f] py-1 md:ml-[13px] text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[33.4px] tracking-normal text-start">
            MECHANISED TRACK MAINTENANCE
          </h3>
          <ul className="p-2 md:w-[433px] lg:w-[603px] lg:mr-[40px]">
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Deep Screening
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Removal and cleaning of ballast to restore track stability and
                drainage.
              </p>
            </li>
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Tamping
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Compaction and alignment of ballast under sleepers to ensure
                proper track geometry.
              </p>
            </li>
            <li className="flex flex-row items-center">
              <IoMdCheckbox size="20" color="#81373a" />
              <span>
                <strong className="text-[#3f3f3f] text-[18px] md:text-[20px] text-left leading-[24px] md:leading-[29px] tracking-normal">
                  Ballast Profiling
                </strong>
              </span>
            </li>
            <li className="ml-6 py-2">
              <p className="text-[#656565] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[29px] tracking-normal text-left">
                Shaping and leveling of ballast to maintain track alignment and
                load distribution.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/tracklaying1.png"
            alt="tracklaying1"
            width="443"
            height="277"
            className="w-[443px] sm:w-[689px] lg:w-[603px] h-[277px] sm:h-[431px] lg:h-[382px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
