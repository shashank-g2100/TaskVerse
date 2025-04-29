// // components/ActivityTab.tsx
// import { ProfileData } from "@/types/types";

// interface ActivityTabProps {
//   activity: ProfileData["recentActivity"];
// }

// export const ActivityTab: React.FC<ActivityTabProps> = ({ activity }) => {
//   return (
//     <>
//       <h2 className="text-xl font-bold mb-1">Recent Activity</h2>
//       <p className="text-gray-600 text-sm mb-6">Your task management history</p>

//       <div className="space-y-4">
//         {activity.map((item, index) => (
//           <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h4 className="font-medium">{item.action}</h4>
//                 <p className="text-sm text-gray-600">{item.time}</p>
//               </div>
//               <span className="text-sm text-gray-500">{item.timeAgo}</span>
//             </div>
//           </div>
//         ))}

//         <button className="w-full bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-md mt-4 text-gray-700 font-medium">
//           View All Activity
//         </button>
//       </div>
//     </>
//   );
// };


import { AlertCircle } from "lucide-react";

interface ActivityItem {
  action: string;
  time: string;
  timeAgo: string;
}

interface ActivityTabProps {
  recentActivity: ActivityItem[];
}

export default function ActivityTab({ recentActivity }: ActivityTabProps) {
  return (
    <>
      <h2 className="text-xl font-bold mb-1">Recent Activity</h2>
      <p className="text-gray-600 text-sm mb-6">Your task management history</p>
      
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{activity.action}</h4>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.timeAgo}</span>
            </div>
          </div>
        ))}
        
        <button className="w-full bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-md mt-4 text-gray-700 font-medium">
          View All Activity
        </button>
      </div>
    </>
  );
}