import { useEffect, useState } from "react";


const Project = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('project.json')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])
    return (
        <div className='bg-black text-white py-20'>
        <div className='container mx-auto px-8 md:px-16 lg:24'>
          <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                data.map((project) => <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img className="rounded-lg mb-4 w-full h-48 object-cover" src={project?.projectImage} alt="" />
                    <h3 className="text-2xl font-bold mb-2">{project?.projectName}</h3>
                    <p className="text-gray-400 mb-4">{project?.tech}</p>
                    <button className="inline-block bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full">View Details</button>
                </div>)
            }
        </div>
           </div> 
        </div>
    );
};

export default Project;