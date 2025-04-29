// // components/OverviewTab.tsx
// import { AlertCircle } from "lucide-react";
// import { ProfileData } from "@/types/types";

import { AlertCircle } from "lucide-react";

// interface OverviewTabProps {
//   profileData: ProfileData;
// }

// export const OverviewTab: React.FC<OverviewTabProps> = ({ profileData }) => {
//   return (
//     <>
//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-1">Productivity Overview</h2>
//         <p className="text-gray-600 text-sm">
//           Your task completion trends over time
//         </p>

//         <div className="mt-8 flex justify-center items-center h-40 bg-gray-50 rounded-lg">
//           <div className="text-center">
//             <svg
//               className="w-12 h-12 mx-auto text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//               />
//             </svg>
//             <h3 className="mt-4 text-lg font-semibold">Productivity Insights</h3>
//             <p className="mt-2 text-sm text-gray-600">
//               Track your productivity trends over time. Complete more tasks to
//               see your progress visualized here.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Project Distribution */}
//         <div>
//           <h3 className="text-lg font-semibold mb-1">Project Distribution</h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Tasks by project category
//           </p>

//           <div className="space-y-4">
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="flex items-center">
//                   <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
//                   <span className="text-sm">Personal</span>
//                 </span>
//                 <span className="text-sm font-semibold">
//                   {profileData.projects.personal.percentage}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-blue-500 h-2 rounded-full"
//                   style={{
//                     width: `${profileData.projects.personal.percentage}%`,
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="flex items-center">
//                   <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
//                   <span className="text-sm">Work</span>
//                 </span>
//                 <span className="text-sm font-semibold">
//                   {profileData.projects.work.percentage}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-green-500 h-2 rounded-full"
//                   style={{ width: `${profileData.projects.work.percentage}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="flex items-center">
//                   <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
//                   <span className="text-sm">Health</span>
//                 </span>
//                 <span className="text-sm font-semibold">
//                   {profileData.projects.health.percentage}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-purple-500 h-2 rounded-full"
//                   style={{ width: `${profileData.projects.health.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Priority Breakdown */}
//         <div>
//           <h3 className="text-lg font-semibold mb-1">Priority Breakdown</h3>
//           <p className="text-gray-600 text-sm mb-4">Tasks by priority level</p>

//           <div className="grid grid-cols-3 gap-4 mb-4">
//             <div className="bg-red-50 p-4 rounded-md text-center">
//               <div className="text-2xl font-bold text-red-600">
//                 {profileData.priorities.high.percentage}%
//               </div>
//               <div className="text-sm text-red-800">High</div>
//             </div>
//             <div className="bg-yellow-50 p-4 rounded-md text-center">
//               <div className="text-2xl font-bold text-yellow-600">
//                 {profileData.priorities.medium.percentage}%
//               </div>
//               <div className="text-sm text-yellow-800">Medium</div>
//             </div>
//             <div className="bg-green-50 p-4 rounded-md text-center">
//               <div className="text-2xl font-bold text-green-600">
//                 {profileData.priorities.low.percentage}%
//               </div>
//               <div className="text-sm text-green-800">Low</div>
//             </div>
//           </div>

//           <div className="bg-blue-50 p-4 rounded-md">
//             <div className="flex items-start">
//               <AlertCircle size={20} className="text-blue-600 mr-2 mt-1" />
//               <p className="text-sm text-blue-800">
//                 You tend to focus on medium priority tasks first. Consider
//                 tackling more high priority items to improve productivity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


interface OverviewTabProps {
    profileData: {
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
    };
  }
  
  export default function OverviewTab({ profileData }: OverviewTabProps) {
    return (
      <>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-1">Productivity Overview</h2>
          <p className="text-gray-600 text-sm">Your task completion trends over time</p>
          
          <div className="mt-8 flex justify-center items-center h-52 bg-gray-100 rounded-lg">
            <div className="text-center ">
              <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">Productivity Insights</h3>
              <p className="mt-2 text-sm text-gray-600">
                Track your productivity trends over time. Complete more tasks to see your progress visualized here.
              </p>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Distribution */}
          <div className="border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-1">Project Distribution</h3>
            <p className="text-gray-600 text-sm mb-4">Tasks by project category</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-sm">Personal</span>
                  </span>
                  <span className="text-sm font-semibold">{profileData.projects.personal.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${profileData.projects.personal.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm">Work</span>
                  </span>
                  <span className="text-sm font-semibold">{profileData.projects.work.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${profileData.projects.work.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div >
                <div className="flex justify-between mb-1">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-sm">Health</span>
                  </span>
                  <span className="text-sm font-semibold">{profileData.projects.health.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full" 
                    style={{ width: `${profileData.projects.health.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Priority Breakdown */}
          <div className="border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-1">Priority Breakdown</h3>
            <p className="text-gray-600 text-sm mb-4">Tasks by priority level</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-red-600">{profileData.priorities.high.percentage}%</div>
                <div className="text-sm text-red-800">High</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-yellow-600">{profileData.priorities.medium.percentage}%</div>
                <div className="text-sm text-yellow-800">Medium</div>
              </div>
              <div className="bg-green-50 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-green-600">{profileData.priorities.low.percentage}%</div>
                <div className="text-sm text-green-800">Low</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex items-start">
                <AlertCircle size={40} className="text-blue-600 mr-2 mt-1" />
                <p className="text-sm text-blue-800">
                  You tend to focus on medium priority tasks first. Consider tackling more high priority items to improve productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }