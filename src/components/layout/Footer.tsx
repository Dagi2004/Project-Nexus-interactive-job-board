import React from "react";
import { motion } from "motion/react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer:React.FC = () => {
  return (
    
    <motion.footer 
    

  initial={{ y:-100, opacity: 0 }}
  animate={{ y:0, opacity: 1 }}
  transition={{
   delay:0.5,
   y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
    duration: 1,
  }}
    
    className="bg-[#334861] w-full md:h-[293px] h-auto">
        {/* Logo Section */}
        <div className=" mx-auto px-5">
          

          {/* Navigation Sections */}
          <div className="flex flex-col md:flex-row flex-wrap justify-around space-y-6 md:space-y-0 gap-6">
          <div className="w-full md:w-1/4 flex flex-col items-center justify-center py-5">
          <h1 className="text-white font-bold text-xl p-2" id="Nexthire">NextHire</h1>
              <p className="text-white text-center text-md leading-8">Discover the ultimate hub for connecting with exceptional job seekers and effortlessly filling your talent pipeline.</p>
            </div>
            {/* About Us Section */}
            <div className="w-full  md:w-1/4 py-2 md:py-5">
              <h2 className="text-xl font-semibold text-white mb-4 text-center md:text-left">
               Quick Links
              </h2>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#13274F] transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#13274F] transition duration-200"
                  >
                   About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#13274F] transition duration-200"
                  >
                  Saved Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#13274F] transition duration-200"
                  >
                  Job Search
                  </a>
                </li>
                
               
        
              </ul>
            </div>

            {/* Resources Section */}
            <div className="w-full md:w-1/4 py-5">
              <h2 className="text-xl text-white font-semibold  mb-4 text-center md:text-left">
              Contact Info
              </h2>
              <ul className="space-y-5 text-center md:text-left">
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-blue transition duration-200"
                  >
                   Phone Number:908-915-6258
                  </a>
                </li>
                <li>
                  <a
                     href=""
                    className="text-white  hover:text-blue transition duration-200 hover:underline"
                  >
                   dagmawimilkias@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white  hover:text-blue transition duration-200 "
                  >
                  United States, MA
                  </a>
                </li>
                
                
                
              </ul>
            </div>
            </div>

           
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6 text-center md:text-left">
<p className="text-center text-white">© 2025 Next Hire. All Rights Reserved.</p>
<div className="flex flex-row gap-10">
              <a href="https://et.linkedin.com/in/dagmawi-milkias" target="blank" rel="noopener noreferrer">
            <CiLinkedin className="md:w-10 md:h-10 w-7 h-7 text-white cursor-pointer"/>
            </a>
            <a href="https://github.com/Dagi2004" target="blank" rel="noopener noreferrer">
            <FaGithub className="md:w-10 md:h-10 w-7 h-7 text-white cursor-pointer"/>
            </a>
            <a href="https://t.me/DagmawiDev" target="blank" rel="noopener noreferrer">
            <FaTelegram className="md:w-10 md:h-10 w-7 h-7 text-white cursor-pointer"/>
            </a>
           

</div>
            {/* Stay Connected Section */}
            
          </div>
         
        </div>
      </motion.footer>
  
  );
};
export default Footer;