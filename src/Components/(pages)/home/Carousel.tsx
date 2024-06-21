"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Carousel1 from "@/assets/img1.webp"
import Carousel2 from "@/assets/img2.webp"
import Carousel3 from "@/assets/img3.webp"

const slides = [
    {
        name: "Railway construction redefining transportation landscapes",
        image: Carousel1,
    },
    {
        name: "Innovation on track for tomorrow's journeys",
        image: Carousel2,
    },
    {
        name: "Bridging distances with precision and dedication.",
        image: Carousel3,
    },
]

const Carousel = () => {
    return (
        <div >
            <Swiper
                navigation={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    slides.map((item, i) => (
                        <SwiperSlide key={i} >
                            <div className='w-full h-[15rem] xs:h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-screen overflow-hidden relative' >
                                <Image src={item.image} alt="carusel" width={1000} height={500} className='w-full h-full object-cover absolute -z-20 animate' />
                                <div className='w-full flex items-center justify-center h-full bg-black/30 z-10'>
                                    <div className='w-full max-w-4xl px-6 xs:px-8 sm:px-12'>
                                        <h1 className='text-3xl xs:text-5xl md:text-6xl  lg:text-[75px] text-center font-semibold text-white leading-none delay-100 show-text'>{item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel
