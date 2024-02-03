import currentUser from "@/zustand/user/currentUser.zustand"

function UserInfo() {
  const userDetails = currentUser((state)=> (state.details));
  console.log(userDetails)
  return (
    <div className="flex items-center gap-2">
      <span className= "flex justify-center items-center bg-pink-500 text-pink-700 w-10 h-10 rounded-full">RG</span>
      <div className="">
         <p className="text-sm font-bold ">Anioke Sebastian</p>
         <p className="text-[.8rem] leading-[1.2]">aniokechukwudi7@gmail.com</p>
      </div>
    </div> 
  )
}
export default UserInfo