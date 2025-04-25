// 'use-client'

// import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
// import { CheckCircle2, Plus, Home, Calendar, Star, Tag, ChevronDown, User, Settings, LogOut } from "lucide-react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { useState } from "react";

// export function Sidebar(){
// 	const [sidebarOpen, setSidebarOpen] = useState(false);

// 	function handleAddTask(): void {
// 		addTodo();
// 	}
// 	return (
// 		<aside
//         className={`${sidebarOpen ? "w-44" : "w-0"} md:w-54 h-full bg-white  flex-shrink-0 overflow-y-auto transition-all duration-300 border-r border-gray-200`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="h-16 p-4 shadow-sm border-b border-gray-300 bg-black-100">
//             <Link href="/" className="flex items-center">
//               <CheckCircle2 className="h-7 w-7 text-emerald-500" />
//               <span className=" ml-2 font-bold text-xl font-poppins">TaskVerse</span>
//             </Link>
//           </div>

//           {/* <div className="p-3">
//             <Button variant="outline" className="w-full h-10 bg-white justify-start gap-2 font-semibold text-black text-base" size="sm" onClick={handleAddTask}>
//               <Plus size={36} />
//               New Task
//             </Button>
//           </div> */}

//           <nav className="flex-1 p-2">
//             <div className="space-y-1">
//               {/* <Button variant="ghost" className="w-full justify-start gap-2 text-black font-semibold text-" asChild>
//                 <Link href="/dashboard">
// 									<Home size={18} />
// 									<span>Home</span>
//                 </Link>
//               </Button> */}
// 							<Button variant="ghost" className="w-full justify-start gap-2 font-medium" asChild>
// 								<Link href="/dashboard">
// 									<div className="flex items-center gap-2">
// 										<Home className="w-4 h-4 shrink-0 !w-5 !h-5" />
// 										<span>Home</span>
// 									</div>
// 								</Link>
// 							</Button>

//               <Button variant="ghost" className="w-full justify-start gap-2 font-medium " asChild>
//                 <Link href="/dashboard?filter=today">
//                   <CheckCircle2 className="w-4 h-4 shrink-0 !w-5 !h-5" />
//                   <span>Today</span>
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start gap-2 font-medium " asChild>
//                 <Link href="/dashboard?filter=upcoming">
//                   <Calendar className="w-4 h-4 shrink-0 !w-5 !h-5" />
//                   <span>Upcoming</span>
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start gap-2 font-medium " asChild>
//                 <Link href="/dashboard?filter=important">
//                   <Star className="w-4 h-4 shrink-0 !w-5 !h-5" />
//                   <span>Important</span>
//                 </Link>
//               </Button>
//             </div>

//             <div className="mt-6">
//               <h3 className="font-bold text-lg px-3 mb-2">Projects</h3>
//               <div className="space-y-1">
//                 <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
//                   <Tag className="w-4 h-4 shrink-0 !w-5 !h-5 text-blue-500" />
//                   <span>Personal</span>
//                 </Button>
//                 <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
//                   <Tag className="w-4 h-4 shrink-0 !w-5 !h-5 text-emerald-500" />
//                   <span>Work</span>
//                 </Button>
//                 <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
//                   <Tag className="w-4 h-4 shrink-0 !w-5 !h-5 text-purple-500" />
//                   <span>Health</span>
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   className="w-full justify-start text-muted-foreground hover:text-foreground gap-2"
//                   size="sm"
//                 >
//                   <Plus className="w-4 h-4 shrink-0 !w-5.5 !h-5.5" />
//                   <span>Add Project</span>
//                 </Button>
//               </div>
//             </div>
//           </nav>

//           <div className="p-4 border-t border-gray-300 mt-auto">
// 						<DropdownMenu>
// 							<DropdownMenuTrigger asChild>
// 								<Button 
// 									variant="ghost" 
// 									className="w-full justify-start size-sm focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
// 								>
// 									<Avatar className="h-6 w-6 mr-2">
// 										<AvatarImage src="/placeholder.svg" alt="User" />
// 										<AvatarFallback>JD</AvatarFallback>
// 									</Avatar>
// 									<span>John Doe</span>
// 									<ChevronDown size={16} className="ml-auto" />
// 								</Button>
// 							</DropdownMenuTrigger>
// 							<DropdownMenuContent align="end" className="p-4 w-56 bg-white rounded-md">
// 								<DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-300">My Account</DropdownMenuLabel>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem 
// 									className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
// 								>
// 									<User className="h-5 w-5" />
// 									<span>Profile</span>
// 								</DropdownMenuItem>
// 								<DropdownMenuItem 
// 									className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0" 
// 									asChild
// 								>
// 									<Link href="/dashboard/settings">
// 										<Settings className="h-5 w-5" />
// 										<span>Settings</span>
// 									</Link>
// 								</DropdownMenuItem>
// 								<DropdownMenuSeparator />
// 								<DropdownMenuItem 
// 									className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors border-t border-gray-300 flex items-center gap-2 focus:outline-none focus:ring-0" 
// 									asChild
// 								>
// 									<Link href="/">
// 										<LogOut className="h-5 w-5" />
// 										<span>Log out</span>
// 									</Link>
// 								</DropdownMenuItem>
// 							</DropdownMenuContent>
// 						</DropdownMenu>
// 					</div>
//         </div>
//       </aside>
// 	)
// }
// { /* Sidebar */}

