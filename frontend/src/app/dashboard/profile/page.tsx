// "use client"

// import { useState } from 'react';
// import { User, Mail, MapPin, Calendar, Briefcase, Link as LinkIcon, Edit, Clock, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// interface UserStats {
//   tasksCompleted: number;
//   tasksInProgress: number;
//   streak: number;
//   joined: string;
// }

// interface UserActivity {
//   id: number;
//   action: string;
//   timestamp: string;
//   taskName?: string;
// }

// export default function ProfilePage() {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     title: 'Product Manager',
//     location: 'San Francisco, CA',
//     bio: 'Passionate about building great products and helping teams work efficiently. Always looking for new ways to improve productivity and workflows.',
//     website: 'johndoe.com',
//     joinDate: 'January 15, 2023'
//   });

//   const [stats, setStats] = useState<UserStats>({
//     tasksCompleted: 248,
//     tasksInProgress: 5,
//     streak: 12,
//     joined: '15 months ago'
//   });

//   const [recentActivity, setRecentActivity] = useState<UserActivity[]>([
//     { id: 1, action: 'Completed task', timestamp: '2 hours ago', taskName: 'Update project roadmap' },
//     { id: 2, action: 'Created task', timestamp: '5 hours ago', taskName: 'Schedule team meeting' },
//     { id: 3, action: 'Updated profile', timestamp: '1 day ago' },
//     { id: 4, action: 'Completed task', timestamp: '2 days ago', taskName: 'Review quarterly goals' },
//     { id: 5, action: 'Changed settings', timestamp: '3 days ago' }
//   ]);

//   return (
//     <div className="max-w-4xl mx-auto py-8 px-4">
//       {/* Header section with user info */}
//       <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
//         {/* Avatar */}
//         <div className="flex-shrink-0">
//           <div className="h-32 w-32 bg-gray-200 rounded-full flex items-center justify-center relative">
//             <User className="h-16 w-16 text-gray-400" />
//             <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800">
//               <Edit className="h-4 w-4" />
//             </button>
//           </div>
//         </div>

//         {/* User info */}
//         <div className="flex-grow">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
//               <p className="text-gray-600 text-lg">{user.title}</p>
//             </div>
//             <Link href="/settings/profile">
//               <Button className="bg-black text-white hover:bg-gray-800 px-4">
//                 Edit Profile
//               </Button>
//             </Link>
//           </div>

//           <div className="space-y-2 mb-6">
//             <div className="flex items-center text-gray-600">
//               <Mail className="h-4 w-4 mr-2" />
//               <span>{user.email}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <MapPin className="h-4 w-4 mr-2" />
//               <span>{user.location}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <LinkIcon className="h-4 w-4 mr-2" />
//               <a href={`https://${user.website}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                 {user.website}
//               </a>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Calendar className="h-4 w-4 mr-2" />
//               <span>Joined {user.joinDate}</span>
//             </div>
//           </div>

//           <p className="text-gray-700">{user.bio}</p>
//         </div>
//       </div>

//       {/* Stats section */}
//       <div className="mb-12">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Statistics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
//             <h3 className="text-sm font-medium text-gray-500">Tasks Completed</h3>
//             <p className="text-2xl font-bold">{stats.tasksCompleted}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
//             <h3 className="text-sm font-medium text-gray-500">In Progress</h3>
//             <p className="text-2xl font-bold">{stats.tasksInProgress}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
//             <h3 className="text-sm font-medium text-gray-500">Current Streak</h3>
//             <p className="text-2xl font-bold">{stats.streak} days</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
//             <h3 className="text-sm font-medium text-gray-500">Member For</h3>
//             <p className="text-2xl font-bold">{stats.joined}</p>
//           </div>
//         </div>
//       </div>

