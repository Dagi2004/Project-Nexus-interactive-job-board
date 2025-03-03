import { useState } from "react";
import { FormValues } from "../interfaces";
const useSignIn=(initalValues:FormValues)=>{
    const[values,setValues]=useState<FormValues>(initalValues);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const{name,value}=e.target
setValues(prevValues=>({...prevValues,[name]:value}))
    }
    const resetForm=()=>setValues(initalValues)
    return{
        values,handleChange,resetForm
    }
}

export default useSignIn