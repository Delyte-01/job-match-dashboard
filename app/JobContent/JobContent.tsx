

"use client"
import React from 'react'
import { useDataContext,Item } from '../context-api/store'
import JobCard from './JobCard'
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'




const JobContent = () => {

 const { data,isLoading  } = useDataContext();
    


  return (
    <>
    <div className='px-5 sm:px-20 md:px-30 lg:px-40'>
        <div className='py-7'>
            <h3 className='font-poppins font-semibold text-xl hover:underline '>Jobs recommendation</h3>
            <p className='font-inter opacity-80 text-base'>Your personalized job recommendations are front and center! Based on your skills, location, and preferences, we’ve curated roles that align with your expertise and goals. Each recommendation highlights key details like job type, pay range, and employer ratings, so you can quickly compare opportunities. Use the ‘Quick Apply’ button to submit your profile in seconds, or save jobs to revisit later. The more you interact with listings, the smarter our suggestions become—ensuring you spend less time searching and more time landing your next gig. Dive in and discover your perfect match!</p>
        </div>
        <div  className='py-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
         
           {
            isLoading ? [...Array(10)].map((_, i) => (
              
              <Card key={i} className='sm:w-[400px] sm:mx-auto md:w-auto md:mx-0 '  >
                <div className='p-6  min-h-[250px] overflow-hidden rounded-sm  space-y-5'>
                 <Skeleton className="h-8 w-full " /> 
                <Skeleton className="h-5 w-20" /> 
                <Skeleton className="h-5 w-30" /> 
                <Skeleton className="h-6 w-48" /> 
                <Skeleton className="h-4 w-48" /> 
                </div>
              </Card>
              
            )): data && data.map((item,index)=>(
            
             <JobCard 
              item={item}
              key={index}
             />
             ))

           }
        </div>
    </div>
    </>
  )
}

export default JobContent