//       {/* Recent activity section */}
//       <div>
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           {recentActivity.map((activity, index) => (
//             <div 
//               key={activity.id} 
//               className={`p-4 flex items-start ${index !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''}`}
//             >
//               <div className={`p-2 rounded-full mr-4 ${activity.action.includes('Completed') ? 'bg-green-100' : 'bg-blue-100'}`}>
//                 {activity.action.includes('Completed') ? (
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                 ) : (
//                   <Clock className="h-5 w-5 text-blue-600" />
//                 )}
//               </div>
//               <div className="flex-grow">
//                 <p className="text-gray-800 font-medium">
//                   {activity.action}
//                   {activity.taskName && (
//                     <span className="font-normal"> - {activity.taskName}</span>
//                   )}
//                 </p>
//                 <p className="text-gray-500 text-sm">{activity.timestamp}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





//////////////////////////////////////////////////////////
//Best one


// "use client"

// import { useState } from "react";
// import { User, Clock, Award, Settings, ArrowLeft, Edit2, Mail, Globe, Twitter, List, AlertCircle } from "lucide-react";

// export default function ProfilePage() {
//   const [activeTab, setActiveTab] = useState("overview");
  
//   const profileData = {
//     name: "John Doe",
//     location: "San Francisco, CA",
//     bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
//     email: "john.doe@example.com",
//     website: "johndoe.com",
//     twitter: "@johndoe",
//     stats: {
//       completionRate: 40,
//       totalTasks: 5,
//       completedTasks: 2,
//       importantTasks: 2,
//       todayTasks: 5
//     },
//     projects: {
//       personal: { percentage: 42 },
//       work: { percentage: 35 },
//       health: { percentage: 23 }
//     },
//     priorities: {
//       high: { percentage: 30 },
//       medium: { percentage: 45 },
//       low: { percentage: 25 }
//     },
//     achievements: {
//       taskMaster: { name: "Task Master", description: "Complete 100 tasks", progress: 65 },
//       earlyBird: { name: "Early Bird", description: "Complete 50 tasks before noon", progress: 80 },
//       projectPro: { name: "Project Pro", description: "Create 10 projects", progress: 30 },
//       consistencyKing: { name: "Consistency King", description: "Use the app for 30 days straight", progress: 90 }
//     },
//     recentActivity: [
//       { action: "Completed 3 tasks", time: "Today", timeAgo: "2 hours ago" },
//       { action: "Added a new project", time: "Today", timeAgo: "5 hours ago" },
//       { action: "Completed 5 tasks", time: "Yesterday", timeAgo: "1 day ago" },
//       { action: "Achieved 80% completion rate", time: "Last Week", timeAgo: "5 days ago" },
//       { action: "Created 10 new tasks", time: "Last Week", timeAgo: "6 days ago" }
//     ],
//     settings: {
//       emailNotifications: true,
//       pushNotifications: true,
//       weeklyReport: false,
//       profileVisibility: true,
//       activityTracking: true,
//       connectedAccounts: {
//         google: { connected: false, description: "Calendar integration" },
//         microsoft: { connected: true, email: "john.doe@outlook.com" }
//       }
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-white py-4 px-6 border-b border-gray-200 flex items-center justify-between">
//         <div className="flex items-center">
//           <button className="mr-4">
//             <ArrowLeft size={20} />
//           </button>
//           <h1 className="text-xl font-semibold">Profile</h1>
//         </div>
//         <button className="text-gray-700 hover:text-gray-900">
//           Back to Dashboard
//         </button>
//       </header>

//       <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Profile Info Card */}
//           <div className="md:col-span-1">
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex justify-center relative mb-4">
//                 <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
//                 <button className="absolute bottom-0 right-24 bg-white rounded-full p-2 shadow">
//                   <Edit2 size={16} />
//                 </button>
//               </div>
              
//               <div className="text-center mb-4">
//                 <h2 className="text-xl font-bold">{profileData.name}</h2>
//                 <p className="text-gray-600 flex items-center justify-center mt-1">
//                   <span className="flex items-center">
//                     <User size={14} className="mr-1" />
//                     {profileData.location}
//                   </span>
//                 </p>
//               </div>

//               <p className="text-gray-700 mb-4">
//                 {profileData.bio}
//               </p>

//               <div className="space-y-2">
//                 <div className="flex items-center text-gray-700">
//                   <Mail size={16} className="mr-2" />
//                   <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
//                     {profileData.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center text-gray-700">
//                   <Globe size={16} className="mr-2" />
//                   <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                     {profileData.website}
//                   </a>
//                 </div>
//                 <div className="flex gap-2 mt-4">
//                   <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
//                     <Twitter size={16} className="mr-1" />
//                     {profileData.twitter}
//                   </button>
//                   <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
//                     <List size={16} className="mr-1" />
//                     johndoe
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Task Statistics Card */}
//             <div className="bg-white rounded-lg shadow p-6 mt-6">
//               <h3 className="text-lg font-semibold mb-4">Task Statistics</h3>
              
//               <div className="mb-4">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm text-gray-700">Completion Rate</span>
//                   <span className="text-sm font-semibold">{profileData.stats.completionRate}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className="bg-blue-600 h-2 rounded-full" 
//                     style={{ width: `${profileData.stats.completionRate}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="bg-gray-50 p-4 rounded-md text-center">
//                   <div className="text-2xl font-bold">{profileData.stats.totalTasks}</div>
//                   <div className="text-sm text-gray-600">Total Tasks</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-md text-center">
//                   <div className="text-2xl font-bold">{profileData.stats.completedTasks}</div>
//                   <div className="text-sm text-gray-600">Completed</div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-50 p-4 rounded-md text-center">
//                   <div className="text-2xl font-bold">{profileData.stats.importantTasks}</div>
//                   <div className="text-sm text-gray-600">Important</div>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-md text-center">
//                   <div className="text-2xl font-bold">{profileData.stats.todayTasks}</div>
//                   <div className="text-sm text-gray-600">Today</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="md:col-span-2">
//             {/* Tabs */}
//             <div className="bg-white rounded-lg shadow mb-6">
//               <div className="flex border-b border-gray-200">
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("overview")}
//                 >
//                   <User size={16} className="mr-2" />
//                   Overview
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "activity"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("activity")}
//                 >
//                   <Clock size={16} className="mr-2" />
//                   Activity
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "achievements"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("achievements")}
//                 >
//                   <Award size={16} className="mr-2" />
//                   Achievements
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "settings"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("settings")}
//                 >
//                   <Settings size={16} className="mr-2" />
//                   Settings
//                 </button>
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-lg shadow p-6">
//               {activeTab === "overview" && (
//                 <>
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-1">Productivity Overview</h2>
//                     <p className="text-gray-600 text-sm">Your task completion trends over time</p>
                    
