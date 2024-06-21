
import { FaYoutube, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {  FaPhone, FaBuilding } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="w-full h-full p-4 mx-auto relative banner">
            <footer className="text-white py-12 lg:py-16 lg:h-[397px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-lg font-bold ">About Us</h2>
                            <p className="text-gray-100"> Umesh&Brothers was founded in 2019 with a vision to cater to the ever growing demand for Mass Transportation & Bulk Logistics of Goods & Materials through the Indian Railway networks.</p>
                            <a href="" className="font-semibold text-white">Know More</a>
                        </div>
                       
                        <div>
                            <h2 className="text-lg font-bold mb-4 flex gap-2 items-center">  <FaBuilding className='text-yellow-400'/>Corporate Offices</h2>
                            <ul className="space-y-2">
                                <li><p  className="text-gray-100 hover:text-white lg:ml-5"> Kamdhenu Commerz, Plot No:2, Navi Mumbai, Raigad, Pin:410210</p></li>
                                <li><a href="tel:+91 9987647301" className="text-gray-100 hover:text-white flex gap-2 items-center"><FaPhone className='text-yellow-400'/>+91 9987647301 </a></li>
                                <li><a href="mailto:umeshbros1@gmail.com" className="text-gray-100 hover:text-white flex flex-row gap-2 items-center"> <FaEnvelope className='text-yellow-400'/> umeshbros1@gmail.com</a></li>
                        
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-8 pt-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <p className="text-gray-100">&copy; 2024 Umesh & Brothers Construction Ltd. All rights reserved.</p>
                        <div className="flex space-x-4">
                            {/* <a href="#" className="text-gray-100  hover:text-white"><FaYoutube className='text-2xl'/></a> */}
                            <a href="mailto:umeshbros1@gmail.com" className="text-gray-100 hover:text-white"><FaEnvelope  className='text-2xl'/></a>
                            {/* <a href="#" className="text-gray-100 hover:text-white"><FaTwitter className='text-2xl' /></a> */}
                            {/* <a href="#" className="text-gray-100 hover:text-white"><FaLinkedin  className='text-2xl'/></a> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
