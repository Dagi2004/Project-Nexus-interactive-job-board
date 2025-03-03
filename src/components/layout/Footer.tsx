import React from "react";

const Footer:React.FC = () => {
  return (
    <div>
    <footer className="bg-[#334861] w-full md:h-[293px] h-auto">
        {/* Logo Section */}
        <div className=" mx-auto px-5">
          

          {/* Navigation Sections */}
          <div className="flex flex-wrap justify-around space-y-8 md:space-y-0 gap-6">
          <div className="w-full md:w-1/4 py-5">
          <h1 className="text-white font-bold text-3xl p-2" id="Nexthire">NextHire</h1>
              <p className="text-white text-md leading-8">Discover the ultimate hub for connecting with exceptional job seekers and effortlessly filling your talent pipeline.</p>
            </div>
            {/* About Us Section */}
            <div className="w-full md:w-1/4 py-5">
              <h2 className="text-[30px] font-semibold text-white mb-4 text-center md:text-left">
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
              <h2 className="text-[30px] text-white font-semibold  mb-4 text-center md:text-left">
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
                    href="dagmawimilkias@gmail.com"
                    className="text-white  hover:text-blue transition duration-200 "
                  >
                  United States, MA
                  </a>
                </li>
                
                
                
              </ul>
            </div>

           

            {/* Stay Connected Section */}
            <div className="w-full md:w-1/4 ">
              <h2 className="text-xl font-semibold text-white mb-4 text-center md:text-left">
                Stay Connected
              </h2>
              <div className="flex justify-center md:justify-start space-x-5">
                <a href="#">
                  
                </a>
                <a href="#">
                  
                </a>
                <a href="#">
                 
                </a>
                <a href="#">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;