//                     <div className="mt-8 flex justify-center items-center h-40 bg-gray-50 rounded-lg">
//                       <div className="text-center">
//                         <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                         </svg>
//                         <h3 className="mt-4 text-lg font-semibold">Productivity Insights</h3>
//                         <p className="mt-2 text-sm text-gray-600">
//                           Track your productivity trends over time. Complete more tasks to see your progress visualized here.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Project Distribution */}
//                     <div>
//                       <h3 className="text-lg font-semibold mb-1">Project Distribution</h3>
//                       <p className="text-gray-600 text-sm mb-4">Tasks by project category</p>
                      
//                       <div className="space-y-4">
//                         <div>
//                           <div className="flex justify-between mb-1">
//                             <span className="flex items-center">
//                               <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
//                               <span className="text-sm">Personal</span>
//                             </span>
//                             <span className="text-sm font-semibold">{profileData.projects.personal.percentage}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                               className="bg-blue-500 h-2 rounded-full" 
//                               style={{ width: `${profileData.projects.personal.percentage}%` }}
//                             ></div>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <div className="flex justify-between mb-1">
//                             <span className="flex items-center">
//                               <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
//                               <span className="text-sm">Work</span>
//                             </span>
//                             <span className="text-sm font-semibold">{profileData.projects.work.percentage}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                               className="bg-green-500 h-2 rounded-full" 
//                               style={{ width: `${profileData.projects.work.percentage}%` }}
//                             ></div>
//                           </div>
//                         </div>
                        
//                         <div>
//                           <div className="flex justify-between mb-1">
//                             <span className="flex items-center">
//                               <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
//                               <span className="text-sm">Health</span>
//                             </span>
//                             <span className="text-sm font-semibold">{profileData.projects.health.percentage}%</span>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                               className="bg-purple-500 h-2 rounded-full" 
//                               style={{ width: `${profileData.projects.health.percentage}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Priority Breakdown */}
//                     <div>
//                       <h3 className="text-lg font-semibold mb-1">Priority Breakdown</h3>
//                       <p className="text-gray-600 text-sm mb-4">Tasks by priority level</p>
                      
