import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 


const Header = () => {
  return (
    <div className=" bg-white w-full min-h-[90px] flex justify-between items-center md:px-[40px]
     px-5  sticky inset-0  border-b-[1px] " >
      <div className="text-3xl font-semibold font-mono text-gray-700">
        mini-match
      </div>
    <div className="font-poppins capitalize font-semibold hover:underline cursor-none text-center">
      welcome back, john! 😎
    </div>
    <div className="flex items-center gap-2">
      <div >
       <span className="text-sm md:text-2xl flex p-2 rounded-full text-slate-500 border border-slate-600 hover:bg-slate-600 
       hover:text-white
       cursor-pointer b transition-allduration-[0.5]">
        <IoIosNotificationsOutline />
        </span>
      </div>
    
      <div>
      <Avatar className="cursor-pointer w-8 h-8 md:w-[37px] md:h-full">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      </div>
    </div>
    </div>
  )
}

export default Header