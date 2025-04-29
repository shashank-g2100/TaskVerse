// 'use client'

// import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
// import { CheckCircle2, Plus, Home, Calendar, Star, Tag, ChevronDown, User, Settings, LogOut, ChevronRight, ChevronLeft } from "lucide-react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { useState } from "react";

// export function Sidebar() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <aside className={`${sidebarOpen ? "w-44" : "w-0"} md:w-54 h-full bg-white flex-shrink-0 overflow-y-auto transition-all duration-300 border-r border-gray-200`}>
//       <div className="flex flex-col h-full">
//         {/* Header */}
//         <div className="h-16 p-4 shadow-sm border-b border-gray-300 bg-black-100 flex justify-between items-center">
//           <Link href="/" className="flex items-center">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
//               <path d="M21.801 10A10 10 0 1 1 17 3.335" />
//               <path d="m9 11 3 3L22 4" />
//             </svg>
//             {sidebarOpen && (
//               <span className="ml-2 font-bold text-xl font-poppins">TaskVerse</span>
//             )}
//           </Link>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-2">
//           <div className="space-y-1">
//             <SidebarLink href="/dashboard" icon={<Home className="w-5 h-5" />} label="Home" sidebarOpen={sidebarOpen} />
//             <SidebarLink href="/tasks/today" icon={<CheckCircle2 className="w-5 h-5" />} label="Today" sidebarOpen={sidebarOpen} />
//             <SidebarLink href="/dashboard?filter=upcoming" icon={<Calendar className="w-5 h-5" />} label="Upcoming" sidebarOpen={sidebarOpen} />
//             <SidebarLink href="/dashboard?filter=important" icon={<Star className="w-5 h-5" />} label="Important" sidebarOpen={sidebarOpen} />
//           </div>

//           <div className="mt-6">
//             {sidebarOpen && <h3 className="font-bold text-lg px-3 mb-2">Projects</h3>}
//             {!sidebarOpen && <div className="h-8 flex items-center justify-center"><Tag className="w-5 h-5" /></div>}
//             <div className="space-y-1">
//               <SidebarLink href="#" icon={<Tag className="w-5 h-5 text-blue-500" />} label="Personal" sidebarOpen={sidebarOpen} />
//               <SidebarLink href="#" icon={<Tag className="w-5 h-5 text-emerald-500" />} label="Work" sidebarOpen={sidebarOpen} />
//               <SidebarLink href="#" icon={<Tag className="w-5 h-5 text-purple-500" />} label="Health" sidebarOpen={sidebarOpen} />
//               <SidebarLink href="#" icon={<Plus className="w-5 h-5" />} label="Add Project" sidebarOpen={sidebarOpen} />
//             </div>
//           </div>
//         </nav>

//         {/* Profile Dropdown */}
//         <div className="p-4 border-t border-gray-300 mt-auto">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="ghost"
//                 className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center" : "justify-start"} focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0`}
//               >
//                 <div className={`flex items-center ${!sidebarOpen ? "justify-center" : ""}`}>
//                   <Avatar className="h-6 w-6 mr-2">
//                     <AvatarImage src="/placeholder.svg" alt="User" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   {sidebarOpen && (
//                     <>
//                       <span>John Doe</span>
//                       <ChevronDown size={16} className="ml-auto" />
//                     </>
//                   )}
//                 </div>
//               </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent align="end" className="p-3 w-46 bg-gray-100 rounded-md">
//               <DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-300">My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem
//                   className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
//                   asChild
//                 >
//                   <Link href="/dashboard/settings">
//                     <User className="h-4 w-4" />
//                     <span>Profile</span>
//                   </Link>
//                 </DropdownMenuItem>
//               <DropdownMenuItem
//                   className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
//                   asChild
//                 >
//                   <Link href="/dashboard/settings">
//                     <Settings className="h-4 w-4" />
//                     <span>Settings</span>
//                   </Link>
//                 </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem
//                   className="p-2 h-10 hover:bg-gray-200 rounded-md text-red-500 cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
//                   asChild
//                 >
//                   <Link href="/">
//                     <LogOut className="h-4 w-4" />
//                     <span>Log Out</span>
//                   </Link>
//                 </DropdownMenuItem>
              
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </aside>
//   );
// }

// interface SidebarLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   label: string;
//   sidebarOpen: boolean;
// }

// function SidebarLink({ href, icon, label, sidebarOpen }: SidebarLinkProps) {
//   return (
//     <Button variant="ghost" className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium`} asChild>
//       <Link href={href}>
//         <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
//           {icon}
//           {sidebarOpen && <span>{label}</span>}
//         </div>
//       </Link>
//     </Button>
//   );
// }



