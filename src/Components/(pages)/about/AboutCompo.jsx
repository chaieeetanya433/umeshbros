import Image from 'next/image';

const AboutComp = () => {

    const founderInfo = {
        name: 'Umesh&Brothers',
        title: 'Founder & CEO',
        description: 'Umesh&Brothers is a visionary leader with over 20 years of experience in the tech industry. He founded our company with a mission to innovate and lead the market in technology solutions. Under his leadership, the company has grown exponentially and continues to push the boundaries of what is possible.Umesh&Brothers is a visionary leader with over 20 years of experience in the tech industry. He founded our company with a mission to innovate and lead the market in technology solutions. Under his leadership, the company has grown exponentially and continues to push the boundaries of what is possible Umesh&Brothers is a visionary leader with over 20 years of experience in the tech industry. He founded our company with a mission to innovate and lead the market in technology solutions. Under his leadership, the company has grown exponentially and continues to push the boundaries of what is possible',
        imageUrl: '/assets/founder.jpg', 
    };

    return (
        <div className="min-h-screen bg-white p-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center my-8">
                    <h1 className="text-2xl font-bold text-gray-900">Best Railway Infrastructure Company in India</h1>
                    <p className="mt-4 text-lg text-gray-600">
                    Umesh & Brothers Construction is a leading Railway infrastructure company offering services in laying of track, signaling, electrification, and telecommunication in the Railway Industry.
                    </p>
                </header>

                <section className="flex flex-col lg:flex-row gap-8 p-4">
                    <div className="w-full lg:w-auto lg:flex-shrink-0 mb-6 lg:mb-0 lg:mr-10">
                        <div className="relative w-full h-[60vw] lg:w-[643px] lg:h-[683px]">
                            <Image
                                src="/assets/about.webp" 
                                alt="Our team"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg "
                            />
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 lg:max-h-[683px]">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">Railway Infrastructure Development Company</h2>
                        <p className="text-gray-900 mb-4 font-medium">About the Company</p>
                        <p className="text-gray-600 mb-4">
                        Umesh & Brothers Construction, registered under Udyog Aadhaar Memorandum with registration number MH27B0059864, has been dedicated to excellence in railway construction since its inception on April 1, 2019.
                            <br />
                        At Umesh & Brothers Construction, we specialize in delivering high-quality railway infrastructure solutions that meet the dynamic needs of modern transportation networks. Our commitment to innovation and reliability ensures that we exceed client expectations, contributing to the advancement of railway connectivity across regions.
                        <br />
                        We strive to deliver superior railway infrastructure solutions through innovation, teamwork, and dedication to safety and quality.
                        </p>

                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Company Information</h2>
                        <p className="text-gray-600">
                        <strong>Udyog Aadhaar Memorandum:</strong>Udyog Aadhaar Memorandum: MH27B0059864
                        <br />
                        <strong>Company Name:</strong>Company Name: Umesh & Brothers Construction
                        <br />
                        <strong> Date of Incorporation / Registration:</strong> 01/04/2019    
                        </p>
                    </div>
                </section>
                <hr className="w-full h-px my-8 bg-gray-900 border-0 dark:bg-gray-500" />
                <section className="flex flex-col lg:flex-row-reverse p-4 mt-10 mb-10">
                    <div className="w-full lg:w-auto lg:flex-shrink-0 mb-6 lg:mb-0 lg:ml-10">
                        <div className="relative w-full h-[60vw] lg:w-[343px] lg:h-[383px]">
                            <Image
                                src={founderInfo.imageUrl} 
                                alt={`${founderInfo.name}'s Picture`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 text-center">
                        <h1 className='text-5xl font-semibold'>The Founder</h1>
                        
                        <p className="text-gray-600 mt-10">{founderInfo.description}</p>
                        <h2 className="text-3xl font-semibold text-gray-800  mt-5">{founderInfo.name}</h2>
                        <h3 className=" font-medium text-gray-700 mb-2">{founderInfo.title}</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutComp;