//                       <div className="grid grid-cols-3 gap-4 mb-4">
//                         <div className="bg-red-50 p-4 rounded-md text-center">
//                           <div className="text-2xl font-bold text-red-600">{profileData.priorities.high.percentage}%</div>
//                           <div className="text-sm text-red-800">High</div>
//                         </div>
//                         <div className="bg-yellow-50 p-4 rounded-md text-center">
//                           <div className="text-2xl font-bold text-yellow-600">{profileData.priorities.medium.percentage}%</div>
//                           <div className="text-sm text-yellow-800">Medium</div>
//                         </div>
//                         <div className="bg-green-50 p-4 rounded-md text-center">
//                           <div className="text-2xl font-bold text-green-600">{profileData.priorities.low.percentage}%</div>
//                           <div className="text-sm text-green-800">Low</div>
//                         </div>
//                       </div>
                      
//                       <div className="bg-blue-50 p-4 rounded-md">
//                         <div className="flex items-start">
//                           <AlertCircle size={20} className="text-blue-600 mr-2 mt-1" />
//                           <p className="text-sm text-blue-800">
//                             You tend to focus on medium priority tasks first. Consider tackling more high priority items to improve productivity.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {activeTab === "activity" && (
//                 <>
//                   <h2 className="text-xl font-bold mb-1">Recent Activity</h2>
//                   <p className="text-gray-600 text-sm mb-6">Your task management history</p>
                  
//                   <div className="space-y-4">
//                     {profileData.recentActivity.map((activity, index) => (
//                       <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h4 className="font-medium">{activity.action}</h4>
//                             <p className="text-sm text-gray-600">{activity.time}</p>
//                           </div>
//                           <span className="text-sm text-gray-500">{activity.timeAgo}</span>
//                         </div>
//                       </div>
//                     ))}
                    
//                     <button className="w-full bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-md mt-4 text-gray-700 font-medium">
//                       View All Activity
//                     </button>
//                   </div>
//                 </>
//               )}

//               {activeTab === "achievements" && (
//                 <>
//                   <h2 className="text-xl font-bold mb-1">Your Achievements</h2>
//                   <p className="text-gray-600 text-sm mb-6">Track your progress and earn badges</p>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     {Object.values(profileData.achievements).map((achievement, index) => (
//                       <div key={index} className="border border-gray-200 rounded-lg p-4">
//                         <div className="flex items-start mb-3">
//                           <div className="bg-gray-100 p-2 rounded-full mr-3">
//                             <Clock size={20} className="text-gray-600" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold">{achievement.name}</h4>
//                             <p className="text-sm text-gray-600">{achievement.description}</p>
//                           </div>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className="bg-blue-600 h-2 rounded-full" 
//                             style={{ width: `${achievement.progress}%` }}
//                           ></div>
//                         </div>
//                         <div className="text-right mt-1">
//                           <span className="text-sm font-medium">{achievement.progress}%</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <p className="text-sm text-gray-600">4 of 12 achievements unlocked</p>
//                     <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                       View All
//                     </button>
//                   </div>
//                 </>
//               )}

