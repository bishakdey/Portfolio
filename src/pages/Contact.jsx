import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';




  const Contact = () => {
    const [state, handleSubmit] = useForm("movdknop");
    const navigate = useNavigate();
    if (state.succeeded) {
      const timeout = setTimeout(() => {
        navigate('/'); // redirect to homepage
      }, 3000); // 2 second delay

      return (
        <div className="flex justify-center items-center bg-gradient-to-b from-[#0f3266] to-[#00000F] h-screen text-white text-2xl">
          <p>Thanks for reaching out! Redirecting to homepage...</p>
        </div>
      );
    }

    return (
      <main className="bg-gradient-to-b from-[#0f3266] to-[#00000F] text-white min-h-screen">
        <Navbar />
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">

          {/* Contact Card */}
          <div className="relative z-20 bg-white/10 backdrop-blur-lg rounded-xl p-10 shadow-xl w-full max-w-md text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-md mb-6 text-gray-200 font-robert-medium">
              I’m always open to discuss projects, collaborations, or just to say hi!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 border-b-2 focus:outline-none focus:border-blue-500 m-[10px]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 border-b-2 focus:outline-none focus:border-blue-500 m-[10px]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 border-b-2 focus:outline-none focus:border-blue-500 m-[10px]"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-md font-semibold"
                disabled={state.submitting}
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">

              <a href="mailto:bishakdey@gmail.com" className="text-xl hover:text-blue-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </main>
    )
  }

  export default Contact