import { LoginResponse } from "@/types/auth";
import { create } from "zustand";

type CurrentUserType = {
   details: LoginResponse | null,
   setUser: (newDetails: LoginResponse) => void;
}

const currentUser = create<CurrentUserType>((set) => ({
   details: null,
   setUser: (newDetails: LoginResponse)=> set(() => ({ details: newDetails}))
}))

export default currentUser;