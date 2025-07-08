import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaWordpress } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="bg-transparent">
    <footer className="text-white py-10 px-4 ">
      {/* Horizontal Line */}
      <div className="flex justify-center">
        <hr className="w-48 h-1 bg-gray-100 border-0 rounded-sm dark:bg-gray-700" />
      </div>

      {/* Footer Content */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Description */}
        <div id="description" className="text-center md:text-left px-2">
          <p className="text-xs font-robert-regular">© 2025 Bishak Dey. All rights reserved.</p>
          <p className="text-xs font-robert-regular">
            Developed by <span className="text-md font-orbitron-regular">Bishak Dey</span>
          </p>
        </div>

        {/* Socials */}
        <div id="socials" className="flex gap-4 text-lg md:text-md font-robert-regular px-2">
          <a href="https://www.instagram.com/bishakdey" target='_blank' className="hover:text-yellow-300" title='instagram'><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/bishakdey/" target='_blank' className="hover:text-yellow-300" title='linkedin'><FaLinkedin /></a>
          <a href="https://x.com/bishak_dey" target='_blank' className="hover:text-yellow-300" title='twitter'><FaXTwitter /></a>
          <a href="https://github.com/bishakdey" target='_blank' className="hover:text-yellow-300" title='github'><FaGithub /></a>
          <a href="https://bishakdey.wordpress.com/" target='_blank' className="hover:text-yellow-300" title='wordpress'><FaWordpress /></a>
        </div>
      </div>
    </footer>
  </main>
  )
}

export default Footer