import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import Button from "../components/common/Button"
import HeroImage from "../../src/assets/images/hero-section.png"
import { motion } from "motion/react"
import CreateProfile from "../../src/assets/images/Create-Profile.png"
import JobCard from "../components/common/JobCard"
import zigzagOne from "../.././src/assets/images/LineZigzagOne.png"
import zigzagTwo from "../../src/assets/images/LineZigzagTwo.png"
import SearchIcon from "../../src/assets/images/Search.png"
import ConnectIcon from "../../src/assets/images/Connect.png"
import React from "react"
import { BeatLoader } from "react-spinners"
import { Link } from "react-router-dom"
import useJobs from "../hooks/useJobs"
const Home:React.FC=()=>{
const {jobs,loading,errors}=useJobs()
const featuredJobs=jobs.slice(0,4)
if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#3B82F6" />
      </div>
    );


if(errors) return <div className="max-w-full bg-red-500 rounded-md p-2">
<p>Error:{errors}</p>
</div>
return(
    <>
    
    <Header/>
    <section className="mx-auto  bg-[#253C56] w-full h-auto">
<motion.div 
initial={{ opacity: 0 }}
animate={{  opacity: 1 }}
viewport={{ once: false, amount: 0.5 }}
transition={{
 
  duration: 1,
}}
className="flex md:flex-row flex-col justify-center items-center gap-4 py-10">
<motion.div 
  initial={{ y:-100, opacity: 0 }}
  animate={{ y:0, opacity: 1 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{
   delay:0.5,
   y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
    duration: 1,
  }}
className="md:w-1/2 text-center md:py-7 py-14">

<h2 className="font-bold mb-4 md:text-3xl text-2xl text-white ">Find Your Dream Job Today</h2>
<p className=" text-md text-white">Looking for a new job or the right hire? We can help! Explore opportunities, apply easily, and grow your career. Employers, post jobs and find top talent now!</p>
<motion.div 
 initial={{ y:-50, opacity: 0 }}
 animate={{ y:0, opacity: 1 }}
 viewport={{ once: false, amount: 0.5 }}
 transition={{delay:0.8, duration:1 , ease:"easeOut"}}
className="flex items-center justify-center mt-4">
    <Link to="/job-search">
    <Button buttonBackgroundColor="blue" buttonDimension="medium" butttonLabel="Apply Now"/>
    </Link>

</motion.div>
</motion.div>

<motion.div 
 initial={{ x:100, opacity: 0 }}
 animate={{x:0,opacity:1}}
 viewport={{ once: false, amount: 0.5 }}
 transition={{
    delay:0.5,
    y: { type: "spring", stiffness: 60 },
       opacity: { duration: 1 },
       ease: "easeOut",
     duration: 1,
   }}
className="md:w-1/2 mt-4">
<img src={HeroImage} alt="hero" className="max-w-[584px] w-full h-auto" />
</motion.div>

</motion.div>

    
    {/*Featured Jobs*/}
    <section className="mx-auto py-10">
<motion.div 

initial={{ y:-100, opacity: 0 }}
whileInView={{ y:0, opacity: 1 }}
viewport={{ once: false, amount: 0.5 }}
transition={{
 delay:0.5,
 y: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
  duration: 1,
}}

className="flex flex-col justify-center items-center gap-2">
    <h4 className="md:text-lg text-sm text-cente text-white ">Featured Jobs</h4>
    <p className="text-[#2D9CDB] md:text-3xl text-xl mb-3 font-medium">Top Jobs You Can Apply for Today!</p>
</motion.div>
<motion.div 
initial={{ x:-100, opacity: 0 }}
whileInView={{x:0,opacity:1}}
transition={{
   delay:0.5,
   y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeOut",
    duration: 1,
  }}
className="grid sm:gris-cols-1 md:gap-4 gap-6 md:grid-cols-3 lg:grid-cols-4 place-items-center">
{featuredJobs.map((job,index)=>(
    
<JobCard key={index} {...job}/> 

    
))}


</motion.div>

    </section>

    <section className="mx-auto py-10">
        {/* How It Works*/}
        <div className="flex flex-col justify-center items-center gap-2">
    <h4 className="md:text-lg text-sm text-center text-white ">How It Works</h4>
<p className="text-[#2D9CDB] md:text-3xl text-xl mb-6 font-medium">Your Path to Success</p>
</div>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
<motion.div 

initial={{ y:-100, opacity: 0 }}
whileInView={{ y:0, opacity: 1 }}
transition={{
 delay:0.5,
 y: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
  duration: 1,
}} className="w-[300px] md:w-[392px] h-auto rounded-md bg-[#B4EEF5] p-4">
<div className="w-full h-auto p-2 bg-[#244A89] rounded-lg">
    <p className="text-center text-white">Step 1 </p>
</div>

<div className="mt-2 mx-auto flex flex-col justify-center items-center">
<h2 className="font-bold text-black mb-3">Create your profile</h2>
<img src={CreateProfile} alt="Create Profile" className="w-[80px] h-[80px]" />
<p className="text-black text-sm mb-4 text-center">Sign up and complete your profile with your skills, experience, and career goals. A strong profile increases your chances of getting hired!</p>
<Button butttonLabel="Sign Up" buttonBackgroundColor="blue" buttonDimension="medium"/>
</div>
</motion.div>
<img src={zigzagOne} alt="Zigazag Line Ome" className="hidden md:block w-[310px] h-auto"/>
</div>

<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
<img src={zigzagTwo} alt="Zigazag Line Ome"   className="hidden md:block w-[310px] h-auto"/>
<motion.div 
initial={{ x:-100, opacity: 0 }}
whileInView={{x:0,opacity:1}}
viewport={{ once: false, amount: 0.5 }}
transition={{
   delay:0.5,
   y: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeOut",
    duration: 1,
  }} className="w-[300px] md:w-[392px] h-auto rounded-md bg-[#B4EEF5] p-4">
<div className="w-full h-auto p-2 bg-[#244A89] rounded-lg">
    <p className="text-center text-white">Step 2 </p>
</div>

<div className="mt-2 mx-auto flex flex-col justify-center items-center">

<h2 className="font-bold text-black mb-3">Search & Apply for Jobs</h2>
<img src={SearchIcon} alt="Create Profile" className="w-[80px] h-[80px] mb-2" />
<Link to="/job-application">
<p className="text-black text-sm mb-4 text-center">Browse thousands of job listings across various industries. Use filters to find jobs that match your skills and preferences</p>
<Button butttonLabel="Apply Now" buttonBackgroundColor="blue" buttonDimension="medium"/>
</Link>
</div>
</motion.div>

</div>
<div className="flex flex-row justify-center items-center mx-auto">
<motion.div 
 initial={{ y:-50, opacity: 0 }}
 whileInView={{ y:0, opacity: 1 }}
 viewport={{ once: false, amount: 0.5 }}
 transition={{delay:0.8, duration:1 , ease:"easeOut"}} className="w-[300px] md:w-[392px] h-auto rounded-md bg-[#B4EEF5] p-4">
<div className="w-full h-auto p-2 bg-[#244A89] rounded-lg">
    <p className="text-center text-white">Step 3 </p>
</div>

<div className="mt-2 mx-auto flex flex-col justify-center items-center">
<h2 className="font-bold text-black mb-3">Connect & Get Hired</h2>
<img src={ ConnectIcon} alt="Create Profile" className="w-[80px] h-[80px] mb-2" />
   <Link to="/job-search">
<p className="text-black text-sm mb-4 text-center">Submit applications directly to employers and receive updates on your job status. Chat with recruiters and land your next opportunity!</p>
<Button butttonLabel="Apply Now" buttonBackgroundColor="blue" buttonDimension="medium"/>
</Link>
</div>
</motion.div>

</div>
    </section>
    <Footer/>
    </section>
   
  
    </>
)

}
export default Home