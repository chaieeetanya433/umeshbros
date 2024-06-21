import React from 'react';

const ContactCard = ({ icon: Icon, title, details, iframe }) => {
  return (
    <div className="flex flex-col items-center  w-full max-w-sm mx-auto rounded-xl  shadow-lg bg-[#81373a] p-8 lg:p-16 overflow-hidden transform transition-transform duration-300 hover:scale-105 ">
      <Icon className="h-12 w-12 text-gray-100 mb-4 " />
      <h2 className="text-lg md:text-lg mlg:text-xl text-gray-100 font-semibold mb-2">{title}</h2>
      <p className="text-gray-100 md:text-sm mlg:text-base text-center">{details}</p>
    </div>
  );
};

export default ContactCard;
