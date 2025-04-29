// "use client"
// import { useState } from "react";
// import { TaskEditForm } from "./TaskEditForm";

// interface TaskMenuProps {
//   isOpen: boolean;
//   taskId: string;
//   task: any; // Add the task object as a prop
//   onComplete: (taskId: string) => void;
//   onDelete: (taskId: string) => void;
//   onSaveEdit?: (updatedTask: any) => void; // Add callback for saving edits
// }

// export function TaskMenu({ isOpen, taskId, task, onComplete, onDelete, onSaveEdit }: TaskMenuProps) {
//   const [isEditFormOpen, setIsEditFormOpen] = useState(false);

//   if (!isOpen && !isEditFormOpen) return null;
  
//   // Handle opening the edit form
//   const handleEdit = (e) => {
//     e.stopPropagation();
//     setIsEditFormOpen(true);
//   };

//   // Handle saving task edits
//   const handleSaveEdit = (updatedTask) => {
//     if (onSaveEdit) {
//       onSaveEdit(updatedTask);
//     }
//     setIsEditFormOpen(false);
//   };

//   // Handle canceling edits
//   const handleCancelEdit = () => {
//     setIsEditFormOpen(false);
//   };

//   // If edit form is open, render it instead of the menu
//   if (isEditFormOpen) {
//     return (
//       <TaskEditForm
//         task={task}
//         onSave={handleSaveEdit}
//         onCancel={handleCancelEdit}
//         onDelete={onDelete}
//       />
//     );
//   }

//   // Otherwise render the regular menu
//   return (
//     <div className="absolute right-0 p-1 mt-2 w-50 rounded-md shadow-lg bg-white z-20">
//       <div className="py-1" role="menu" aria-orientation="vertical">
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
//           onClick={handleEdit}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//           </svg>
//           Edit
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
//           onClick={(e) => {
//             e.stopPropagation();
//             onComplete(taskId);
//           }}
//         >
//           <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//           Mark as complete
//         </button>
//         <button
//           className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md w-full text-left"
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

"use client"
import { useState, useEffect, useRef } from "react";
import { TaskEditForm } from "./TaskEditForm";

interface TaskMenuProps {
  isOpen: boolean;
  taskId: string;
  task: any;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onSaveEdit?: (updatedTask: any) => void;
  onClose: () => void; // This is now required, not optional
}

export function TaskMenu({ 
  isOpen, 
  taskId, 
  task, 
  onComplete, 
  onDelete, 
  onSaveEdit,
  onClose 
}: TaskMenuProps) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    // This function handles clicks anywhere in the document
    function handleClickOutside(event: MouseEvent) {
      // Check if click is outside our menu element
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("Click detected outside menu");
        if (isEditFormOpen) {
          setIsEditFormOpen(false);
        } else {
          onClose();
        }
      }
    }

    // Only add listeners if menu is actually open
    if (isOpen || isEditFormOpen) {
      console.log("Adding click event listener");
      // Use mousedown instead of click for better UX
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      console.log("Removing click event listener");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isEditFormOpen, onClose]);

  // Early return if not open
  if (!isOpen && !isEditFormOpen) {
    return null;
  }
  
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditFormOpen(true);
  };
  
  const handleSaveEdit = (updatedTask: any) => {
    if (onSaveEdit) {
      onSaveEdit(updatedTask);
    }
    setIsEditFormOpen(false);
  };
  
  const handleCancelEdit = () => {
    setIsEditFormOpen(false);
  };
  
  if (isEditFormOpen) {
    return (
      <div ref={menuRef} className="absolute right-0 mt-2 w-56 z-30">
        <TaskEditForm
          task={task}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          onDelete={onDelete}
        />
      </div>
    );
  }
  
  return (
    <div 
      ref={menuRef}
      className="absolute right-0 p-1 mt-2 w-56 rounded-md shadow-lg bg-white z-20"
      onClick={(e) => e.stopPropagation()} // Prevent clicks on menu from bubbling up
    >
      <div className="py-1" role="menu" aria-orientation="vertical">
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
          onClick={handleEdit}
        >
          <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
          onClick={(e) => {
            e.stopPropagation();
            onComplete(taskId);
            onClose(); // Close menu after action
          }}
        >
          <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Mark as complete
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md w-full text-left"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(taskId);
            onClose(); // Close menu after action
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