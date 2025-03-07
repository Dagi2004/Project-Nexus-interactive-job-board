import React from "react";
import Logo from "../../assets/images/joblogo.png";
import Button from "./Button";
import Bookmark from "../../assets/images/bookmark.png";
import redBookmark from "../../assets/images/red-bookmark.png"
import { JobListing } from "../../interfaces";
import { useSavedJobs } from "../context/SavedJobsContext";
import { employmentTypeMap, experienceLevelMap } from "../../interfaces";

const JobCard: React.FC<JobListing> = ({ title, description, location, salary_range, employmentType, experienceLevel, posted_date, id }) => {
  const { addJob,savedJobs,removeJob } = useSavedJobs();
 


  const isSaved=savedJobs.some((savedJob)=>savedJob.id===id)
  const handleToggleJob=()=>{
    if(isSaved){
      removeJob(id)
    }
    else{
      addJob({id,title,salary_range,location,posted_date})
    }
  }
  const hour = new Date(posted_date);

  return (
    <div className="bg-[#C9DFF3] max-w-[1280px] p-4 md:max-w-[320px] h-auto rounded-md overflow-hidden">
      <div className="mx-auto py-2 px-4">
        <div className="flex justify-around items-center">
          <p className="text-sm text-center text-[#AC25C2] mb-4">
            Posted: {hour.getHours()} hour ago
          </p>
          {isSaved ? (
            <img
            src={redBookmark}
            alt="Book-Mark icon"
            className="w-[20px] h-[20px] text-white"
            onClick={handleToggleJob}
           
          /> )
          :(
            <img
            src={Bookmark}
            alt="Book-Mark icon"
            className="w-[20px] h-[20px] text-white"
           onClick={handleToggleJob}
          />
          )
}
          
        </div>

        <div className="flex items-center gap-2 justify-center mb-2">
          <img src={Logo} className="w-[28px] h-[28px]" alt="Company Logo" />
          <h1 className="text-center font-bold md:text-md text-sm ">{title}</h1>
        </div>
        <p className="text-center md:text-md text-sm text-black">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        <div className="mt-2 space-y-1 ">
          <h2 className="text-black font-bold m:text-md text-sm">{location}</h2>
          <h2 className="text-black font-bold m:text-md text-sm ">{salary_range}</h2>
        </div>
        <div className="mt-2 space-y-1 ">
          <h2 className="text-black font-bold m:text-md text-sm ">{employmentTypeMap[employmentType]}</h2>
          <h2 className="text-black font-bold m:text-md text-sm">{experienceLevelMap[experienceLevel]}</h2>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <Button
          butttonLabel="Apply Now"
          buttonBackgroundColor="blue"
          buttonDimension="medium"
        />
      </div>
    </div>
  );
};

export default JobCard;
