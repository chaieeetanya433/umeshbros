import Image from "next/image";
import Link from "next/link";
import { RiFolderDownloadFill } from "react-icons/ri";


const SecondCompo = () => {

    return (
        <section style={{ fontFamily: "Barlow Condensed, sans-serif" }} className="py-6">
            <div className="flex flex-col mx-4 my-6 sm:hidden">
                <Link href="#">
                    <Image
                        src="/railway-construction.webp"
                        width={317}
                        height={448}
                        alt="Railway-cons"
                        objectFit="cover"
                        className="w-full h-full border-2 border-[#000000]"
                    />
                </Link>
                <span className="flex flex-row justify-center items-center gap-2 my-4">
                    <RiFolderDownloadFill color="#81373a" className="text-[16px]" />
                    <Link
                        href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
                        download={'bank_page.pdf'}
                        target="_blank"
                        className="text-[#81373a] text-[14px] underline decoration-[#81373a]">Coorporate Brochure Download</Link>
                </span>
            </div>
            <section className="md:grid md:grid-cols-3 md:gap-2 lg:gap-4 mx-4">
                <div className="mx-4 md:mx-4 my-3 hidden sm:block">
                    <Image
                        src="/Best-Railway-Construction.webp"
                        width={317}
                        height={448}
                        alt="Best-Railway"
                        objectFit="cover"
                        className="w-[686px] md:w-full h-[344px] sm:mx-auto rounded-md"
                    />
                </div>
                <div className="mx-4 sm:mx-5 md:mx-3 my-3">
                    <h3 className="text-[#000000] text-[30px] sm:text-[28px] leading-[42px] sm:leading-[38px] tracking-normal text-left py-3 font-semibold">K&R Rail is a leading Railway Construction Company in India</h3>
                    <Link href="#" style={{ fontFamily: "Roboto, sans-serif" }} className="text-[#000000] text-[20px] leading-[34px] text-left tracking-normal py-3">Engineering Procurement Construction Commissioning (EPCC) Services under a single roof such as:</Link>
                    <p className="text-[#7f8284] text-[16px] sm:text-[19px] leading-[27.2px] sm:leading-[32.3px] text-left tracking-normal py-4">Earthworks, Bridges and Civil Works, Track Works, Overhead Electrification (OHE), Signalling & Telecommunication (S&T), Allied Works</p>
                    <p className="bg-[#81373a] text-[#ffffff] text-[18px] sm:text-[20px] leading-[28.8px] sm:leading-[32px] p-3 sm:text-left tracking-normal hidden md:block rounded-sm shadow-sm">Established in <b>1998</b> and Holding Domain Expertise of nearly <b>3 decades</b></p>
                </div>
                <div className="sm:block mx-4 md:mx-4 my-6 hidden ">
                    <Link href="#">
                        <Image
                            src="/railway-construction.webp"
                            width={317}
                            height={448}
                            alt="Railway-cons"
                            objectFit="cover"
                            className="w-full h-[650px] md:h-[262px] lg:h-[320px] border-2 border-[#000000]"
                        />
                    </Link>
                    <span className="flex flex-row justify-center items-center gap-2 my-4">
                        <RiFolderDownloadFill color="#81373a" className="text-[16px]" />
                        <a
                            href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
                            download={'bank_page.pdf'}
                            target="_blank"
                            className="text-[#81373a] text-[14px] underline decoration-[#81373a]"
                        >Coorporate Brochure Download</a>
                    </span>
                </div>
            </section>
            <div className="flex flex-col sm:hidden mx-4">
                <p className="bg-[#81373a] text-[#ffffff] text-[18px] sm:text-[20px] leading-[28.8px] sm:leading-[32px] p-3 sm:py-5 sm:text-left tracking-normal">Established in <b>1998</b> and Holding Domain Expertise of nearly <b>3 decades</b></p>
                <Image
                    src="/Best-Railway-Construction.webp"
                    width={317}
                    height={448}
                    alt="Best-Railway"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
        </section>
    )
};

export default SecondCompo;
