import React from 'react'
import Hero from './components/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Skills from './pages/Skills';

const App = () => {
  const navigate = useNavigate();
  
  return (
     <main className='relative min-h-screen bg-gradient-to-b from-[#0f3266] to-[#00000FFA] text-white'>
      <Navbar />
      <Hero />
      <section id='about_lite' className="flex flex-row w-full py-20 items-center justify-center bg-transparent z-10">
      {/* Left Side - Image */}
      <div className="w-1/3 flex justify-center pl-4">
        <img
          src="img/dp.jpg"
          alt="Your Portrait"
          className="w-60 h-60 rounded-full object-cover border-4 border-white"
        />
      </div>
      {/* Right Side - Description */}
      <div className="w-2/3 px-10 text-white">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>  
        <div className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-gray-200 font-robert-medium">
        <p className='typewriter'>Hi, I am <b className='font-orbitron-regular'>Bishak Dey</b></p>
          I am full-stack developer working currently with LTIMindtree.
          I'm passionate about solving problems and crafting seamless WEB applications with UI/UX design.
           Let's create something great together!
        </div>
      </div>
    </section>
    <Skills />
    <Footer />   
    </main>
  )
}

export default App