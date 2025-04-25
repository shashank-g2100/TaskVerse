// // components/TaskItem.tsx

// import TaskMenu from "./TaskMenu";
// import {
//   TaskItem as TaskItemType,
//   PriorityType,
//   CategoryType,
// } from "@/types/task";
// import { Star, MoreHorizontal, Clock } from "lucide-react";
// import React from "react";

// interface TaskListProps {
//   task: TaskListType;
//   activeMenu: string | null;
//   toggleMenu: (id: string) => void;
//   toggleTaskCompletion: (id: string) => void;
//   toggleTaskStar: (id: string) => void;
//   markTaskComplete: (id: string) => void;
//   deleteTask: (id: string) => void;
// }

// export default function TaskList({
//   task,
//   activeMenu,
//   toggleMenu,
//   toggleTaskCompletion,
//   toggleTaskStar,
//   markTaskComplete,
//   deleteTask,
// }: TaskItemProps) {
//   const getPriorityColor = (priority: PriorityType) => {
//     switch (priority) {
//       case "High":
//         return "bg-red-100 text-red-800";
//       case "Medium":
//         return "bg-yellow-100 text-yellow-800";
//       case "Low":
//         return "bg-green-100 text-green-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getCategoryColor = (category: CategoryType) => {
//     switch (category) {
//       case "Work":
//         return "bg-teal-100 text-teal-800";
//       case "Personal":
//         return "bg-blue-100 text-blue-800";
//       case "Health":
//         return "bg-purple-100 text-purple-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//       <div className="flex items-center space-x-3">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => toggleTaskCompletion(task.id)}
//           className="w-5 h-5 rounded border-gray-300"
//         />
//         <span
//           className={`font-medium ${
//             task.completed ? "line-through text-gray-400" : ""
//           }`}
//         >
//           {task.title}
//         </span>
//       </div>

//       <div className="flex items-center space-x-3">
//         <div className="flex items-center space-x-2">
//           <Clock size={16} className="text-gray-500" />
//           <span className="text-sm text-gray-500">
//             {task.date}, {task.time}
//           </span>
//         </div>

//         <div
//           className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(
//             task.category
//           )}`}
//         >
//           {task.category}
//         </div>

//         <div
//           className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(
//             task.priority
//           )}`}
//         >
//           {task.priority}
//         </div>

//         <button
//           onClick={() => toggleTaskStar(task.id)}
//           className="text-gray-400 hover:text-yellow-500"
//         >
//           <Star size={18} fill={task.starred ? "gold" : "none"} />
//         </button>

//         <div className="relative">
//           <button
//             className="text-gray-400 hover:text-gray-500"
//             onClick={(e) => {
//               e.stopPropagation();
//               toggleMenu(task.id);
//             }}
//           >
//             <MoreHorizontal size={18} />
//           </button>

//           <TaskMenu
//             taskId={task.id}
//             isOpen={activeMenu === task.id}
//             onClose={() => toggleMenu("")}
//             onMarkComplete={markTaskComplete}
//             onDelete={deleteTask}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


// // components/TaskItem.tsx
// import React from 'react';
// import { Star, MoreHorizontal, Clock } from 'lucide-react';
// import { TaskItem as TaskItemType, PriorityType, CategoryType } from '../types/task';
// import TaskMenu from './TaskMenu';

// interface TaskItemProps {
//   task: TaskItemType;
//   activeMenu: string | null;
//   toggleMenu: (id: string) => void;
//   toggleTaskCompletion: (id: string) => void;
//   toggleTaskStar: (id: string) => void;
//   markTaskComplete: (id: string) => void;
//   deleteTask: (id: string) => void;
// }

// export default function TaskListItem({
//   task,
//   activeMenu,
//   toggleMenu,
//   toggleTaskCompletion,
//   toggleTaskStar,
//   markTaskComplete,
//   deleteTask
// }: TaskItemProps) {
//   const getPriorityColor = (priority: PriorityType) => {
//     switch (priority) {
//       case 'High': return 'bg-red-100 text-red-800';
//       case 'Medium': return 'bg-yellow-100 text-yellow-800';
//       case 'Low': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getCategoryColor = (category: CategoryType) => {
//     switch (category) {
//       case 'Work': return 'bg-teal-100 text-teal-800';
//       case 'Personal': return 'bg-blue-100 text-blue-800';
//       case 'Health': return 'bg-purple-100 text-purple-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div 
//       className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100"
//     >
//       <div className="flex items-center space-x-3">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => toggleTaskCompletion(task.id)}
//           className="w-5 h-5 rounded border-gray-300"
//         />
//         <span className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
//           {task.title}
//         </span>
//       </div>
      
//       <div className="flex items-center space-x-3">
//         <div className="flex items-center space-x-2">
//           <Clock size={16} className="text-gray-500" />
//           <span className="text-sm text-gray-500">{task.date}, {task.time}</span>
//         </div>
        
//         <div className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(task.category)}`}>
//           {task.category}
//         </div>
        
//         <div className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
//           {task.priority}
//         </div>
        
//         <button 
//           onClick={() => toggleTaskStar(task.id)}
//           className="text-gray-400 hover:text-yellow-500"
//         >
//           <Star size={18} fill={task.starred ? "gold" : "none"} />
//         </button>
        
//         <div className="relative">
//           <button 
//             className="text-gray-400 hover:text-gray-500"
//             onClick={(e) => {
//               e.stopPropagation();
//               toggleMenu(task.id);
//             }}
//           >
//             <MoreHorizontal size={18} />
//           </button>
          
//           <TaskMenu 
//             taskId={task.id}
//             isOpen={activeMenu === task.id}
//             onClose={() => toggleMenu('')}
//             onMarkComplete={markTaskComplete}
//             onDelete={deleteTask}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// components/tasks/TaskList.tsx
"use client"

import { TaskItem } from '@/types/task';
import { TaskCard } from '@/components/tasks/TaskCard'; // Updated path
import { EmptyTaskList } from '@/components/tasks/EmptyTaskList'; // Updated path

interface TaskListProps {
  tasks: TaskItem[];
  onToggleComplete: (taskId: string) => void;
  onToggleStar: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function TaskList({ 
  tasks = [], // Add a default empty array 
  onToggleComplete, 
  onToggleStar, 
  onDeleteTask,
  onCompleteTask
}: TaskListProps) {
  // Ensure tasks is an array before checking length
  if (!tasks || tasks.length === 0) {
    return <EmptyTaskList />;
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskCard 
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onToggleStar={onToggleStar}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ))}
    </div>
  );
}