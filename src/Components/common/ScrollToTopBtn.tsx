"use client"
 
import { FaArrowDown } from 'react-icons/fa';

// const ScrollToTopBtn = () => {
//     const scrollToTop = () => {
//         window.scrollTo(0, 0);
//     }
//     return (
//         <>
//             <button className="w-10 h-10 bg-logo text-white flex items-center justify-center rounded-md fixed bottom-8 right-8 rotate-180 z-[999] border border-white" onClick={scrollToTop}>
//                 <FaArrowDown />
//             </button>
//         </>
//     )
// }

// export default ScrollToTopBtn

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button className={`w-10 h-10 bg-logo text-white flex items-center justify-center rounded-md fixed bottom-8 right-8 rotate-180 z-[999] border border-white ${!isVisible && 'hidden'}`} onClick={scrollToTop}>
            <FaArrowDown />
        </button>
    );
};

export default ScrollToTopButton;
