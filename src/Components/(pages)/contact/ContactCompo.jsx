
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import FAQ from "@/Components/FAQ"
import ContactCard from "@/Components/(pages)/contact/ContactCard"
const contactDetails = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '+91 9987647301',
  },
  {
    icon: MailIcon,
    title: 'Email',
    details: 'umeshbros1@gmail.com',
  },
  {
    icon: LocationMarkerIcon,
    title: 'Address',
    details: 'Kamdhenu Commerz, Plot No:2, Navi Mumbai, Raigad, Pin:410210',
  },
];

const faqs = [
  {
    question: "What are the working hours of the construction site?",
    answer: "The working hours of the construction site may vary depending on the stage of construction. However, we will always strive to minimize noise and disruption to the surrounding community. We will update residents in advance of any planned night work."
  },
  {
    question: "How will the construction project impact traffic flow?",
    answer: "We understand that construction can sometimes cause traffic congestion. We are working with the local authorities to develop a traffic management plan that will minimize disruption to traffic flow. We will also provide information to motorists about any road closures or detours."
  },
  {
    question: "Who can I contact if I have any questions or concerns about the construction project?",
    answer: "We are committed to keeping the community informed about the construction project. We have set up a hotline where you can call to ask questions or voice any concerns you may have. You can also find more information on our website. Contact details: [insert contact information here]"
  }
];

const ContactCompo = () => {
  return (
    <section>
      <div className={`w-full h-full p-16  mx:auto relative banner`}>
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 md:gap-6 lg:gap-8">
          <p className="text-xl text-white font-medium">Contact Us</p>
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-white w-full font-bold lg:text-center md:text-center sm:text-center text-center">
            Get in Touch with Us
          </h2>
        </div>
      </div>

      <div className="layout flex flex-col mt-2 items-center justify-between gap-y-5 py-4 text-center md:gap-x-10 lg:flex-row lg:text-left lg:px-8">
        <div className="flex flex-col gap-8">
          {/* <h2 className="text-4xl text-gray-800 md:text-6xl font-semibold lg:mx-20 ">
          Contact Us
        </h2> */}
          <p className="my-auto max-w-xl text-gray-700 text-lg">
            Ready to embark on transformative railway construction projects with K&R Rail? Contact us today for seamless collaboration and dedicated support on your journey toward innovative railway infrastructure solutions. Let's connect and build together for a sustainable future.
          </p>
        </div>
        <div className=" flex flex-row gap-8 md:items-end">
          <a href="tel:+91 9987647301 ">
            <button className="bg-[#81373a] flex gap-2 items-center md:mx-0 mx-auto  text-lg rounded-full px-8 py-2 text-white hover:bg-red-600">Call us instantly</button>
          </a>
          <a href="mailto:umeshbros1@gmail.com">
            <button className="bg-[#81373a] flex gap-2 items-center md:mx-0 mx-auto  text-lg rounded-full px-8 py-2 text-white hover:bg-red-600">Mail us here</button>
          </a>
        </div>
      </div>
      <div className="layout grid md:grid-cols-3 gap-y-8 md:gap-x-8 my-8">
        {contactDetails.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            details={contact.details}
          />
        ))}
      </div>
      <div className="mt-8">
        <iframe
          className="w-full h-[20rem] "
          aria-hidden="false"
          tabIndex={-1}
          src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s51.503325,-0.119545!5e0!6i12"
        ></iframe>
      </div >
      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default ContactCompo;
