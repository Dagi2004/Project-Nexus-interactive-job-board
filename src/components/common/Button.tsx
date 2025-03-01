import { ButtonProps } from "../../interfaces"
import React from "react"
const Button:React.FC<ButtonProps>=({butttonLabel,buttonBackgroundColor,buttonDimension,action})=>{
const backgroundColorClass=buttonBackgroundColor ? {
     blue: "bg-[#2D9CDB]"
}[buttonBackgroundColor] : "bg-[#2D9CDB]"
const buttonDimesnionClass=buttonDimension ? {
    small:"px-3 py-1",
    medium:"px-4 py-2"
}[buttonDimension]:""
return(
    <button className={`${backgroundColorClass} ${buttonDimesnionClass} text-sm font-semibold rounded-md hover:${backgroundColorClass}/50 transition duration-300 text-white` } onClick={action}>{butttonLabel}</button>
);

}


export default Button