import { useState } from "react";
import { FormSignInValues } from "../interfaces";

import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/context/UserContext";
const useSignIn=(
    initalValues:FormSignInValues={
    username:"",
    password:""
})=>{
    const { setUsername } = useUser(); // Access the contex
 
  
    const[values,setValues]=useState<FormSignInValues>(initalValues);
    const[apiError,setApiError]=useState<string | null>(null)
    const[errors,setErrors]=useState<Partial<FormSignInValues>>({})
    const[successmessage,setSucessMessage]=useState<string | null>(null)
    const navigate=useNavigate();
    const validate=(values:FormSignInValues)=>{
        const errors:Partial<FormSignInValues>={}
        if(!values.username) errors.username="Username is required"
        if(!values.password) errors.password="Password is required"
        return errors;
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const{name,value}=e.target
const updatedValues={...values,[name]:value}
setValues(updatedValues)
setErrors(validate(updatedValues))
    }
    const resetForm=()=>{
        setValues(initalValues)
        setErrors({})
        setApiError(null)
    }
  
    const handleSubmit=async()=>{
     
try{
    const response=await api.post("/api/token/",values)
    if(response.data.access)
{
    localStorage.setItem("access",response.data.access)
    
    localStorage.setItem("refresh",response.data.refresh)
    console.log("Setting username:", values.username); // Debugging
    setUsername(values.username); 

    console.log(response.data.access,response.data.refresh)
    setSucessMessage("User Sucessfully Loged In")
    setApiError(null)
   setTimeout(()=>{
    navigate("/home")

   },1000)
       
resetForm()
}

    }  catch(error){
        setApiError("Login Failed! Invalid-Credential");
        resetForm()
        console.error(error)
        
    }
};
    return{
        values,handleChange,errors,apiError,successmessage,handleSubmit
    }
}


export default useSignIn