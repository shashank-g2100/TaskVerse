// "use client"

// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { ArrowLeft, Bell, LogOut, SearchIcon, Settings, User } from "lucide-react"
// import { useToast } from "../ui/use-toast"
// import { Input } from "../ui/input";

// interface HeaderProps {
//   user: {
//     id: string
//     name: string
//     email: string
//     avatar?: string // Optional avatar image URL
//   }
// }

// export function Header({ user }: HeaderProps) {
//   const router = useRouter()
//   const { toast } = useToast()

//   const handleLogout = () => {
//     // Clear user data from localStorage
//     localStorage.removeItem("user")
//     localStorage.removeItem("isAuthenticated")

//     toast({
//       title: "Logged out",
//       description: "You have been logged out successfully",
//     })

//     // Redirect to login page
//     router.push("/")
//   }

// 	function setSidebarOpen(arg0: boolean): void {
// 		throw new Error("Function not implemented.");
// 	}

// 	function setSearchQuery(value: string): void {
// 		throw new Error("Function not implemented.");
// 	}

//   return (
// 		<header className="h-16 p-4 shadow-sm border-b border-gray-300 flex items-center justify-between">
//       <div className="flex items-center">
// 				<Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!setSidebarOpen)} className="md:hidden mr-2">
// 					<ArrowLeft size={20} />
// 				</Button>
//         <h1 className="text-xl font-bold">Dashboard</h1>
//       </div>

//       <div className="flex items-center gap-2">
//         <div className="relative w-64 hidden md:block">
//           <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search tasks..."
//               className="w-full pl-8  border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
//               // value={setSearchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//         </div>
//         <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
//           <Bell size={20} />
//         </Button>
        
// 				<DropdownMenu>
// 					<DropdownMenuTrigger asChild>
// 						<Button 
// 							variant="ghost" 
// 							size="icon" 
// 							className="hover:bg-gray-100 transition-colors bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-0 focus-visible:ring-0"
// 						>
// 							<Avatar className="h-8 w-8">
// 								<AvatarImage src="/placeholder.svg" alt="User" />
// 								<AvatarFallback>JD</AvatarFallback>
// 							</Avatar>
// 						</Button>
// 					</DropdownMenuTrigger>
          
// 					<DropdownMenuContent align="end" className="p-2 w-36 bg-white rounded-md">
//         		<DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-400">My Account</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//               <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2">
//                 <User className="mr-2 h-4 w-4" />
//                 <span>Profile</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2" asChild>
//                 <Link href="/dashboard/settings">
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </Link>
//               </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors border-t border-gray-300" onClick={handleLogout} asChild>
//               <Link href="/">
//                 <LogOut className="mr-2 h-4 w-4" />
//                 <span>Log out</span>
//               </Link>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }


"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Bell, LogOut, SearchIcon, Settings, User } from "lucide-react"
import { useToast } from "../ui/use-toast"
import { Input } from "../ui/input";
import { useState, useEffect } from "react";

interface HeaderProps {
  user: {
    id: string
    name: string
    email: string
    avatar?: string // Optional avatar image URL
  },
  sidebarOpen?: boolean,
  setSidebarOpen?: (open: boolean) => void
}

export function Header({ user, sidebarOpen = false, setSidebarOpen }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [pageTitle, setPageTitle] = useState("Dashboard");

  // Update page title based on current route
  useEffect(() => {
    if (pathname) {
      if (pathname.includes("/tasks/history")) {
        setPageTitle("History");
			} else if (pathname.includes("/tasks")) {
        setPageTitle("Tasks");
			} else if (pathname.includes("/projects")) {
        setPageTitle("Projects");
      } else if (pathname.includes("/settings")) {
        setPageTitle("Settings");
      } else {
        setPageTitle("Dashboard");
      }
    }
  }, [pathname]);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");

    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });

    // Redirect to login page
    router.push("/");
  }

  const handleSidebarToggle = () => {
    if (setSidebarOpen) {
      setSidebarOpen(!sidebarOpen);
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    toast({
      title: "Searching",
      description: `Searching for "${searchQuery}"`,
    });
  }

  return (
    <header className="h-16 p-4 shadow-sm border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleSidebarToggle} 
          className="md:hidden mr-2"
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-xl font-bold">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-2">
        <form onSubmit={handleSearch} className="relative w-64 hidden md:block">
          <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="w-full pl-8 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors">
          <Bell size={20} />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-100 transition-colors bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-0 focus-visible:ring-0"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className="p-2 w-36 bg-white rounded-md">
            <DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-400">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 rounded-md cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0" asChild>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 rounded-md text-red-500 cursor-pointer transition-colors flex items-center gap-2 focus:outline-none focus:ring-0" onClick={handleLogout} asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}