import { useEffect, useState } from "react";


const Skill = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('skill.json')
        .then((res) => res.json())
        .then(data => {
            setData(data)
        })
    }, [])
    return (
        <div className="container mx-auto p-6 bg-black text-white" id="skill">
            <h1 className="text-4xl text-center font-bold mb-12">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.map((item) => (
            <div
              key={item.id || item.name} // Use `id` if available
              className=" p-6 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300"
            >
              <div className="mb-4 flex justify-between items-center">
                <div className="text-pink-500 text-3xl">
                  <img
                    src={item.icon}
                    className="w-20 h-20 rounded-full"
                    alt={item.name}
                  />
                </div>
              </div>
              <h2 className="mt-2   text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 hover:text-white">{item.name}</h2>
              <p className=" hover:text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Skill;