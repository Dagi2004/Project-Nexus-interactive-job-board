import useFormApplication from "../hooks/useFormApplication";
import { useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SucesssModal from "../components/common/SucessModal";
import Button from "../components/common/Button";
import { FormEvent } from "react";

const JobApplication: React.FC = () => {
    const { jobId } = useParams(); 
   
    const { applicationValue, handleChange, handleSubmit, apierror, error,showSuccessModal,setShowSuccessModal  } =useFormApplication ({
      firstName:"",
      lastName:"",
      resume:"",
      email:"",
      jobId: jobId || "" // Default to empty string if undefined
    });

    return (
       <>

    <Header/>
       <div className="py-20 w-full mx-auto flex md:flex-row flex-col items-center justify-center  bg-[#253C56]">
          
          <div className="md:w-1/2 p-6 rounded-md">
              {apierror && (
                  <div className="bg-red-500 text-white w-full rounded-md p-2 text-center mb-2">
                      {apierror}
                  </div>
              )}
              
<h1 className="text-center text-[#2D9CDB] md:text-lg font-bold mb-4 text-sm">Job Application Form</h1>
{showSuccessModal && (
    <SucesssModal onClose={()=>setShowSuccessModal(false)}/>
)}
              <form
                  onSubmit={(e: FormEvent<HTMLFormElement>) => {
                      e.preventDefault(); // Prevent page refresh
                   
                      handleSubmit();
                   

                  }}
                 className="mx-auto  bg-[#C9DFF3] rounded-md p-9 grid md:grid-cols-2 grid-cols-1 gap-6"
              >
                 

                  <div className="mb-4 flex flex-col">
                      <label htmlFor="firstName" className="text-white mb-2">
                          FirstName
                      </label>
                      <input
                          type="text"
                          name="firstName"
                          value={applicationValue.firstName}
                          onChange={handleChange}
                          className="rounded-md p-3 border border-blue-600 bg-white focus:outline-none"
                          placeholder="Abebe23232"
                      />
                      {error.firstName && <p className="text-red-500">{error.firstName}</p>}
                  </div>
                  <div className="mb-4 flex flex-col">
    <label htmlFor="jobId" className="text-white mb-2">
        Job ID
    </label>
    <input
        type="text"
        name="jobId"
        value={applicationValue.jobId}
        onChange={handleChange}
        className="rounded-md p-3 bg-white border border-blue-600 focus:outline-none"
        placeholder="Enter Job ID"
    />
    {error.jobId && <p className="text-red-500">{error.jobId}</p>}
</div>

                  <div className="mb-4 flex flex-col">
                      <label htmlFor="lastName" className="text-white mb-2">
                          Last Name
                      </label>
                      <input
                          type="text"
                          name="lastName"
                          value={applicationValue.lastName}
                          onChange={handleChange}
                          className="rounded-md p-3 bg-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Last Name"
                      />
                      {error.lastName && <p className="text-red-500">{error.lastName}</p>}
                  </div>
                  <div className="mb-4 flex flex-col">
                      <label htmlFor="email" className="text-white mb-2">
                          Email
                      </label>
                      <input
                          type="email"
                          name="email"
                          value={applicationValue.email}
                          onChange={handleChange}
                          className="rounded-md p-3 bg-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Last Name"
                      />
                      {error.email && <p className="text-red-500">{error.email}</p>}
                  </div>
                  <div className="mb-4 flex flex-col">
                      <label htmlFor="resume" className="text-white mb-2">
                          Resume
                      </label>
                      <input
                          type="text"
                           name="resume"
                          value={applicationValue.resume}
                          onChange={handleChange}
                          className="rounded-md p-3 bg-white border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Resume "
                      />
                      {error.resume && <p className="text-red-500">{error.resume}</p>}
                  </div>

                  <div className="md:col-span-2 text-center">
                      <Button type="submit" butttonLabel="Submit" buttonBackgroundColor="blue" buttonDimension="medium" />
                  </div>

                  
              </form>
          </div>
      </div>
      <Footer/>
       </>
    );
};

export default  JobApplication
    