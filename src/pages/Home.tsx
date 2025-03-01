import Header from "../components/layout/Header"
import { BrowserRouter } from "react-router-dom"
import React from "react"
const Home:React.FC=()=>{
return(
    <>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
  
    </>
)

}
export default Home