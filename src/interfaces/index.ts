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
  
    buttonDimension:"small"| "medium"
    buttonBackgroundColor:"blue"
    action?:()=>void
}