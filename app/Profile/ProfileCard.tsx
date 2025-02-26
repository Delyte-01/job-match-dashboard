// import { Image } from 'next/Image'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import phone from '../images/phoneChart3.jpg'
import { FiEdit3 } from "react-icons/fi";
  
const ProfileCard = () => {
  return (
    <div className="p-3 md:p-10 min-h-[100vh] lg:w-[500px] lg:mx-auto">
    <Card className="min-h-[80vh]">
    <CardHeader className="text-center">
        <CardTitle className="flex justify-center items-center gap-1" >
            <h2>
                Edit profile
            </h2>
            <span>
            <FiEdit3 />
            </span>
        </CardTitle>
        <CardDescription>
          <p>see your details here ..</p>
            </CardDescription>
    </CardHeader>
    <CardContent>
        <div className="rounded-full overflow-hidden object-cover w-[180px] h-[180px] border
        mx-auto border-blue-600 shadow-lg cursor-pointer">
          <Image
            src={phone}
            alt="profile image"/>
        </div>
        <div className=" p-2 w-full mt-7">
            <div className="flex flex-col gap-2 py-2">
              <label className="font-semibold font-poppins">Name</label>
              <div className="border p-2 shadow-sm rounded-sm  font-inter text-sm">John doe</div>
            </div>
            <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold font-poppins" >Email</label>
            <div className="border p-2 shadow-sm rounded-sm  font-inter text-sm">johndoe@gmailcom</div>
            </div>
            <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold font-poppins">location</label>
            <div className="border p-2 shadow-sm rounded-sm  font-inter text-sm">Lagos,Nigeria</div>
            </div>
            <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold font-poppins">Skills</label>
            <div className="border p-2 shadow-sm rounded-sm  font-inter text-sm">
              <ul>
                <li>React</li>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>"Node.js</li>
                <li>AWS</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Machine Learning</li>
                <li>JIRA</li>
              </ul>
            </div>
            </div>
            <div></div>
        </div>
    </CardContent>
    </Card>
    </div>
  )
}

export default ProfileCard