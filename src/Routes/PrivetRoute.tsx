import { RootState } from "@/Redux/Store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import React from "react"
const PrivetRoute=({children})=>{
    const token=useSelector((state:RootState)=>state.auth.token)
   if(!token){
    return <Navigate to={'/login'} replace={true}/>
   }
   return children
}
export default PrivetRoute