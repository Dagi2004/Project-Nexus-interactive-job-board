import axios from "axios";


/*Axios Instance Creation*/
const api=axios.create({
    
    baseURL:"https://alx-jobboard-api.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

//Log Out users if Expired
const logoutUser=()=>{
   
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    window.location.href="/login"
  
}

//Refresh Token After Expiration
const refreshToken=async()=>{
    try{
    const refreshToken=localStorage.getItem("refreshToken")
    if(!refreshToken) throw new Error("No refresh Token Found")
    const response=await api.post("/api/token/refresh",{
refresh:refreshToken})
localStorage.setItem("accessToken",response.data.access)
return response.data.access
    } catch(error){
console.log("Token Refresh Failed", error)
logoutUser()
return null
    }
}

// Request Interceptors
axios.interceptors.request.use(
    (config)=>{
        const accessToken=localStorage.getItem("accessToken")
        if(accessToken){
            config.headers["Authorization"]=`Bearer ${accessToken}`;
        }
        return config
    } , error=>{
        return Promise.reject(error)
    }
)

// Response Interceptors
axios.interceptors.response.use(
    (response)=>response,
    async error=>{
        const status=error.response ? error.response.status : null;
        const originalRequest=error.config
        if(status===401 &&!originalRequest._retry) {
            originalRequest._retry=true
           const newToken =await refreshToken()
           if(newToken){
            localStorage.setItem("accessToken",newToken)
            error.config.headers["Authorization"]=`Bearer ${newToken}`
            return api(originalRequest)
           }
        
           
        }
        return Promise.reject(error)

    }
)

export default api