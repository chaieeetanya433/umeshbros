

import Image from 'next/image';
import React from 'react' 
import Bg from "@/assets/180.jpg"
import Group from "@/assets/group.png"
import Experience from "@/assets/experience.png"
import Clients from "@/assets/clients.png"
import Projects from "@/assets/project.png"
import CounterComp from './CounterComp';

const items = [
    {
        name: "Team Members",
        number: 1200,
        icon: Group,
    },
    {
        name: "Experience",
        number: 40,
        icon: Experience,
    },
    {
        name: "Projects",
        number: 200,
        icon: Projects,
    },
    {
        name: "Clients",
        number: 15000,
        icon: Clients,
    },
]

const Counter = () => {
    return (
        <section className="py-16">
            <h1 className='text-2xl xs:text-3xl tracking-wider font-semibold text-black text-center  relative after:contents-[""] after:absolute after:-bottom-2 xs:after:-bottom-3 after:left-[42%] xs:after:left-[45%] lg:after:left-[48%] after:w-[15%] xs:after:w-[10%] lg:after:w-[5%]  after:h-[3px] xs:after:h-1 after:bg-black mb-12'>ACCOMPLISHMENT</h1>
            <div className='w-full h-auto lg:h-60 bg-black/70 relative'>
                <Image src={Bg} alt='bg-photo' className='w-full h-full lg:h-60  object-cover -z-10 absolute' />
                <div className='layout h-full grid sm:grid-cols-2 lg:grid-cols-4 max-lg:gap-y-12 gap-x-12 place-items-center z-20  py-12'>
                    {
                        items.map(ele => (
                            <div className='w-full h-full flex items-center justify-center flex-col' key={ele.name}>
                                <div className='text-white text-5xl font-semibold flex items-center gap-x-4'>
                                    <Image src={ele.icon} alt='group' width={100} height={100} className='w-12 h-12 object-fill' />
                                    <div className='flex items-center'>
                                        <CounterComp  end={ele.number} />
                                        <span className='ms-2'>+</span>
                                    </div>
                                </div>
                                <p className='text-xl  text-white mt-3'>{ele.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Counter
