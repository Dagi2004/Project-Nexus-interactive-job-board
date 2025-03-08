export interface employmentType{
FT:string
PT:string
C:string
F:string
I:string
}

export interface experienceLevel{
    E:string
    M:string
    S:string
    }
    
export interface Jobs{
    id:string
    title:string
    description:string
    logo:string
    location:string
    posted_date:string
    salary_range:string
    employment:employmentType
    experience:experienceLevel
}
export interface ButtonProps{
    butttonLabel:string
  type?: "button" | "submit" | "reset"
    buttonDimension:"small"| "medium"
    buttonBackgroundColor:"blue" | "red"
    action?:()=>void
}
export interface FormSignUpValues{
    username:string
email:string
password:string
}
export interface FormSignInValues{
   
username:string
password:string
}
export type EmploymentType="FT" | "PT" | "C" | "F" | "I"
export const employmentTypeMap:{
    [key in EmploymentType]:string}={
        "FT":"Full Time",
        "PT":"Part Time",
        "C":"Contract",
        "F":"Freelance",
        "I":"Internship",
        
    }
    export type ExperienceLevel="E" | "M" | "S"
    export const experienceLevelMap:{
        [key in ExperienceLevel]:string}={
            E:"Entry Level",
            M:"Mid Level",
            S:"Senior Level"
        }
    export interface Job{
        id:string
        title:string
        location:string
        posted_date:string
        salary_range:string
    }
    export default interface JobApplication{
        resume:string
        firstName:string
        lastName:string
        email:string
        jobId:string
    }
    export interface SavedJobsContextProps{
        savedJobs:Job[]
        addJob:(job:Job)=>void
        removeJob:(jobId:string)=>void
    }
export interface JobListing{
    id:string
    title:string
    logo:string
    description:string
    location:string
    posted_date:string
    salary_range:string
    employmentType:EmploymentType
    experienceLevel:ExperienceLevel
}