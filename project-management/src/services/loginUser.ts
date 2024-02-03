
import { LoginResponse, LoginType } from "@/types/auth";
import { Cookie } from "lucide-react";



const loginUser =async ({email, password}: LoginType)=> {
   const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
         "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({email, password})
   });
   const respObj = await response.json();
   if (response.ok) {
      console.log(respObj.da)
      return respObj.data as LoginResponse;
   }
   throw new Error(respObj.message)
   

}

export default loginUser;