import { UserRegistrationInfo } from "@/types/auth"

const signNewUser =async (userDetails: UserRegistrationInfo)=> {
   const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json; charset=utf-8"
      },

      body: JSON.stringify(userDetails)
   })
   const respObj = await response.json()

   return response.ok ? respObj.data : new Error(respObj.data)
}

export default signNewUser;