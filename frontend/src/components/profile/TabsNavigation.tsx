// // components/TabNavigation.tsx
// import { User, Clock, Award, Settings } from "lucide-react";

// interface TabNavigationProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

// export const TabNavigation: React.FC<TabNavigationProps> = ({
//   activeTab,
//   setActiveTab,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow mb-6">
//       <div className="flex border-b border-gray-200">
//         <button
//           className={`flex items-center px-4 py-3 text-sm font-medium ${
//             activeTab === "overview"
//               ? "border-b-2 border-blue-500 text-blue-600"
//               : "text-gray-600 hover:text-gray-800"
//           }`}
//           onClick={() => setActiveTab("overview")}
//         >
//           <User size={16} className="mr-2" />
//           Overview
//         </button>
//         <button
//           className={`flex items-center px-4 py-3 text-sm font-medium ${
//             activeTab === "activity"
//               ? "border-b-2 border-blue-500 text-blue-600"
//               : "text-gray-600 hover:text-gray-800"
//           }`}
//           onClick={() => setActiveTab("activity")}
//         >
//           <Clock size={16} className="mr-2" />
//           Activity
//         </button>
//         <button
//           className={`flex items-center px-4 py-3 text-sm font-medium ${
//             activeTab === "achievements"
//               ? "border-b-2 border-blue-500 text-blue-600"
//               : "text-gray-600 hover:text-gray-800"
//           }`}
//           onClick={() => setActiveTab("achievements")}
//         >
//           <Award size={16} className="mr-2" />
//           Achievements
//         </button>
//         <button
//           className={`flex items-center px-4 py-3 text-sm font-medium ${
//             activeTab === "settings"
//               ? "border-b-2 border-blue-500 text-blue-600"
//               : "text-gray-600 hover:text-gray-800"
//           }`}
//           onClick={() => setActiveTab("settings")}
//         >
//           <Settings size={16} className="mr-2" />
//           Settings
//         </button>
//       </div>
//     </div>
//   );
// };



// components/TabNavigation.tsx
interface TabNavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
  }
  
  export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    const tabs = [
      { id: "overview", label: "Overview" },
      { id: "activity", label: "Activity" },
      { id: "achievements", label: "Achievements" },
      { id: "settings", label: "Settings" },
    ];
  
    return (
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    );
  }