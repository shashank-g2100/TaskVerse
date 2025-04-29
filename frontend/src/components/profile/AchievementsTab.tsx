// // components/AchievementsTab.tsx
// import { Clock } from "lucide-react";
// import { ProfileData } from "@/types/types";

// interface AchievementsTabProps {
//   achievements: ProfileData["achievements"];
// }

// export const AchievementsTab: React.FC<AchievementsTabProps> = ({
//   achievements,
// }) => {
//   return (
//     <>
//       <h2 className="text-xl font-bold mb-1">Your Achievements</h2>
//       <p className="text-gray-600 text-sm mb-6">
//         Track your progress and earn badges
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {Object.values(achievements).map((achievement, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-4">
//             <div className="flex items-start mb-3">
//               <div className="bg-gray-100 p-2 rounded-full mr-3">
//                 <Clock size={20} className="text-gray-600" />
//               </div>
//               <div>
//                 <h4 className="font-semibold">{achievement.name}</h4>
//                 <p className="text-sm text-gray-600">{achievement.description}</p>
//               </div>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-blue-600 h-2 rounded-full"
//                 style={{ width: `${achievement.progress}%` }}
//               ></div>
//             </div>
//             <div className="text-right mt-1">
//               <span className="text-sm font-medium">{achievement.progress}%</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center">
//         <p className="text-sm text-gray-600">4 of 12 achievements unlocked</p>
//         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//           View All
//         </button>
//       </div>
//     </>
//   );
// };



import { Clock } from "lucide-react";

interface Achievement {
  name: string;
  description: string;
  progress: number;
}

interface AchievementsTabProps {
  achievements: {
    taskMaster: Achievement;
    earlyBird: Achievement;
    projectPro: Achievement;
    consistencyKing: Achievement;
  };
}

export default function AchievementsTab({ achievements }: AchievementsTabProps) {
  return (
    <>
      <h2 className="text-xl font-bold mb-1">Your Achievements</h2>
      <p className="text-gray-600 text-sm mb-6">Track your progress and earn badges</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.values(achievements).map((achievement, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start mb-3">
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <Clock size={20} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold">{achievement.name}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm font-medium">{achievement.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">4 of 12 achievements unlocked</p>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>
    </>
  );
}