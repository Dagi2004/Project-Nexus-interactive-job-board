import { useState } from "react";
import JobCard from "../components/common/JobCard";
import Header from "../components/layout/Header";
import useJobs from "../hooks/useJobs";
import { BeatLoader } from "react-spinners";
import { employmentTypeMap, experienceLevelMap, JobListing } from "../interfaces";
import Footer from "../components/layout/Footer";
const JobSearch: React.FC = () => {
    const [employmentType, setEmploymentType] = useState("");
    const [location, setLocation] = useState("");
    const [experience, setExperience] = useState("");

    const { jobs, loading, errors } = useJobs();

    const getEmploymentTypeCode=(fullName:string)=>{
return Object.keys(employmentTypeMap).find((key)=>employmentTypeMap[key as keyof typeof employmentTypeMap]===fullName);
    }
    const getExperienceLevelCode=(fullName:string)=>{
return Object.keys(experienceLevelMap).find((key)=>experienceLevelMap[key as keyof typeof experienceLevelMap]===fullName)
    }
    // Filter jobs based on selected criteria
    const filteredJobs = jobs.filter((job:JobListing) => {
        const selectedEmploymentCode=getEmploymentTypeCode(employmentType)
        const selectedExperienceCode=getExperienceLevelCode(experience)
        const filterByEmploymentType = selectedEmploymentCode ? job.employmentType === selectedEmploymentCode: true;
      
        const filterByLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
        const filterByExperienceLevel = selectedExperienceCode ? job.experienceLevel === selectedExperienceCode : true;

        return filterByEmploymentType && filterByExperienceLevel && filterByLocation;
    });

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#3B82F6" />
            </div>
        );

    if (errors)
        return (
            <div className="max-w-full bg-red-500 rounded-md p-4 text-white text-center">
                <p>Error: {errors}</p>
            </div>
        );

    return (
        <>
            <Header />
            <section className="px-4 py-12 md:py-24 bg-[#253C56]">
                <div className=" max-w-6xl mx-auto mt-12 md:mt-2 mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                        {/* Employment Type Dropdown */}
                        <div>
                            <label htmlFor="category" className="text-white text-md">
                                Job Category
                            </label>
                            <select
                                id="category"
                                className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-[#D9D9D9]"
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                            >
                                  <option value="">Select Employment Level</option>
                                {Object.entries(employmentTypeMap).map(([code,fullName])=>(
                                    <option key={code} value={fullName}>{fullName}</option>
                                ))}
                               
                            </select>
                        </div>

                        {/* Location Input */}
                        <div>
                            <label htmlFor="location" className="text-white text-md">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-[#D9D9D9]"
                                placeholder="Enter Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        {/* Experience Level Dropdown */}
                        <div>
                            <label htmlFor="experience" className="text-white text-md">
                                Experience Level
                            </label>
                            <select
                                id="experience"
                                className="w-full border border-gray-200 rounded-md p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-[#D9D9D9]"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            >
                                  <option value="">Select Experience Level</option>
                                {Object.entries(experienceLevelMap).map(([code,fullName])=>(
                                    <option value={fullName} key={code}>{fullName}</option>
                                ))}
                              
                              
                            </select>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                     
                        {filteredJobs.length > 0 ? (
                              <>
                             <h1 className="text-center text-2xl text-white col-span-full ">You have <span className="text-green-600 font-bold">{filteredJobs.length}</span>  jobs available</h1>
                           {filteredJobs.map((job, index) => 
                           (
                            <JobCard key={index} {...job} />
                           ))}
                        
                    </>
                           
                          
                        ) : (
                            <div className="max-w-[1280px]  col-span-full flex flex-col items-center justify-center mx-auto p-6 border border-red-300 bg-red-100 text-red-700 rounded-xl shadow-md [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]  ">
                                <p className="text-3xl">❌</p>
                                 <p className="text-sm text-white mt-1">Try adjusting your filters or check back later.</p>
                                <p>No Jobs Found</p>
                            </div>
                           
                        )}
                    

                    </div>
                </div>
                </>
                </section>
                <section>
                <Footer/>
                </section>
               
            
        </>
    );
};

export default JobSearch;
