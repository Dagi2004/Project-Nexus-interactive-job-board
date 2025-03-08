import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Button from "../common/Button";
const Header: React.FC = () => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Job Search", path: "/job-search" },
    { name: "Saved Jobs", path: "/saved-jobs" },
    { name: "Job Application", path: "/job-application" },
  

  ];

return(
    <nav className="fixed top-0 z-10 w-full flex items-center justify-around p-4  px-6 md:px-16 bg-[#244A89]">
        <NavLink to="/">
         <h1 className="text-white font-bold text-3xl p-2" id="Nexthire">NextHire</h1>
        </NavLink>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                    isActive ? "text-[#2D9CDB] font-bold " : "text-white"
                  }`
                }
                end={item.path === "/"}
              >
                {item.name}
               
              </NavLink>
             
            
            </li>
          ))}
           <div className="flex items-center gap-3">
           
              <Button butttonLabel="Sign In" buttonBackgroundColor="blue" buttonDimension="small" action={() => navigate("/signin")} />
           
            <Button butttonLabel="Sign Up" buttonBackgroundColor="blue"buttonDimension="small"   action={() => navigate("/signup")} />
          
             
              </div>
        </ul>
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden text-white text-xl"
        >
          {isOpen ? "\u2715" : "\u2630"} {/* ✕ = Close, ☰ = Hamburger */}
        </button>
        {isOpen && (
          <div className="fixed right-0 top-[72px] flex h-screen w-2/3 flex-col items-center  justify-start gap-10 bg-[#244A89] shadow-md text-white p-8 md:hidden">
            <ul className="flex flex-col  gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] cursor-pointer transition-all duration-300 hover:opacity-100 opacity-80 ${
                        isActive ? "font-bold text-primary" : ""
                      }`
                    }
                    end={item.path === "/"}
                  >
                    {item.name}
                  </NavLink>
                 
                </li>
              ))}
                <div className="flex flex-col items-center gap-3">
                <Button butttonLabel="Sign In" buttonBackgroundColor="blue" buttonDimension="small"/>
                <Button butttonLabel="Sign Up" buttonBackgroundColor="blue"buttonDimension="small" />
                </div>
               
            </ul>
          </div>
           )}
        </nav>
)
}
export default Header