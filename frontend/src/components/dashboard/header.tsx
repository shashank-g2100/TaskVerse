"use client"

import { useRouter } from "next/navigation"
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

interface HeaderProps {
  user: {
    id: string
    name: string
    email: string
    avatar?: string // Optional avatar image URL
  }
}

export function Header({ user }: HeaderProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user")
    localStorage.removeItem("isAuthenticated")

    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    })

    // Redirect to login page
    router.push("/")
  }

	function setSidebarOpen(arg0: boolean): void {
		throw new Error("Function not implemented.");
	}

	function setSearchQuery(value: string): void {
		throw new Error("Function not implemented.");
	}

  return (
    // <header className="shadow-sm border-b border-gray-300">
    //   <div className="container mx-auto px-4 py-2.5">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center space-x-2">
    //         {/* <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
    //           <span className="text-white font-bold text-sm">TM</span>
    //         </div> */}
    //         <h1 className="text-xl font-bold text-white-800">Dashboard</h1>
    //       </div>

    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="ghost" className="relative h-10 w-10 bg-gray-100 rounded-full">
    //             {/* Avatar component with fallback */}
    //             <Avatar>
    //               {user.avatar ? (
    //                 <AvatarImage src={user.avatar} alt={user.name} />
    //               ) : (
    //                 <AvatarFallback>
    //                   <User className="text-gray-500" />
    //                 </AvatarFallback>
    //               )}
    //             </Avatar>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end" className="p-2 w-36 bg-white rounded-md">
    //           <DropdownMenuLabel className="pb-2 mb-2 border-b font-[550] border-gray-400">My Account</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2">
    //             <User className="mr-2 h-5 w-5" />
    //             <span>Profile</span>
    //           </DropdownMenuItem>
    //           <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2">
    //             <Settings className="mr-2 h-4 w-4" />
    //             <span>Settings</span>
    //           </DropdownMenuItem>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem
		// 						className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors border-t border-gray-300"
		// 						onClick={handleLogout}
		// 					>
		// 						<Link href="/" className="flex items-center gap-2">
		// 							<LogOut className="h-4 w-4" />
		// 							<span>Log out</span>
		// 						</Link>
		// 					</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </div>
    //   </div>
    // </header>
		<header className="h-16 p-4 shadow-sm border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!setSidebarOpen)} className="md:hidden mr-2">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-64 hidden md:block">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tasks..."
                className="w-full pl-8"
                // value={setSearchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
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
                <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors flex items-center gap-2" asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-2 h-10 hover:bg-gray-100 cursor-pointer transition-colors border-t border-gray-300" onClick={handleLogout} asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
  )
}