//               {activeTab === "settings" && (
//                 <>
//                   <h2 className="text-xl font-bold mb-1">Account Settings</h2>
//                   <p className="text-gray-600 text-sm mb-6">Manage your account preferences</p>
                  
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="font-medium mb-4">Notifications</h3>
                      
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-medium">Email Notifications</h4>
//                             <p className="text-sm text-gray-600">Receive task reminders via email</p>
//                           </div>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input 
//                               type="checkbox" 
//                               className="sr-only peer" 
//                               checked={profileData.settings.emailNotifications}
//                               readOnly
//                             />
//                             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                           </label>
//                         </div>
                        
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-medium">Push Notifications</h4>
//                             <p className="text-sm text-gray-600">Receive notifications on your device</p>
//                           </div>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input 
//                               type="checkbox" 
//                               className="sr-only peer" 
//                               checked={profileData.settings.pushNotifications}
//                               readOnly
//                             />
//                             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                           </label>
//                         </div>
                        
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-medium">Weekly Summary</h4>
//                             <p className="text-sm text-gray-600">Receive a weekly productivity report</p>
//                           </div>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input 
//                               type="checkbox" 
//                               className="sr-only peer" 
//                               checked={profileData.settings.weeklyReport}
//                               readOnly
//                             />
//                             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-medium mb-4">Privacy</h3>
                      
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-medium">Profile Visibility</h4>
//                             <p className="text-sm text-gray-600">Allow others to see your profile</p>
//                           </div>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input 
//                               type="checkbox" 
//                               className="sr-only peer" 
//                               checked={profileData.settings.profileVisibility}
//                               readOnly
//                             />
//                             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                           </label>
//                         </div>
                        
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-medium">Activity Tracking</h4>
//                             <p className="text-sm text-gray-600">Track your app usage for insights</p>
//                           </div>
//                           <label className="relative inline-flex items-center cursor-pointer">
//                             <input 
//                               type="checkbox" 
//                               className="sr-only peer" 
//                               checked={profileData.settings.activityTracking}
//                               readOnly
//                             />
//                             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-medium mb-4">Connected Accounts</h3>
                      
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <div className="flex items-center">
//                             <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
//                               <span className="text-red-500 font-bold">G</span>
//                             </div>
//                             <div>
//                               <h4 className="font-medium">Google</h4>
//                               <p className="text-sm text-gray-600">{profileData.settings.connectedAccounts.google.description}</p>
//                             </div>
//                           </div>
//                           <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded">
//                             Connect
//                           </button>
//                         </div>
                        
//                         <div className="flex justify-between items-center">
//                           <div className="flex items-center">
//                             <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
//                               <span className="text-blue-500 font-bold">M</span>
//                             </div>
//                             <div>
//                               <h4 className="font-medium">Microsoft</h4>
//                               <p className="text-sm text-gray-600">Connected as john.doe@outlook.com</p>
//                             </div>
//                           </div>
//                           <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded">
//                             Disconnect
//                           </button>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="pt-4">
//                       <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 float-right">
//                         Save Changes
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client"

// import { useState } from "react";
// import { User, Clock, Award, Settings, ArrowLeft, ChevronLeft, Home } from "lucide-react";
// import ProfileInfoCard from "@/components/profile/ProfileInfoCard";
// import TaskStatisticsCard from "@/components/profile/TaskStatisticsCard";
// import OverviewTab from "@/components/profile/OverviewTab";
// import ActivityTab from "@/components/profile/ActivityTab";
// import AchievementsTab from "@/components/profile/AchievementsTab";
// import SettingsTab from "@/components/profile/SettingsTab";
// import Link from "next/link";

// interface ProfileData {
//   name: string;
//   location: string;
//   bio: string;
//   email: string;
//   website: string;
//   twitter: string;
//   stats: {
//     completionRate: number;
//     totalTasks: number;
//     completedTasks: number;
//     importantTasks: number;
//     todayTasks: number;
//   };
//   projects: {
//     personal: { percentage: number };
//     work: { percentage: number };
//     health: { percentage: number };
//   };
//   priorities: {
//     high: { percentage: number };
//     medium: { percentage: number };
//     low: { percentage: number };
//   };
//   achievements: {
//     taskMaster: { name: string; description: string; progress: number };
//     earlyBird: { name: string; description: string; progress: number };
//     projectPro: { name: string; description: string; progress: number };
//     consistencyKing: { name: string; description: string; progress: number };
//   };
//   recentActivity: Array<{
//     action: string;
//     time: string;
//     timeAgo: string;
//   }>;
//   settings: {
//     emailNotifications: boolean;
//     pushNotifications: boolean;
//     weeklyReport: boolean;
//     profileVisibility: boolean;
//     activityTracking: boolean;
//     connectedAccounts: {
//       google: { connected: boolean; description: string };
//       microsoft: { connected: boolean; email: string };
//     };
//   };
// }

// export default function ProfilePage() {
//   const [activeTab, setActiveTab] = useState("overview");
  
