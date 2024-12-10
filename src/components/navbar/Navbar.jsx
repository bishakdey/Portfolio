import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
          <Sidebar />
          <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.1}} animate={{ opacity:1, scale:1}} transition={{ duration:1}} drag dragConstraints={{top:-10, left:-30, bottom: 200, right: 500}}>Bishak Dey</motion.span>
            <div className="social">
              <motion.a href="#" initial={{opacity:0, scale:0.1}} animate={{opacity:1, scale:1}} transition={{ duration:1}} whileHover={{scale:1.5}} whileTap={{scale:1}}><img src="/facebook.png" alt="Facebook Page" /></motion.a>
              <motion.a href="#" initial={{opacity:0, scale:0.1}} animate={{opacity:1, scale:1}} transition={{ duration:1}} whileHover={{scale:1.5}} whileTap={{scale:1}}><img src="/instagram.png" alt="Instagram Page" /></motion.a>
              <motion.a href="#" initial={{opacity:0, scale:0.1}} animate={{opacity:1, scale:1}} transition={{ duration:1}} whileHover={{scale:1.5}} whileTap={{scale:1}}><img src="/linkedin.png" alt="LinkedIn Page" /></motion.a>
              <motion.a href="#" initial={{opacity:0, scale:0.1}} animate={{opacity:1, scale:1}} transition={{ duration:1}} whileHover={{scale:1.5}} whileTap={{scale:1}}><img src="/youtube.png" alt="Youtube Page" /></motion.a>
            </div>
          </div>
        </div>
    )
}

export default Navbar