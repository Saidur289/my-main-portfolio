import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className='fixed  z-50 top-0 w-full '>
          <nav className='bg-black text-white  px-8 md:px-16 lg:px-24'>
           <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>
                Saidur
            </div>
            <div className='space-x-6'>
                <Link to="/" className='hover:text-gray-400'>Home</Link>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#services" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contacts" className='hover:text-gray-400'>Contact</a>
            </div>
            <a href='#contacts' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'>Connect Me</a>
            </div> 
        </nav>
      </div>
    );
};

export default Navbar;