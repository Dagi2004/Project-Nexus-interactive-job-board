import JobCard from "../components/common/JobCard";
import Header from "../components/layout/Header";
import useJobs from "../hooks/useJobs";
import { BeatLoader } from "react-spinners";
const JobSearch:React.FC=()=>{
    const {jobs,loading,errors}=useJobs()
    if (loading)
        return (
          <div className="flex justify-center items-center h-screen">
            <BeatLoader color="#3B82F6" />
          </div>
        );
if(errors) return <div className="max-w-full bg-red-500 rounded-md p-4 text-white text-center">
<p>Error:{errors}</p>
</div>
return(
    <>
    <Header/>
    <section className="py-12 md:py-24 px-4 bg-[#253C56]">
    <div className="max-w-6xl mx-auto mt-12 md:mt-2 mb-10">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
<div>
<label htmlFor="category" className="text-white text-md ">Job Category</label>
<select id="category" className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500  bg-[#D9D9D9]">
    <option value="" >Select Category</option>
    <option value="Full Time">Full Time</option>
    <option value="Part-time">Part Time</option>
    <option value="Contract">Contract</option>
    <option value="Internship">Internship</option>
    <option value="freelance">Freelance</option>
</select>
</div>
<div>
    <label htmlFor="location" className="text-white text-md ">Location</label>
    <input type="text" name="location" id="location" className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500  bg-[#D9D9D9]" placeholder="Enter Location"/>
</div>
<div>
    <label htmlFor="experience" className="text-white text-md">Experience Level</label>
    <select className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500  bg-[#D9D9D9]">
    <option value="">Select Experience Level</option>
    <option value="Entry-Level">Entry-Level</option>
    <option value="Mid-Level">Mid-Level</option>
    <option value="Senior-Level">Senior Level</option>

</select>
    </div>
</div>
</div>
<div>
<div className="grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
{jobs.map((job,index)=>(
    
<JobCard key={index} {...job}/> 

    
))}


</div>
</div>

    

    </section>
    
    </>
)
}
export default JobSearch