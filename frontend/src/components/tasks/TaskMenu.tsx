
// import React from 'react';

// interface TaskMenuProps {
//   taskId: string;
//   isOpen: boolean;
//   onClose: () => void;
//   onMarkComplete: (id: string) => void;
//   onDelete: (id: string) => void;
// }

// export default function TaskMenu({ taskId, isOpen, onClose, onMarkComplete, onDelete }: TaskMenuProps) {
//   if (!isOpen) return null;

//   return (
//     <div className="absolute right-0 p-2 mt-2 w-50 rounded-md shadow-lg bg-white z-20">
//       <div className="py-1" role="menu" aria-orientation="vertical">
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Edit functionality would be implemented here
//             onClose();
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//           </svg>
//           Edit
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             onMarkComplete(taskId);
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//           Mark as complete
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             onDelete(taskId);
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//           </svg>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }


// // components/TaskMenu.tsx
// import React from 'react';

// interface TaskMenuProps {
//   taskId: string;
//   isOpen: boolean;
//   onClose: () => void;
//   onMarkComplete: (id: string) => void;
//   onDelete: (id: string) => void;
// }

// export default function TaskMenu({ taskId, isOpen, onClose, onMarkComplete, onDelete }: TaskMenuProps) {
//   if (!isOpen) return null;

//   return (
//     <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
//       <div className="py-1" role="menu" aria-orientation="vertical">
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             // Edit functionality would be implemented here
//             onClose();
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//           </svg>
//           Edit
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             onMarkComplete(taskId);
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//           Mark as complete
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             onDelete(taskId);
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//           </svg>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// components/ui/TaskMenu.tsx
"use client"

interface TaskMenuProps {
  isOpen: boolean;
  taskId: string;
  onEdit: () => void;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskMenu({ isOpen, taskId, onEdit, onComplete, onDelete }: TaskMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
      <div className="py-1" role="menu" aria-orientation="vertical">
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={(e) => {
            e.stopPropagation();
            onComplete(taskId);
          }}
        >
          <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Mark as complete
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(taskId);
          }}
        >
          <svg className="mr-3 h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}