// function addTodo() {
// 	throw new Error("Function not implemented.");
// }



'use-client'

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { CheckCircle2, Plus, Home, Calendar, Star, Tag, ChevronDown, User, Settings, LogOut, ChevronRight, ChevronLeft, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleAddTask(): void {
    addTodo();
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
		<aside
		className={`${sidebarOpen ? "w-44" : "w-0"} md:w-54 h-full bg-white  flex-shrink-0 overflow-y-auto transition-all duration-300 border-r border-gray-200`}
	>
        <div className="flex flex-col h-full">
          {/* Header with logo */}
          <div className="h-16 p-4 shadow-sm border-b border-gray-300 bg-black-100 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <CheckCircle2 className="h-7 w-7 text-emerald-500" />
              {sidebarOpen && (
                <span className="ml-2 font-bold text-xl font-poppins">TaskVerse</span>
              )}
            </Link>
            {/* <Button
              variant="ghost"
              size="sm"
              className="p-0 h-8 w-8 rounded-full hover:bg-gray-200"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </Button> */}
          </div>

          <nav className="flex-1 p-2">
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium`} 
                asChild
              >
                <Link href="/dashboard">
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Home className="w-5 h-5 shrink-0 !w-5 !h-5" />
                    {sidebarOpen && <span>Home</span>}
                  </div>
                </Link>
              </Button>

              <Button 
                variant="ghost" 
                className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium`} 
                asChild
              >
                <Link href="/dashboard?filter=today">
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 !w-5 !h-5" />
                    {sidebarOpen && <span>Today</span>}
                  </div>
                </Link>
              </Button>

              <Button 
                variant="ghost" 
                className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium`} 
                asChild
              >
                <Link href="/dashboard?filter=upcoming">
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Calendar className="w-5 h-5 shrink-0 !w-5 !h-5" />
                    {sidebarOpen && <span>Upcoming</span>}
                  </div>
                </Link>
              </Button>

              <Button 
                variant="ghost" 
                className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2 font-medium`} 
                asChild
              >
                <Link href="/dashboard?filter=important">
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Star className="w-5 h-5 shrink-0 !w-5 !h-5" />
                    {sidebarOpen && <span>Important</span>}
                  </div>
                </Link>
              </Button>
            </div>

            <div className="mt-6">
              {sidebarOpen && <h3 className="font-bold text-lg px-3 mb-2">Projects</h3>}
              {!sidebarOpen && <div className="h-8 flex items-center justify-center"><Tag className="w-5 h-5" /></div>}
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2`} 
                  size="sm"
                >
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Tag className="w-5 h-5 shrink-0 !w-5 !h-5 text-blue-500" />
                    {sidebarOpen && <span>Personal</span>}
                  </div>
                </Button>

                <Button 
                  variant="ghost" 
                  className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2`} 
                  size="sm"
                >
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Tag className="w-5 h-5 shrink-0 !w-5 !h-5 text-emerald-500" />
                    {sidebarOpen && <span>Work</span>}
                  </div>
                </Button>

                <Button 
                  variant="ghost" 
                  className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} gap-2`} 
                  size="sm"
                >
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Tag className="w-5 h-5 shrink-0 !w-5 !h-5 text-purple-500" />
                    {sidebarOpen && <span>Health</span>}
                  </div>
                </Button>

                <Button
                  variant="ghost"
                  className={`w-full hover:bg-gray-200 ${!sidebarOpen ? "justify-center px-0" : "justify-start"} text-muted-foreground hover:text-foreground gap-2`}
                  size="sm"
                >
                  <div className={`flex items-center ${!sidebarOpen ? "justify-center" : "gap-2"}`}>
                    <Plus className="w-5 h-5 shrink-0 !w-5 !h-5" />
                    {sidebarOpen && <span>Add Project</span>}
                  </div>
                </Button>
              </div>
            </div>
          </nav>

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
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0"
                  asChild
                >
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="p-2 h-10 hover:bg-gray-200 rounded-md cursor-pointer transition-colors border-t border-gray-300 flex items-center gap-2 focus:outline-none focus:ring-0"
                  asChild
                >
                  <Link href="/">
                    <LogOut className="h-5 w-5" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
      
  );
}

function addTodo() {
  throw new Error("Function not implemented.");
}