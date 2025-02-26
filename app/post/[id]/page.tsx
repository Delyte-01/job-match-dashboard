"use client"
import { useDataContext } from "@/app/context-api/store"
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";



  
const DetailsPage = () => {
   const { data,isLoading,error,missingSkills }= useDataContext();
 
   const router = useRouter();
   const params = useParams();
   const id = params.id 
   console.log(id)

   const handleShowMissingSkills =()=>{
    if(missingSkills.length > 0 ){
        // alert(`you are  missing these skills: ${missingSkills.join(",")}`);
        toast("missingSkills",{
            description:`you are  missing these skills: ${missingSkills.join(",")}`,
        })

    }else{
        toast("success",{
            description:"application successful",
            // variant:"destructive",
        },
    
    )
       
    }
    setTimeout(()=> router.push("/"),2000)
   
   }
   if(isLoading) return (
    <>
    <div className="p-5 ">
        {
             isLoading && [...Array(1)].map((_, i) => (
              
                <Card key={i} className='sm:w-[400px] sm:mx-auto md:w-auto md:mx-0 h-[500px]'  >
                  <div className='p-6  min-h-[250px] overflow-hidden rounded-sm  space-y-8'>
                   <Skeleton className="h-8 w-full " /> 
                  <Skeleton className="h-5 w-20" /> 
                  <Skeleton className="h-20 w-30" /> 
                  <Skeleton className="h-30 w-51" /> 
                  <Skeleton className="h-4 w-10" /> 
                  </div>
                </Card>
             ))
        }
    </div>
   </>
)


   const post = data.find((item) => item.id === (id));
   const postSkill = post?.skills ;
   const postRoles = post?.roles ;
   if (!post) return <p>Post not found</p>;
  return (
                <>
                <div className="p-5">
                <Card>
                    <CardHeader>
                        <h1 className="text-2xl md:text-3xl font-poppins font-bold opacity-70">{post.title}</h1>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Job type :</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">{post.type}</span>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Qualification:</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">BA/BSc/HND</span>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Experience:</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">3 years</span>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Location :</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">{post.location}</span>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Company name:</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">{post.company}</span>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <p className="capitalize font-poppins font-semibold opacity-60">Desciption:</p>
                            <span className="underline capitalize font-inter text-sm hover:text-red-400">{post.description}</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h2 className="font-poppins font-semibold opacity-800">Role description</h2>
                        <ul>
                            {postRoles?.map((data,i)=><li key={i}>{data}</li>)}
                        </ul>

                    </CardContent>
                    <CardDescription className="p-3">
                            <Button onClick={handleShowMissingSkills}>
                                Apply
                            </Button>
                    </CardDescription>
                </Card>
            </div>
                </>
  )
}

export default DetailsPage