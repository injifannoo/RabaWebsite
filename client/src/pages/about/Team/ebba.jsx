import React from "react";

const Ebba = () => {
  return (
    <div className="bg-white w-full text-secondary font-custom min-h-screen">
      <div className="max-w-[1200px] m-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-black mb-6">Ebba Kecha</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Picture Section */}
          <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/150" // Replace with the actual image of Ebba
              alt="Ebba Tamiru Urgessa"
              className="w-40 h-40 rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>

          {/* Profile Details Section */}
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Co-Founder & Software Developer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ebba Mekonnen is a visionary co-founder and skilled software developer with
              expertise in the MERN stack (MongoDB, Express, React, Node.js) and Flutter development.
              His deep understanding of modern web and mobile technologies allows him to design and
              implement innovative, user-centric solutions tailored to meet business needs.
            </p>
            <p className="mt-4 text-gray-600">
              With a passion for solving real-world problems through technology, Ebba brings
              exceptional technical skills, leadership, and a commitment to excellence. He is
              instrumental in driving the company's technical strategy, ensuring high-quality
              deliverables, and fostering a collaborative development environment.
            </p>

            <h3 className="text-xl font-semibold text-black mt-6">Key Areas of Expertise:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Web Development: Full-stack solutions using the MERN stack.</li>
              <li>Mobile App Development: High-performance, cross-platform apps with Flutter.</li>
              <li>Team Leadership: Mentoring team members and streamlining development workflows.</li>
              <li>Problem Solving: Translating complex requirements into scalable software solutions.</li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-6">Achievements:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                Successfully led and developed key projects that enhanced user experience and drove
                client satisfaction.
              </li>
              <li>
                Co-founded the company, playing a pivotal role in its technical foundation and growth
                strategy.
              </li>
              <li>
                Actively collaborates with clients to deliver innovative software tailored to their
                needs.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-black mt-6">Personal Philosophy:</h3>
            <p className="mt-2 text-gray-600 italic">
              "Technology has the power to transform lives and bridge gaps in our world. I believe in
              creating solutions that not only meet the needs of today but also pave the way for a
              better future."
            </p>

            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-3xl"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebba;
