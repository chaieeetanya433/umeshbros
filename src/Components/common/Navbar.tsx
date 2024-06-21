"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import NavDrawer from './NavDrawer';
import { usePathname } from 'next/navigation';


export const navItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About us",
        path: "/about",
    },
    {
        name: "Contact us",
        path: "/contact",
    },
]

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className={` w-full h-[70px] z-[99999]  bg-white shadow-lg transition-all ease-in-out duration-500 border-b "}`}>
                <nav className="layout flex items-center justify-between">
                    <Link href={'/'} className='text-xl xs:text-2xl font-medium  text-logo'>Umesh & Bros Construction</Link>
                    <button className='text-3xl text-logo flex sm:hidden' onClick={() => setIsOpen(true)}>
                        <MdMenu />
                    </button>
                    <ul className=' hidden sm:flex items-center space-x-1 '>
                        {
                            navItems.map(item => (
                                <li className='relative cursor-pointer capitalize  flex items-center text-header px-3 py-1  group transition-all ease-in-out duration-300 delay-100' key={item.name}>
                                    <Link href={item.path} className={`z-10 group-hover:text-white text-base uppercase transition-all ease-in-out duration-500 font-medium ${pathname === item.path && 'text-logo'}`}>
                                        {item.name}
                                    </Link>
                                    <div className='absolute left-0 bg-logo w-0 group-hover:w-full h-full transition-all ease-in-out duration-300'>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <NavDrawer open={isOpen} closed={() => setIsOpen(false)} active={pathname} />
                </nav>
            </section>
        </>
    )
}

export default Navbar