//   const profileData: ProfileData = {
//     name: "John Doe",
//     location: "San Francisco, CA",
//     bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
//     email: "john.doe@example.com",
//     website: "johndoe.com",
//     twitter: "@johndoe",
//     stats: {
//       completionRate: 40,
//       totalTasks: 5,
//       completedTasks: 2,
//       importantTasks: 2,
//       todayTasks: 5
//     },
//     projects: {
//       personal: { percentage: 42 },
//       work: { percentage: 35 },
//       health: { percentage: 23 }
//     },
//     priorities: {
//       high: { percentage: 30 },
//       medium: { percentage: 45 },
//       low: { percentage: 25 }
//     },
//     achievements: {
//       taskMaster: { name: "Task Master", description: "Complete 100 tasks", progress: 65 },
//       earlyBird: { name: "Early Bird", description: "Complete 50 tasks before noon", progress: 80 },
//       projectPro: { name: "Project Pro", description: "Create 10 projects", progress: 30 },
//       consistencyKing: { name: "Consistency King", description: "Use the app for 30 days straight", progress: 90 }
//     },
//     recentActivity: [
//       { action: "Completed 3 tasks", time: "Today", timeAgo: "2 hours ago" },
//       { action: "Added a new project", time: "Today", timeAgo: "5 hours ago" },
//       { action: "Completed 5 tasks", time: "Yesterday", timeAgo: "1 day ago" },
//       { action: "Achieved 80% completion rate", time: "Last Week", timeAgo: "5 days ago" },
//       { action: "Created 10 new tasks", time: "Last Week", timeAgo: "6 days ago" }
//     ],
//     settings: {
//       emailNotifications: true,
//       pushNotifications: true,
//       weeklyReport: false,
//       profileVisibility: true,
//       activityTracking: true,
//       connectedAccounts: {
//         google: { connected: false, description: "Calendar integration" },
//         microsoft: { connected: true, email: "john.doe@outlook.com" }
//       }
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center py-2 px-2 border-b border-gray-300">
//         <div className="flex items-center gap-x-1">
//           <Link href="/dashboard">
//             <div className="h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer">
//               <ChevronLeft className="h-5 w-5" />
//             </div>
//           </Link>
//           <h2 className="text-xl font-bold">Profile</h2>
//         </div>
//         <Link href="/dashboard" className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium flex items-center space-x-2">
//           <Home className="w-5 h-5" /> 
//           <span>Dashboard</span>
//         </Link>
//       </div>

//       <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left Column */}
//           <div className="md:col-span-1">
//             <ProfileInfoCard profileData={profileData} />
//             <TaskStatisticsCard stats={profileData.stats} />
//           </div>

//           {/* Right Column */}
//           <div className="md:col-span-2">
//             {/* Tabs */}
//             <div className="bg-white rounded-lg shadow mb-6">
//               <div className="flex border-b border-gray-200">
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("overview")}
//                 >
//                   <User size={16} className="mr-2" />
//                   Overview
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "activity"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("activity")}
//                 >
//                   <Clock size={16} className="mr-2" />
//                   Activity
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "achievements"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("achievements")}
//                 >
//                   <Award size={16} className="mr-2" />
//                   Achievements
//                 </button>
//                 <button
//                   className={`flex items-center px-4 py-3 text-sm font-medium ${
//                     activeTab === "settings"
//                       ? "border-b-2 border-blue-500 text-blue-600"
//                       : "text-gray-600 hover:text-gray-800"
//                   }`}
//                   onClick={() => setActiveTab("settings")}
//                 >
//                   <Settings size={16} className="mr-2" />
//                   Settings
//                 </button>
//               </div>
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-lg shadow p-6">
//               {activeTab === "overview" && <OverviewTab profileData={profileData} />}
//               {activeTab === "activity" && <ActivityTab recentActivity={profileData.recentActivity} />}
//               {activeTab === "achievements" && <AchievementsTab achievements={profileData.achievements} />}
//               {activeTab === "settings" && <SettingsTab settings={profileData.settings} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState } from "react";
import { User, Clock, Award, Settings, ArrowLeft, ChevronLeft, Home } from "lucide-react";
import ProfileInfoCard from "@/components/profile/ProfileInfoCard";
import TaskStatisticsCard from "@/components/profile/TaskStatisticsCard";
import OverviewTab from "@/components/profile/OverviewTab";
import ActivityTab from "@/components/profile/ActivityTab";
import AchievementsTab from "@/components/profile/AchievementsTab";
import SettingsTab from "@/components/profile/SettingsTab";
import Link from "next/link";

