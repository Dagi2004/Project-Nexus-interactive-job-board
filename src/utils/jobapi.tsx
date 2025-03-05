import axios from "axios";
import { JobListing } from "../interfaces";
 const fetchJobs=async():Promise<JobListing[]>=>{
    try{
        const response=await axios.get<JobListing[]>("https://alx-jobboard-api.onrender.com/api/jobs/")
        return response.data
    } catch(err:unknown){
        if(err instanceof Error){
            console.error("Failed to Fetch Jobs",err.message)
        }
        else{
            console.error("Unknown Erro Occured")
        }
        throw err
    }
 

}
export default fetchJobs