import { useState } from "react";
import JobApplication from "../interfaces";
import axios from "axios";

const useFormApplication = (
  initialValues: JobApplication = {
    firstName: "",
    lastName: "",
    email: "",
    jobId: "",
    resume: "",
  }
) => {
  const [applicationValue, setApplicationValue] =
    useState<JobApplication>(initialValues);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setErrors] = useState<Partial<JobApplication>>({});
  const [apierror, setApiError] = useState<string | null>(null);

  const validate = (values: JobApplication) => {
    const errors: Partial<JobApplication> = {};
    if (!values.email.includes("@")) errors.email = "❌ Invalid Email";
    if (!values.firstName) errors.firstName = "❌ First Name is Required";
    if (!values.lastName) errors.lastName = "❌ Last Name is Required";
    if (!values.resume) errors.resume = "❌ Resume is Required";
    if (values.resume.length > 1000) errors.resume = "❌ Max Length Exceeded";
    if (!values.jobId) errors.jobId = "❌ Job ID is Required";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValues = { ...applicationValue, [name]: value };
    setApplicationValue(updatedValues);
    setErrors(validate(updatedValues)); // Validate updated values
  };

  const resetForm = () => {
    setApplicationValue(initialValues);
    setErrors({}); // Clear errors
    setApiError(null);
  };

  const onSubmit = async (values: JobApplication) => {
    try {
      const token = localStorage.getItem("access");
      if (!token) {
        setApiError("Please login before trying to submit the form");
        return;
      }

      const response = await axios.post(
        "https://alx-jobboard-api.onrender.com/api/applications/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Application submitted successfully");
      setShowSuccessModal(true); // Show success modal
      resetForm()
      return response;
    } catch (error) {
      setApiError("Registration Failed. Please Try Again");
      console.error("API Error:", error);
      resetForm();
    }
  };

  const handleSubmit = async () => {
    const validateError = validate(applicationValue);
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError); // Set errors if validation fails
      return;
    }

    await onSubmit(applicationValue); // Submit the form
  };

  return {
    handleChange,
    handleSubmit,
    error,
    applicationValue,
    apierror,
    showSuccessModal,
    setShowSuccessModal,
  };
};

export default useFormApplication;