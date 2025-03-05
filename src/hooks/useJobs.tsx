import { useState,useEffect } from "react";
import fetchJobs from "../utils/jobapi";
import { JobListing } from "../interfaces";

const useJobs=()=>{
    const[jobs,setJobs]=useState<JobListing[]>([])
    const [loading,setLoading]=useState<boolean>(true)
    const[errors,setErrors]=useState<string | null >(null)
    useEffect(()=>{
        const loadJobs=async()=>{
            try{
                const data=await fetchJobs()
                setJobs(data)
            
            } catch(err){
                setErrors(err instanceof Error ? err.message : "failed to fetch Jobs")
            } finally{
                setLoading(false)
            }

}
    loadJobs()

    },[])
    return{errors,loading,jobs}
}

export default useJobs   