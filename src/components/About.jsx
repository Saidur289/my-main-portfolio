import aboutImg from '../assets/Riaz-final-removebg-preview.png'
const About = () => {
  return (
    <div className='bg-black text-white py-20'id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={aboutImg} alt="" className='w-72 h-80 rounded object-cover mb-8 md:md-0' />
        <div className='flex-1'>
        <p className='text-lg mb-8'>
            {" "}
            Despite coming from a non-CSE background, I discovered my love for
            programming and turned it into my passion. I thrive on learning new
            technologies, solving problems, and creating user-friendly
            interfaces that bring ideas to life.
          </p>
          <div className='space-y-4'>
            <div className='flex flex-col md:flex-row  gap-2'>
                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                  
                 </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  gap-2'>
                <label htmlFor="htmlandcss" className='w-2/12'>JAVASCRIPT</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                  
                 </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row  gap-2'>
                <label htmlFor="htmlandcss" className='w-2/12'>REACT</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                 <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                  
                 </div>
                </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
