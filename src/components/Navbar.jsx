import React, { use, useRef, useState, useEffect } from 'react'
import Button from './Button';
import { href } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FaInstagram, FaLinkedin, FaGithub, FaWordpress } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Footer from './Footer';


const navbarItems = ['Professional', 'Projects', 'About', 'Contact'];

const Navbar = () => {
  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      opacity: isNavVisible ? 1 : 0,
      y: isNavVisible ? 0 : -100,
      duration: 0.2,
      ease: 'power2.out',
    });
  }, [isNavVisible]);

  return (
    <>
      <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-1">
            <div className="flex items-center gap-7">
              <button className="hidden md:block nav-home-hover-btn" onClick={() => navigate('/')}>HOME</button>
            </div>
            <div className="flex h-full items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                {navbarItems.map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} className="nav-hover-btn">
                    {item}
                  </a>
                ))}
              </div>
              {/* Mobile Menu Icon */}
              <div className="block md:hidden px-5">
                <button onClick={() => setSidebarOpen(true)} className="text-white text-2xl">
                  <GiHamburgerMenu />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 z-50 h-full w-3/4 bg-black bg-opacity-90 p-6 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-white text-2xl">
          <IoMdClose />
        </button>
        <ul className="flex flex-col gap-6 mt-16">
          <li>
            <a href='/'
              className="text-white text-lg font-semibold hover:text-blue-400"
              onClick={() => setSidebarOpen(false)}
            >
              HOME</a>
          </li>
          {navbarItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="text-white text-lg font-semibold hover:text-blue-400"
                onClick={() => setSidebarOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-0 '>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Navbar