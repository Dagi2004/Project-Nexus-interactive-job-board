import React from "react";
import Logo from "../../assets/images/joblogo.png"
import Button from "./Button";
import { JobListing } from "../../interfaces";
const JobCard:React.FC<JobListing>=(jobs)=>{
    const hour=new Date(jobs.posted_date)
return(
    <div className="bg-[#C9DFF3] w-full p-4 md:max-w-[320px] h-auto rounded-md overflow-hidden">
    <div className="mx-auto py-2 px-4">
<p className="text-sm text-center text-[#AC25C2] mb-4">Posted:{hour.getHours()} hour ago</p>

<div className="flex items-center">
         
            <img src={Logo} className="w-[28px] h-[28px]" alt="Company Logo" />
    
          <h1 className="text-center md:text-2xl text-xl ml-2 break-words">{jobs.title}</h1>
        </div>
<p className="text-center text-black">{jobs.description}</p>

    </div>
    <div className="grid grid-cols-2 gap-3">
<div>
<h2 className="text-black font-bold  break-words">{jobs.location}</h2>
<h2 className="text-black font-bold  break-words">{jobs.salary_range}</h2>
</div>
<div>
  
<h2 className="text-black font-bold  break-words">  {jobs.employmentType.C ? "Contract" : jobs.employmentType.PT ? "Part Time" : jobs.employmentType.F ?"Freelance" : jobs.employmentType.FT ? "Full Time" : "Internship"}</h2>
<h2 className="text-black font-bold  break-words"> {jobs.experienceLevel.E ? "Entry-Level" : jobs.experienceLevel.M ? "Mid-Level" : "Senior Level"}</h2>
</div>


    </div>
  
    <div className="flex items-center justify-center">
<Button butttonLabel="Apply Now" buttonBackgroundColor="blue" buttonDimension="medium"/>
    </div>
    </div>
)
}
export default JobCard