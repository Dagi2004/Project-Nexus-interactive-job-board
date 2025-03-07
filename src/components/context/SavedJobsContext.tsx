import { createContext,ReactNode,useContext,useState ,useEffect} from "react";
import { Job,SavedJobsContextProps } from "../../interfaces";
 const SavedJobsContext=createContext<SavedJobsContextProps | undefined>(undefined)
export const SavedJobsProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [savedJobs,setSavedJobs]=useState<Job[]>([])
   
    useEffect(()=>{
      const storedJobs=localStorage.getItem("jobs")
      if(storedJobs)
        setSavedJobs(JSON.parse(storedJobs))
    },[])
    const addJob=(job:Job)=>{
        const updatedJobs=[...savedJobs,job]
setSavedJobs(updatedJobs)
localStorage.set("jobs",JSON.stringify(updatedJobs))
    }
    const removeJob=(jobId:string)=>{
        const updatedJobs=savedJobs.filter((job)=>job.id!==jobId)
        setSavedJobs(updatedJobs)
        localStorage.setItem("jobs",JSON.stringify(updatedJobs))
    }
    
    return(
        <SavedJobsContext.Provider value={{savedJobs,removeJob,addJob}}>
            {children}
        </SavedJobsContext.Provider>
    )
}
export const useSavedJobs=():SavedJobsContextProps=>{
    const context=useContext(SavedJobsContext)
    if(!context){
        throw new Error("useSavedJobs must be used within a SavedJobsProvider")
    }
    return context;
};