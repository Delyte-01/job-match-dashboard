import { MdOutlineDownloading } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCoinsLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import {
    Card,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"


const overviewArry =[
    {
        icon:<RiCoinsLine />,
        number:1653.33,
        totalEarn:"total earnings",
        classname:"bg-blue-500 "
    },{
        icon:<IoMdCheckmarkCircleOutline />,
        number:134,
        totalEarn:"completed jobs",
        classname:"bg-violet-500 "
    },{
        icon:<MdOutlinePendingActions />,
        number:12,
        totalEarn:"pending approval",
        classname:"bg-yellow-500 "
    },{
        icon:<MdOutlineDownloading />,
        number:26,
        totalEarn:"ongoing jobs",
        classname:"bg-blue-800 "
    }
]
const Overview = () => {
  return (
    <>
   
    <div className="py-7 sm:px-33 sm:px-30 2xl:px-60 justify-center items-center ">
        <h2 className="font-poppins pl-8 text-slate-600 hover:underline">
        <Button variant="ghost">Overview</Button>
        </h2>
        <div className="grid grid-cols-1 grid-rows-4 p-4 gap-4 sm:grid-cols-2 sm:grid-rows-2
         lg:grid-cols-4 lg:grid-row-1  md:h-40 ">
                {
                    overviewArry.map((data,i)=>(
                        <>
                        <Card  className="w-[240px] mr-auto sm:m-auto py-5 md:mx-0 md:w-full cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center justify-center gap-2 " key={i}>
                            <div className={`${data.classname} text-slate-50 p-2 rounded-full`}>
                                <span className="flex text-2xl">{data.icon}</span>
                            </div>
                            <div>
                                <h2 className="font-semibold font-poppins">{data.number}</h2>
                                <p className="text-gray-400 text-sm capitalize">{data.totalEarn}</p>
                            </div>
                        </div>
                        </Card>
                        </>
                    ))
                }
        </div>
    </div>
 </>
  )
}

export default Overview