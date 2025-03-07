import { ButtonProps } from "../../interfaces"
import React from "react"
const Button:React.FC<ButtonProps>=({butttonLabel,buttonBackgroundColor,buttonDimension,action,type})=>{
const backgroundColorClass=buttonBackgroundColor ? {
     blue: "bg-[#2D9CDB]",
     red:"bg-[#EE5858]",
}[buttonBackgroundColor] : "bg-[#2D9CDB]"
const buttonDimesnionClass=buttonDimension ? {
    small:"px-3 py-1",
    medium:"px-6 py-2"
}[buttonDimension]:""
return(
    <button onClick={action} type={type} className={`${backgroundColorClass} ${buttonDimesnionClass} text-sm font-semibold rounded-md hover:${backgroundColorClass}/50 transition duration-300 text-white` }>{butttonLabel}</button>
);

}


export default Button