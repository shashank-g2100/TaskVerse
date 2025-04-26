// import React from 'react';

// type TabType = 'Today' | 'Upcoming' | 'All Tasks';

// interface TaskTabsProps {
//   activeTab: TabType;
//   setActiveTab: (tab: TabType) => void;
// }

// export default function TaskTabs({ activeTab, setActiveTab }: TaskTabsProps) {
//   return (
//     <div className="mb-6">
//       <div className="inline-flex rounded-md shadow" role="group">
//         {(['Today', 'Upcoming', 'All Tasks'] as const).map((tab) => (
//           <button
//             key={tab}
//             type="button"
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 text-sm font-medium ${
//               activeTab === tab
//                 ? 'bg-gray-200 text-gray-900'
//                 : 'bg-white text-gray-500 hover:bg-gray-50'
//             } ${tab === 'Today' ? 'rounded-l-md' : ''} ${tab === 'All Tasks' ? 'rounded-r-md' : ''}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"

import { ReactNode } from 'react';

type TabType = 'Today' | 'Upcoming' | 'All Tasks';

interface TaskTabProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function TaskTab({ activeTab, setActiveTab }: TaskTabProps) {
  const tabs: TabType[] = [ 'All Tasks', 'Today', 'Upcoming'];
  
  return (
    <div className="inline-flex rounded-md shadow" role="group">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab
              ? 'bg-gray-200 text-gray-900'
              : 'bg-white text-gray-500 hover:bg-gray-50'
          } ${tab === 'All Tasks' ? 'rounded-l-md' : ''} ${tab === 'Upcoming' ? 'rounded-r-md' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
