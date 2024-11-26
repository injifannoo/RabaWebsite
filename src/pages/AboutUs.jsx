import aboutUs from '../assets/images/about-us.png';  // Import image

const AboutUs = () => (

    <div className="flex flex-row md:flex-row items-center md:justify-between -mt-8">  {/* flex flex-col md:flex-row items-center md:justify-between */}
        <div className=" flex flex-col w-full md:w-1/2 text-left py-0 px-8"> {/*w-full md:w-1/2 text-left*/}
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="mt-4 text-lg text-start text-gray-700">
      Raba technologies is a software development startup with a mission to build robust platforms that solve our customers' and society's problems. 
      We aim to deliver innovative software solutions to businesses of all sizes.
      </p>
      <div className='flex flex-row text-center'>
        <button className='bg-blue-600 text-1xl text-center py-1 px-2 text-xl text-white'> LEARN MORE</button>
        <button className='border border-black  text-center py-1 px-2 text-xl text-blue-600'>CONTACT US</button>
      </div>
    </div>
    <div className="w-full md:w-1/2 mt-0 md:mt-0 py-0 px-8">{/*w-full md:w-1/2 mt-4 md:mt-0*/}
        <img 
      src={aboutUs}
      alt="About Us" 
      class="max-w-full h-auto object-cover"
    />
    </div>
    </div>
  );
  
  export default AboutUs;
  