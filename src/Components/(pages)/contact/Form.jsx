'use client'
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";

const Form = () => {
    const [loader, setLoader] = useState(false);
    const [formInputs, setFormInputs] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Description: "",
        industry: "",
        MobilePhone: "",
        company: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        
        setFormInputs({
            FirstName: "",
            LastName: "",
            Email: "",
            Description: "",
            industry: "",
            MobilePhone: "",
            company: "",
        });
        alert("Thank you for reaching us!");
        setLoader(false);
    };

    return (
        <div className="flex bg-white p-4 mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full lg:w-[540px]">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label
                            htmlFor="FirstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <div className="flex items-center">
                            <FaUser className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                id="FirstName"
                                name="FirstName"
                                value={formInputs.FirstName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="LastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <div className="flex items-center">
                            <FaUser className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                id="LastName"
                                name="LastName"
                                value={formInputs.LastName}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="Email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <div className="flex items-center">
                            <FaEnvelope className="absolute left-3 text-gray-500" />
                            <input
                                type="email"
                                id="Email"
                                name="Email"
                                value={formInputs.Email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="MobilePhone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone
                        </label>
                        <div className="flex items-center">
                            <FaPhone className="absolute left-3 text-gray-500" />
                            <input
                                type="tel"
                                id="MobilePhone"
                                name="MobilePhone"
                                value={formInputs.MobilePhone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Company Name
                        </label>
                        <div className="flex items-center">
                            <FaBuilding className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formInputs.company}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="Description"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <div className="flex items-center">
                            <textarea
                                id="Description"
                                name="Description"
                                value={formInputs.Description}
                                onChange={handleInputChange}
                                className="mt-1 block w-full outline-none pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
