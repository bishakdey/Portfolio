import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaInstagram, FaWordpress } from "react-icons/fa";


const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observerInstance.unobserve(entry.target); // stop observing after reveal
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#0f3266] to-[#00000FFA] text-white">
      <Navbar />
      <div className='min-h-screen bg-transparent p-1'>
        <div id="scroll-list" className="space-y-10 max-w-xl mx-auto mt-40 ">
          <h1 className="text-3xl font-bold text-center reveal opacity-0 translate-y-4 transition-all duration-500">About Me</h1>
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 bg-transparent text-white shadow-[0_10px_60px_rgba(0,0,0,0.7)] rounded-lg p-10 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-8 flex justify-center">
              <img src="img/dp.jpg" alt="About Me" className="w-[150px] h-[150px] rounded-lg" />
            </div>
            <div className="w-full md:w-2/3">
              <p className='font-robert-regular'>Hi, my name is Bishak Dey. I am a Software Engineer currently working with LTIMindtree as a part of the core team in AI Native Platforms. I have been part of the core development team where I use my skills to create intuitive and user-friendly features for our platform. I have used technologies like <strong>Springboot</strong>, <strong>VueJS</strong>,
                <strong> ArangoDB</strong>, <strong> Docker & Kubernetes</strong> and <strong>Flask</strong> to deliver AI enabled solutions.</p>
              <a
                href="/files/BishakDey_Software_Engineer_Resume.pdf"
                download
                className="text-blue-300 hover:text-yellow-200 font-regular"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-4 transition-all duration-700 bg-transparent text-white shadow-[0_10px_60px_rgba(0,0,0,0.7)] rounded-lg p-10 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-8 flex justify-center">
              <img src="img/contact-2.webp" alt="About Me" className="w-[150px] h-[150px] rounded-lg" />
            </div>
            <div className="w-full md:w-2/3">
              <p className='font-robert-regular'>I am also a Photographer and I have pursued Photography professionally in the past. I have covered Corporate Events, Weddings and Product shoots. I also occasioanlly write blogs on things that interests me and posts Photos on my Instagram. Do not forget to chem them out! :D</p>
              <div className="flex gap-4 items-center mt-4 text-2xl">
                <a href="https://www.instagram.com/bishakdey" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-200" title='Instagram'>
                  <FaInstagram />
                </a>
                <a href="https://bishakdey.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-yellow-200" title='Blog'>
                  <FaWordpress />
                </a>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </main>
  );
};

export default About;
