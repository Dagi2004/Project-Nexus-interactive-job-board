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
    buttonBackgroundColor:"blue"
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