interface ProfileData {
  name: string;
  location: string;
  bio: string;
  email: string;
  website: string;
  twitter: string;
  stats: {
    completionRate: number;
    totalTasks: number;
    completedTasks: number;
    importantTasks: number;
    todayTasks: number;
  };
  projects: {
    personal: { percentage: number };
    work: { percentage: number };
    health: { percentage: number };
  };
  priorities: {
    high: { percentage: number };
    medium: { percentage: number };
    low: { percentage: number };
  };
  achievements: {
    taskMaster: { name: string; description: string; progress: number };
    earlyBird: { name: string; description: string; progress: number };
    projectPro: { name: string; description: string; progress: number };
    consistencyKing: { name: string; description: string; progress: number };
  };
  recentActivity: Array<{
    action: string;
    time: string;
    timeAgo: string;
  }>;
  settings: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    weeklyReport: boolean;
    profileVisibility: boolean;
    activityTracking: boolean;
    connectedAccounts: {
      google: { connected: boolean; description: string };
      microsoft: { connected: boolean; email: string };
    };
  };
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const profileData: ProfileData = {
    name: "John Doe",
    location: "San Francisco, CA",
    bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
    email: "john.doe@example.com",
    website: "johndoe.com",
    twitter: "@johndoe",
    stats: {
      completionRate: 40,
      totalTasks: 5,
      completedTasks: 2,
      importantTasks: 2,
      todayTasks: 5
    },
    projects: {
      personal: { percentage: 42 },
      work: { percentage: 35 },
      health: { percentage: 23 }
    },
    priorities: {
      high: { percentage: 30 },
      medium: { percentage: 45 },
      low: { percentage: 25 }
    },
    achievements: {
      taskMaster: { name: "Task Master", description: "Complete 100 tasks", progress: 65 },
      earlyBird: { name: "Early Bird", description: "Complete 50 tasks before noon", progress: 80 },
      projectPro: { name: "Project Pro", description: "Create 10 projects", progress: 30 },
      consistencyKing: { name: "Consistency King", description: "Use the app for 30 days straight", progress: 90 }
    },
    recentActivity: [
      { action: "Completed 3 tasks", time: "Today", timeAgo: "2 hours ago" },
      { action: "Added a new project", time: "Today", timeAgo: "5 hours ago" },
      { action: "Completed 5 tasks", time: "Yesterday", timeAgo: "1 day ago" },
      { action: "Achieved 80% completion rate", time: "Last Week", timeAgo: "5 days ago" },
      { action: "Created 10 new tasks", time: "Last Week", timeAgo: "6 days ago" }
    ],
    settings: {
      emailNotifications: true,
      pushNotifications: true,
      weeklyReport: false,
      profileVisibility: true,
      activityTracking: true,
      connectedAccounts: {
        google: { connected: false, description: "Calendar integration" },
        microsoft: { connected: true, email: "john.doe@outlook.com" }
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-300">
        <div className="flex justify-between items-center py-2 px-2 max-w-full mx-auto">
          <div className="flex items-center gap-x-1">
            <Link href="/dashboard">
              <div className="h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer">
                <ChevronLeft className="h-5 w-5" />
              </div>
            </Link>
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
          <Link href="/dashboard" className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium flex items-center space-x-2">
            <Home className="w-5 h-5" /> 
            <span>Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Content with padding for fixed header */}
      <div className="container mx-auto py-6 px-6 sm:px-6 lg:px-15 pt-20"> {/* Added pt-20 to account for header height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-1">
            <ProfileInfoCard  />
            <TaskStatisticsCard stats={profileData.stats} />
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    activeTab === "overview"
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  <User size={16} className="mr-2" />
                  Overview
                </button>
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    activeTab === "activity"
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("activity")}
                >
                  <Clock size={16} className="mr-2" />
                  Activity
                </button>
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    activeTab === "achievements"
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("achievements")}
                >
                  <Award size={16} className="mr-2" />
                  Achievements
                </button>
                <button
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    activeTab === "settings"
                      ? "border-b-2 border-blue-500 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings size={16} className="mr-2" />
                  Settings
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === "overview" && <OverviewTab profileData={profileData} />}
              {activeTab === "activity" && <ActivityTab recentActivity={profileData.recentActivity} />}
              {activeTab === "achievements" && <AchievementsTab achievements={profileData.achievements} />}
              {activeTab === "settings" && <SettingsTab settings={profileData.settings} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}