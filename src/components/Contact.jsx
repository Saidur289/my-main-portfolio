import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";


const Contact = () => {
    return (
       <div className='bg-black text-white py-20'>
             <div className='container mx-auto px-8 md:px-16 lg:24'>
               <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
               <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                
               <div className='flex-1'>
               <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let&apos;s Talk</h1>
               <p>I am open to discussing web development projects or  job opportunities.</p>
               <div className="mb-4 mt-8">
               <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
               <a href="" className="hover:underline">saidur.riaz1@gmail.com</a>
  
               </div>
               <div className="mb-4 ">
               <FaPhone className="inline-block text-green-400 mr-2"/>
              <span>+8801533393421</span>

               </div>
               <div className="mb-4 ">
               <FaMapMarkedAlt className="inline-block text-green-400 mr-2"/>
              <span>Chattogram, Bangladesh</span>

               </div>
               
               </div>
               <div className="flex-1 w-full">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">Your Name</label>
                        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input placeholder="Your Email" type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">Message</label>
                        <textarea rows={'5'}  placeholder="Enter Your Message" type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" />
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 px-4 py-2 rounded-full'>Send</button>
                </form>
               </div>
               </div>
             </div>
           </div>
    );
};

export default Contact;