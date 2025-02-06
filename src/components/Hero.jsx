import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import img from '../assets/Riaz-final-removebg-preview.png'

const Hero = () => {
    return (
        <div className='bg-black text-white text-center pt-20 py-16'>
            <img src={img} alt="profile"  className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>I am <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-400 to-blue-400'>Front End Developer</span></h1>
            <p className='mt-4 text-lg text-gray-300'>I specialize in building modern and responsive application</p>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center  gap-2 mt-8 space-x-4'>
              <div className='flex gap-2'>
              <a href='#contacts' className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'>Connect With Me</a>
              <a  href="https://drive.google.com/file/d/1KuqnJ_UHplvyue1hEmZ4LtgX3OW1Hjek/view"
          target="_blank"
          rel="noopener noreferrer" className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white  md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'>Resume</a>
              </div>
              <div className="flex items-center gap-2 ">
            <a href="https://www.google.com/search?q=fb&oq=fb&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQLhhDGM" target="_blank"  className="bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 px-4 py-2 rounded-full ">
              <FaFacebook className='text-xl'></FaFacebook>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/saidur-riaz1/" className="bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 px-4 py-2 rounded-full">
              <FaLinkedin className='text-xl'></FaLinkedin>
            </a>
            <a target="_blank" href="https://github.com/Saidur289" className="bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 px-4 py-2 rounded-full">
              <FaGithub className='text-xl'></FaGithub>
            </a>
          </div>
             
            </div>
        </div>
    );
};

export default Hero;