
const services = [
    { id: 1, title: 'Web Design', description: 'Creating visually stunning websites.' },
    { id: 2, title: 'Frontend Development', description: 'Building responsive and dynamic UIs.' },
    { id: 3, title: 'UI/UX Design', description: 'Designing user-friendly experiences.' },
    { id: 4, title: 'React Development', description: 'Developing modern web apps with React.' },
    { id: 5, title: 'Performance Optimization', description: 'Enhancing website speed and efficiency.' },
    { id: 6, title: 'Next JS', description: 'Improving search ranking and usability.' }
];
const Services = () => {
    return (
        <div className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {services.map(service => <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
            <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>

         </div>)}

        </div>
           </div> 
        </div>
    );
};

export default Services;