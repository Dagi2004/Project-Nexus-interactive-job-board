import React from 'react'
import AboutUsImage from "../../src/assets/images/About-us.png"
import Header from '../components/layout/Header'
import userCentricDesign from "../../src/assets/images/user-centric-design.png"
import AdvancedFiltering  from "../../src/assets/images/AdvancedFiltering.png"
import AccessibilityFirst from "../../src/assets/images/Accessibility-First.png"
import seamlessIntegration from "../../src/assets/images/Seamless-Integration.png"
import VisionImage from "../../src/assets/images/vision.png"
import MissionImage from "../../src/assets/images/Misson.png"
import Footer from "../components/layout/Footer";
const About:React.FC=() => {
  return (
    <>
     <Header/>
     <section className="mx-auto  bg-[#253C56] w-full h-auto">
<div className="flex md:flex-row flex-col justify-center items-center gap-4 py-10">
<div className="md:w-1/2 text-center md:py-7 py-14">
<h2 className="font-bold  md:text-3xl text-2xl text-white mb-4 ">About Us</h2>
<p className=" text-md text-white leading-8">The Interactive Job Board Platform is designed to simplify the job search process for  professionals across various industries. Our mission is to connect talented individuals  with the right opportunities while providing recruiters with a seamless hiring  experience.</p>
</div>
<div className="md:w-1/2 mt-4">
<img src={AboutUsImage} alt="hero" className="max-w-[584px] w-full h-auto" />
</div>
</div>
<section className='py-12 mx-auto'>
<div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={VisionImage}
             alt="Our Vision"
              className="max-w-[280px] lg:w-[320px] h-[347px] rounded-[32px] object-cover lg:mb-0 mb-3"
            />

            {/* Vision  */}
            <div className="flex flex-col justify-center  space-y-4 space-x-5 items-center mx-auto">
              <h1 className="md:text-3xl text-2xl  text-center text-white font-semibold">
              Our Vision
              </h1>
              <p className=" text-md max-w-lg leading-8 text-center  text-white">
              To become the go-to platform for job seekers and employers by providing an innovative,  accessible, and user-friendly job search experience.
              </p>
             
            </div>
          </div>

          {/* Mission Post  */}
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-8 mt-9">
            <div className="flex flex-col justify-center space-x-5 items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center text-white md:text-left  font-semibold ">
              Our Mission
              </h1>
              <ul className=" text-md max-w-lg leading-8 text-center list-disc  text-white">
            <li>
            Empower job seekers by providing intuitive search and filtering options. 
            </li>
             
<li>
Offer recruiters an efficient way to post jobs and connect with top talent.  
</li>

<li>
Ensure a seamless and inclusive job application process.
</li>

              </ul>
            
            </div>
            {/* Blog Image */}
            <img
              src={MissionImage}
             alt="Our Mission"
          className="max-w-[280px] lg:w-[320px] h-[347px] rounded-[32px] object-cover  lg:mb-0 mt-4 lg:mt-0"
            />

            {/* Blog Content */}
          </div>
</section>
{/*Why Choose Us section*/}
<section className='py-10'>
   <h2 className='text-white text-center mb-6 text-2xl md:text-3xl'>Why Choose Us?</h2>
   <div className='grid sm:grid-cols-1 md:grid-cols-2 place-items-center gap-5 mx-auto '>
   
<div className='flex flex-col items-center justify-center w-[440px] h-auto bg-[#B4EEF5] p-2 rounded-md'>
<h2 className='text-black text-2xl md:text-xl font-bold'>User-Centric Design</h2>
    <img src={userCentricDesign} alt="UserCentricDesign"  className='w-[160px] h-auto mb-3' />
    <p className='text-black text-center'> A streamlined interface that makes job searching easy  and efficient.</p>

</div>
<div className='flex flex-col items-center justify-center w-[440px] h-auto bg-[#B4EEF5] p-2 rounded-md'>
<h2 className='text-black text-2xl md:text-xl font-bold'>Advanced Filtering Options</h2>
    <img src={AdvancedFiltering} alt="Advanced Filtering Options"   className='w-[160px] h-auto mb-3'/>
    <p className='text-center'> Find the most relevant job listings based on  category, location, and experience level.</p>

</div>
<div className='flex flex-col items-center justify-center w-[440px] h-[auto] bg-[#B4EEF5] p-2 rounded-md'>
<h2 className='text-black text-2xl md:text-xl font-bold'>Advanced Filtering Options</h2>
    <img src={AccessibilityFirst} alt="Accessibility First"  className='w-[160px] h-auto mb-3' />
    <p className='text-black text-center'>  Designed to be fully accessible and responsive for all users.</p>

</div>
<div className='flex flex-col items-center justify-center w-[440px] h-auto bg-[#B4EEF5] p-2 rounded-md'>
<h2 className='text-black text-2xl md:text-xl font-bold'>Seamless Integration</h2>
    <img src={seamlessIntegration} alt="Seamless Integration"  className='w-[160px] h-auto mb-3'/>
<p className='text-black text-center'>Smooth interactions and fast performance for an  optimal experience.</p>
    </div>

   </div>

</section>
<Footer/>
       </section>
    </>
   
  )
}

export default About;