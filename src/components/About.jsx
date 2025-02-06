import aboutImg from '../assets/Riaz-final-removebg-preview.png'
const About = () => {
  return (
    <div className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={aboutImg} alt="" className='w-72 h-80 rounded object-cover mb-8 md:md-0' />
          <p>
            {" "}
            Despite coming from a non-CSE background, I discovered my love for
            programming and turned it into my passion. I thrive on learning new
            technologies, solving problems, and creating user-friendly
            interfaces that bring ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
