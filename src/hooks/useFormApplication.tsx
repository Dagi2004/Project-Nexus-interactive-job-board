import { useState } from "react"
import {  JobApplication } from "../interfaces"
import axios from "axios";

const useFormApplication = (
  initialValues: JobApplication = {
    firstName: "",
    lastName: "",
    email: "",
    jobId:"",
    resume:""
  }
) => {
    const[applicationValue,setApplicationValue]=useState<JobApplication>(initialValues);
    const[error,setErrors]=useState<Partial<JobApplication>>({})
    const[apierror,setApiError]=useState<string | null>(null)
  const[successmessage,setSucessMessage]=useState<string | null>(null)
  const validate=(values:JobApplication)=>{
    const errors: Partial<JobApplication>= {}; // Initialize as an empty object
    if (!values.email.includes("@")) errors.email = "❌Invalid Email";
        if(!values.firstName) errors.firstName="❌ First Name is Required"
  if(!values.firstName) errors.lastName="❌ Last Name is Required"
  if(!values.resume) errors.resume="❌ Resume is Required"
  if(values.resume.length>1000) errors.resume= "❌ Max Lenght has exceeded"
  if (!values.jobId) errors.jobId = "❌ Job ID is Required"; // Ensure jobId is sent
  return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValues = { ...applicationValue, [name]: value };
    setApplicationValue(updatedValues);
    setErrors(validate(updatedValues)); // Validate updated values
  };
  const resetForm = () => {
    setApplicationValue(initialValues);
    setErrors({}); // Clear errors
    setApiError(null)
  };
  const onSubmit=async(values:JobApplication)=>{
try{
    const token=localStorage.getItem("access")
    if(!token)
    {
        setApiError("Please login before trying to submiy Form")
        
    }
    const response=await axios.post("https://alx-jobboard-api.onrender.com/api/applications",values,{
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
    })
    console.log("Application submitted successfully");
    setSucessMessage("Application has been successfully sent. We will reach out to you if you are a fit for the job.");

    return response
} catch(error){
    setApiError("Registration Failed. Please Try Again")
    console.log(error)
    resetForm()
}
  }
  const handleSubmit=async()=>{
    const validateError = validate(applicationValue);
    if(Object.keys(validateError).length===0){
      await onSubmit(applicationValue)  
    }
    else{
        setErrors(validateError); // Set errors if validation fails
    }

  }
  return {handleChange,handleSubmit,error,applicationValue,successmessage,apierror}

}
export default useFormApplication