'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { History, CheckCircle2, Plus, Home, Calendar, Star, Tag, ChevronDown, User, Settings, LogOut, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <aside className={`${sidebarOpen ? "w-44" : "w-0"} md:w-54 h-full bg-white flex-shrink-0 overflow-y-auto transition-all duration-300 border-r border-gray-200`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 p-4 shadow-sm border-b border-gray-300 bg-black-100 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            {sidebarOpen && (
              <span className="ml-2 font-bold text-xl font-poppins">TaskVerse</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <div className="space-y-1">
            <SidebarLink 
              href="/dashboard" 
              icon={<Home className="w-5 h-5" />} 
              label="Home" 
              sidebarOpen={sidebarOpen} 
              isActive={pathname === '/dashboard'}
            />
            <SidebarLink 
              href="/tasks/today" 
              icon={<CheckCircle2 className="w-5 h-5" />} 
              label="Today" 
              sidebarOpen={sidebarOpen} 
              isActive={pathname === '/tasks/today'}
            />
            <SidebarLink 
              href="/tasks/upcoming" 
              icon={<Calendar className="w-5 h-5" />} 
              label="Upcoming" 
              sidebarOpen={sidebarOpen} 
              isActive={pathname === '/tasks/upcoming'}
            />
            <SidebarLink 
              href="/tasks/important" 
              icon={<Star className="w-5 h-5" />} 
              label="Important" 
              sidebarOpen={sidebarOpen} 
              isActive={pathname === '/tasks/important'}
            />
            <SidebarLink 
              href="/tasks/history" 
              icon={<History className="w-5 h-5" />} 
              label="History" 
              sidebarOpen={sidebarOpen} 
              isActive={pathname === '/tasks/history'}
            />
          </div>

          <div className="mt-6">
            {sidebarOpen && <h3 className="font-bold text-lg px-3 mb-2">Projects</h3>}
            {!sidebarOpen && <div className="h-8 flex items-center justify-center"><Tag className="w-5 h-5" /></div>}
            <div className="space-y-1">
              <SidebarLink 
                href="/projects/personal" 
                icon={<Tag className="w-5 h-5 text-blue-500" />} 
                label="Personal" 
                sidebarOpen={sidebarOpen} 
                isActive={pathname === '/projects/personal'}
              />
              <SidebarLink 
                href="/projects/work" 
                icon={<Tag className="w-5 h-5 text-emerald-500" />} 
                label="Work" 
                sidebarOpen={sidebarOpen} 
                isActive={pathname === '/projects/work'}
              />
              <SidebarLink 
                href="/projects/health" 
                icon={<Tag className="w-5 h-5 text-purple-500" />} 
                label="Health" 
                sidebarOpen={sidebarOpen} 
                isActive={pathname === '/projects/health'}
              />
              {/* <SidebarLink 
                href="/projects/new" 
                icon={<Plus className="w-5 h-5" />} 
                label="Add Project" 
                sidebarOpen={sidebarOpen} 
                isActive={pathname === '/projects/new'}
              /> */}
            </div>
          </div>
        </nav>

        {/* Profile Dropdown */}
        <div className="p-4 border-t border-gray-300 mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center" : "justify-start"} focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0`}
              >
                <div className={`flex items-center ${!sidebarOpen ? "justify-center" : ""}`}>
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {sidebarOpen && (
                    <>
                      <span>John Doe</span>
                      <ChevronDown size={16} className="ml-auto" />
                    </>
                  )}
                </div>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="p-3 w-46 bg-gray-100 rounded-md">
              <DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-300">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                  className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
                  asChild
                >
                  <Link href="/dashboard/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuItem
                  className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
                  asChild
                >
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                  className="p-2 h-10 hover:bg-gray-200 rounded-md text-red-500 cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
                  asChild
                >
                  <Link href="/">
                    <LogOut className="h-4 w-4" />
                    <span>Log Out</span>
                  </Link>
                </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  sidebarOpen: boolean;
  isActive: boolean;
}

function SidebarLink({ href, icon, label, sidebarOpen, isActive }: SidebarLinkProps) {
  return (
    <Button 
      variant="ghost" 
      className={`w-full ${isActive ? 'bg-gray-200 text-blue-600 font-semibold' : 'hover:bg-gray-200'} ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium transition-colors`} 
      asChild
    >
      <Link href={href}>
        <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
          {icon}
          {sidebarOpen && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
}