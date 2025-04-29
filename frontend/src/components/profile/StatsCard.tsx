// // components/StatsCard.tsx
// import { ProfileData } from "@/types/types";


// interface StatsCardProps {
//   stats: ProfileData["stats"];
// }

// export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6 mt-6">
//       <h3 className="text-lg font-semibold mb-4">Task Statistics</h3>

//       <div className="mb-4">
//         <div className="flex justify-between mb-1">
//           <span className="text-sm text-gray-700">Completion Rate</span>
//           <span className="text-sm font-semibold">{stats.completionRate}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-blue-600 h-2 rounded-full"
//             style={{ width: `${stats.completionRate}%` }}
//           ></div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-gray-50 p-4 rounded-md text-center">
//           <div className="text-2xl font-bold">{stats.totalTasks}</div>
//           <div className="text-sm text-gray-600">Total Tasks</div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-md text-center">
//           <div className="text-2xl font-bold">{stats.completedTasks}</div>
//           <div className="text-sm text-gray-600">Completed</div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-gray-50 p-4 rounded-md text-center">
//           <div className="text-2xl font-bold">{stats.importantTasks}</div>
//           <div className="text-sm text-gray-600">Important</div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-md text-center">
//           <div className="text-2xl font-bold">{stats.todayTasks}</div>
//           <div className="text-sm text-gray-600">Today</div>
//         </div>
//       </div>
//     </div>
//   );
// };


// components/StatsCard.tsx

import { profileData } from "@/data/data";

interface StatsCardProps {
    stats: typeof profileData.stats;
  }
  
  export function StatsCard({ stats }: StatsCardProps) {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Stats</h3>
          <dl className="mt-4 space-y-4">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <dt className="text-sm font-medium text-gray-500 capitalize">{key.replace('_', ' ')}</dt>
                <dd className="text-sm font-bold text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  