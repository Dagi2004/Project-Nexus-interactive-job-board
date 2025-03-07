import React from "react";
import CompanyProfile from "../../assets/images/CompanyProfile.png"
import Button from "./Button";

import { Job } from "../../interfaces";
import { useSavedJobs } from "../context/SavedJobsContext";
interface SavedJobsCardProps {
    job: Job;
  }
const SavedJobsCard:React.FC<SavedJobsCardProps>=({job})=>{
    const{removeJob}=useSavedJobs();
   
    const handleDeleteJobs=(jobId:string)=>{
        removeJob(jobId)
            }
    const hour=new Date(job.posted_date)
    
return(
    <div className="bg-[#C9DFF3] max-w-4xl leading-9 mx-auto border mb-6 border-blue-400 px-8 py-2 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row gap-6 items-center  justify-center mx-auto">
        
    <div className="md:w-1/2">
          <img
            src={CompanyProfile}
            alt="Company Logo"
            className="w-24 h-24  object-contain"
          />
        </div>
           
           
           
            <div className="md:w-1/2">
                
                    <h2 className="font-bold">Title:<span className="font-light">{job.title}</span></h2>
                    <h2 className="font-bold">Location:<span className="font-light">{job.location}</span></h2>
                
            
                <h2 className="font-bold">Salary Range:<span className="font-light">{job.salary_range}</span></h2>
                <h2 className="font-bold text-red-600">Posted Before : <span className="text-red-600 font-light">{hour.getHours()} hours ago</span></h2>
       <div className="flex justify-center items-center gap-6">
       <Button buttonBackgroundColor="blue" buttonDimension="medium" butttonLabel="Apply Now"/>
       <Button buttonBackgroundColor="red" buttonDimension="medium" butttonLabel="Delete Job" action={() => handleDeleteJobs(job.id)}/>
        </div>     

            </div>
            </div>
            
     
        </div>
)
}
export default SavedJobsCard
