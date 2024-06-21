import { Drawer } from 'flowbite-react'
import React from 'react'
import { navItems } from './Navbar';
import Link from 'next/link';

interface props {
    active: string;
    open: boolean,
    closed: () => void;
}

const NavDrawer: React.FC<props> = ({ open, closed, active }) => {
    return (
        <>
            <Drawer open={open} onClose={closed}>
                <Drawer.Header title="" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Link href={'/'} className='text-2xl   font-medium text-header text-logo'>Umesh & Bros Construction</Link>
                    <ul className='space-y-2 my-6'>
                        {
                            navItems.map(item => (
                                <li className='relative cursor-pointer capitalize  flex items-center text-header' key={item.name}>
                                    <Link href={item.path} className={`z-10  text-base   uppercase ${active == item.path && "text-logo"}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default NavDrawer
