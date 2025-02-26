"use client"
import { CgProfile } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { VscVmOutline } from "react-icons/vsc";
import { PiSignOutThin } from "react-icons/pi";



import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { useRouter } from "next/navigation";



// Menu items.
const items = [
  {
    title: "dashboard",
    url: "/",
    icon:<MdOutlineSpaceDashboard />,
    
   
  },
  {
    title: "my jobs",
    url: "#",
    icon:<VscVmOutline />
    
  },
  {
    title: "profile",
    url: "/Profile",
    icon: <CgProfile />,
   
  },

  {
    title: "Settings",
    url: "#",
    icon:<IoSettingsOutline />
    
  },  {
    title: "sing out",
    url: "#",
    icon:<PiSignOutThin />
  }
]

const AppSideBar = () =>  {
    const {  setOpenMobile } = useSidebar()
    const router = useRouter(); 
    const handleNavigation = (path: string) => {
    setOpenMobile(false); // Close the sidebar
    router.push(path); // Client-side navigation (no refresh)
  };
  return (
    <Sidebar className="bg-white">
      <SidebarContent className="py-6">
        <SidebarGroup className="border-b-2">
          <div className=" text-3xl font-semibold font-mono text-gray-700">
            mini-<span>match</span>
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[18px] font-poppins font-medium py-3 mb-3">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,i) => (
                <SidebarMenuItem key={i} className=" rounded-md cursor-pointer mb-2 ">
                  <SidebarMenuButton asChild className="w-full h-full p-3">
                    <Link href={item.url} 
                    onClick={()=>handleNavigation(`${item.url}`)}>
                      <div className="flex items-center gap-1  font-inter opacity-80">
                        <span className="text-xl">{item.icon}</span>
                        <div className="first-letter:capitalize">{item.title}</div>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSideBar