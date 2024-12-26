import React from "react";


const services = [
    {
        title:"Website Development",
        imageUrl:"client/public/images/service-img/web.svg",
        description: "Building high-quality, responsive websites tailored to meet client requirements"
    },
    {
        title:"Mobile Development",
        imageUrl:"client/public/images/service-img/mobile.svg",
        description: " Creating innovative and user-friendly mobile applications for iOS and Android platforms"
    },
    {
        title:"Continous Maintenance",
        imageUrl:"client/public/images/service-img/maintenance.svg",
        description: "Providing ongoing support and maintenance services for websites and applications."
    },
    {
        title:"Backend Development",
        imageUrl:"client/public/images/service-img/backend-dev.svg",
        description: "Building robust backend APIs to facilitate seamless data exchange between applications."
    },
    {
        title:"Graphics Design",
        imageUrl:"client/public/images/service-img/graphics-design.svg",
        description: "Offering visually appealing and engaging graphic design services."
    },
    {
        title:"UI/UX Design",
        imageUrl:"client/public/images/service-img/ui-ux-design.svg",
        description: "creating visually stunning interfaces and seamless user experiences."
    },
]

const Services = () => {
    return (
        <div className="bg-white w-full text-secondary font-custom ">
            <div className="flex flex-col justify-center items-center my-10">
                <h2 className="text-center text-3xl font-bold text-black mb-12">Our Services</h2>
                <div className="line"></div>
            </div>
            <div className="grid md:grid-cols-3 max-w-[1200px] md:gap-14 m-auto px-3 my-10">
                {services.map((service, indx) => (
                    <div
                        key={indx}
                        className="flex flex-col justify-center items-center rounded-lg  group overflow-hidden transition-transform duration-300 transform hover:scale-105 border hover:bg-[#F1F4F3]"
                    >
                        <div className="w-full h-full hover:bg-[#FAF8F5] flex justify-center items-center p-2">
                            <img
                                width={200}
                                height={150}
                                src={service.imageUrl}
                                alt={service.title}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-5 my-5">
                            <h1 className="text-2xl mb-3 text-primary">{service.title}</h1>
                            <p className="text-center">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
