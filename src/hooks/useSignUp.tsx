import { useState } from "react";
import { FormSignUpValues } from "../interfaces";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignUp = (
  initialValues: FormSignUpValues = {
    username: "",
    password: "",
    email: "",
  }
) => {
  const [values, setValues] = useState<FormSignUpValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormSignUpValues>>({});
  const[apierror,setApiError]=useState<string | null>(null)
  const[successmessage,setSucessMessage]=useState<string | null>(null)

  const validate = (values: FormSignUpValues) => {
    const errors: Partial<FormSignUpValues>= {}; // Initialize as an empty object
    if (!values.username) errors.username = "❌Username is required";
    if (!values.email.includes("@")) errors.email = "❌Invalid Email";
    if (!values.password) errors.password = "❌Password is required";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
    setErrors(validate(updatedValues)); // Validate updated values
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({}); // Clear errors
    setApiError(null)
  };
  const navigate=useNavigate();
  const onSubmit=async(values:FormSignUpValues)=>{
   
        try{
const response=await axios.post("https://alx-jobboard-api.onrender.com/api/register/",values)

console.log(response)
setSucessMessage("User Registred Sucessfully")

setTimeout(()=>{
  navigate("/login")
},1000)

resetForm()
return response
        }catch(error){
console.error(error,"Registration Failed. Please Try Again")
setApiError("Registration Failed. Please Try Again")
resetForm()
        }

    }

 
  const handleSubmit = async() => {
    const validateError = validate(values);


    if (Object.keys(validateError).length === 0) { 
   await(onSubmit(values)) // No errors, proceed with submission


    } else {
      setErrors(validateError); // Set errors if validation fails
    }
  };
 
  return {
    values,
    errors,
    handleChange,
    resetForm,
    handleSubmit,
    successmessage,
    apierror
  };
};

export default useSignUp;