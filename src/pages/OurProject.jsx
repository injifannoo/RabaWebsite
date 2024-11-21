import projectImage from "../assets/images/projectImage.png"
const OurProject = () => (
    <div className="p-8 mt-auto">
      <h1 className="text-3xl font-bold text-center">Projects Done</h1>
      <div className="mt-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col p-4 border rounded shadow  bg-gray-200">
        <div >
            <img src={projectImage} 
            alt="Project Image" 
            />
        </div>
        <div >
          <h2 className="text-xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Here the  description  for the project goes. The problems
that this project aims to solve and the way it differs from
others who offer solution to this problem. 
just write a description. </p>
        </div>
        </div>
        <div className="flex flex-col p-4 border rounded shadow  bg-gray-200">
        <div >
            <img src={projectImage} 
            alt="Project Image" 
            />
        </div>
        <div >
          <h2 className="text-xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Here the  description  for the project goes. The problems
that this project aims to solve and the way it differs from
others who offer solution to this problem. 
just write a description. </p>
        </div>
        </div>
        <div className="flex flex-col p-4 border rounded shadow bg-gray-200">
        <div >
            <img src={projectImage} 
            alt="Project Image" 
            />
        </div>
        <div >
          <h2 className="text-xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Here the  description  for the project goes. The problems
that this project aims to solve and the way it differs from
others who offer solution to this problem. 
just write a description. </p>
        </div>
        </div>
        <div className="flex flex-col p-4 border rounded shadow  bg-gray-200">
        <div >
            <img src={projectImage} 
            alt="Project Image" 
            />
        </div>
        <div >
          <h2 className="text-xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Here the  description  for the project goes. The problems
that this project aims to solve and the way it differs from
others who offer solution to this problem. 
just write a description. </p>
        </div>
        </div>
      </div>
    </div>
  );
  
  export default OurProject;
  