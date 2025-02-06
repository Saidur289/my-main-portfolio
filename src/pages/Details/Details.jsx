import {  useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams()
    const items = useLoaderData() || []
    console.log(id);
     const [data, setData] = useState(items)
     const singleData = data.find(item => parseInt(id) === item.id)
     console.log(singleData);
     const {projectImage, projectName, description, websiteLiveLink, githubRepoLink} = singleData
    //  console.log(data);
      
    return (
        <div className="py-16 pt-20 bg-black text-white">
           <div>
           <div className="flex flex-col md:flex-row items-center rounded-lg shadow-lg overflow-hidden bg-black text-white" >
      {/* Image Section */}
      <div className="w-full md:w-1/3 ">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-56 object-cover md:h-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 p-6 ">
        <h2 className="text-2xl font-bold mb-4">
          {projectName}
        </h2>
        <p className="mb-6">{description}</p>

        <div className="flex space-x-4">
          <a
            href={githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'
          >
            GitHub Repo
          </a>
          <a
            href={websiteLiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
           </div>
     
        </div>
    );
};

export default Details;