import React from 'react'
import Link from 'next/link'
import { Item } from '../context-api/store'
import { Card } from '@/components/ui/card';
import { GrShareOption } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { CalculateMatchScore } from '../utils/calculateMatchScore';
import { useDataContext } from '../context-api/store';
import { Progress } from "@/components/ui/progress";


interface Props {
  item: Item; 
}

const JobCard = ({item}:Props) => {
  const { userSkills,setMissingSkills} = useDataContext();
  const { matchScore, missingSkills} = CalculateMatchScore( item.skills,userSkills);
  
  
  return (
    <>
    <Card className=' sm:w-[400px] sm:mx-auto md:w-auto md:mx-0'>
    <div className='  p-6  min-h-[250px] overflow-hidden rounded-sm'>
    <Link href={`/post/${item.id}`} className='flex  flex-col gap-2'
     onClick={()=> setMissingSkills(missingSkills)}>
         <h1 className='font-poppins font-semibold hover:underline text-2xl'>{item.title}</h1>
         <p className='font-inter text-sm '>{item.company}</p>
         <p className='font-inter text-xs'>{item.location}</p>
         <h3 className=' bg-stone-100 rounded-sm p-2 w-auto opacity-70
         justify-center font-semibold'>{item.salary} a month</h3>
         <div>
           <Progress value={matchScore}  className={`h-3 mt-2 ${matchScore >= 80 ? "bg-green-500": matchScore >= 50 ? "bg-yellow-500": "bg-red-500"} `}/>
           <p className='font-poppins text-sm ml-2'>{matchScore}% match</p>
         </div>
         <div className='flex justify-between items-center '>
          <p className='font-inter text-xs'>Active 4 days ago</p>
          <div className='flex items-center gap-1 opacity-60'>
          <span><FaRegBookmark /></span>
          <span><GrShareOption /></span>
          </div>
         </div>
    </Link>
    </div>
    </Card>
    </>
  )
}

export default JobCard