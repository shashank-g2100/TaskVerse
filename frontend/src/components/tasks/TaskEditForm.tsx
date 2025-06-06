// "use client"
// import { useState } from "react";

// export function TaskEditForm({ task, onSave, onCancel }) {
//   const [title, setTitle] = useState(task?.title || "");
//   const [description, setDescription] = useState(task?.description || "");
//   const [dueDate, setDueDate] = useState(task?.dueDate || "");
//   const [hour, setHour] = useState(task?.hour || "");
//   const [min, setMin] = useState(task?.min || "");
//   const [ampm, setAmpm] = useState(task?.ampm || "");
//   const [project, setProject] = useState(task?.project || "");
//   const [priority, setPriority] = useState(task?.priority || "Medium");
//   const [reminder, setReminder] = useState(task?.reminder || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({
//       ...task,
//       title,
//       description,
//       dueDate,
//       hour,
//       min,
//       ampm,
//       project,
//       priority,
//       reminder
//     });
//   };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     if (task?.id && confirm("Are you sure you want to delete this task?")) {
//       // Pass deletion up to parent component
//       onDelete?.(task.id);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
//         <div className="p-4 border-b flex items-center">
//           <button 
//             onClick={onCancel}
//             className="p-2 hover:bg-gray-100 rounded-full mr-2"
//           >
//             <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <h2 className="text-lg font-medium">Edit Task</h2>
//         </div>
        
//         <form onSubmit={handleSubmit} className="p-4">
//           <div className="mb-4">
//             <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
//             <input
//               id="task-title"
//               type="text"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               id="description"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               rows={3}
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
//             <input
//               id="due-date"
//               type="date"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//             />
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
//             <div className="flex gap-2">
//               <select 
//                 className="px-3 py-2 border border-gray-300 rounded-md"
//                 value={hour}
//                 onChange={(e) => setHour(e.target.value)}
//               >
//                 <option value="">Hour</option>
//                 {[...Array(12)].map((_, i) => (
//                   <option key={i} value={i+1}>{i+1}</option>
//                 ))}
//               </select>
              
//               <span className="flex items-center">:</span>
              
//               <select 
//                 className="px-3 py-2 border border-gray-300 rounded-md"
//                 value={min}
//                 onChange={(e) => setMin(e.target.value)}
//               >
//                 <option value="">Min</option>
//                 {[...Array(12)].map((_, i) => (
//                   <option key={i*5} value={i*5}>{i*5 < 10 ? `0${i*5}` : i*5}</option>
//                 ))}
//               </select>
              
//               <select 
//                 className="px-3 py-2 border border-gray-300 rounded-md"
//                 value={ampm}
//                 onChange={(e) => setAmpm(e.target.value)}
//               >
//                 <option value="">AM/PM</option>
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Project</label>
//             <div className="relative">
//               <select
//                 id="project"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
//                 value={project}
//                 onChange={(e) => setProject(e.target.value)}
//               >
//                 <option value="">Select a project</option>
//                 <option value="Personal">Personal</option>
//                 <option value="Work">Work</option>
//                 <option value="Health">Health</option>
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                 <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
//             <div className="flex gap-4">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="priority"
//                   value="Low"
//                   checked={priority === "Low"}
//                   onChange={() => setPriority("Low")}
//                 />
//                 <span className="ml-2">Low</span>
//               </label>
              
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="priority"
//                   value="Medium"
//                   checked={priority === "Medium"}
//                   onChange={() => setPriority("Medium")}
//                 />
//                 <span className="ml-2">Medium</span>
//               </label>
              
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio"
//                   name="priority"
//                   value="High"
//                   checked={priority === "High"}
//                   onChange={() => setPriority("High")}
//                 />
//                 <span className="ml-2">High</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="reminder" className="block text-sm font-medium text-gray-700 mb-1">Reminder</label>
//             <div className="relative">
//               <select
//                 id="reminder"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
//                 value={reminder}
//                 onChange={(e) => setReminder(e.target.value)}
//               >
//                 <option value="">Set a reminder</option>
//                 <option value="15min">15 minutes before</option>
//                 <option value="30min">30 minutes before</option>
//                 <option value="1hour">1 hour before</option>
//                 <option value="1day">1 day before</option>
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                 <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-between">
//             <button
//               type="button"
//               onClick={onCancel}
//               className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
//             >
//               Cancel
//             </button>
            
//             <div className="flex gap-2">
//               <button
//                 type="button"
//                 onClick={handleDelete}
//                 className="p-2 bg-red-50 text-red-500 rounded-md hover:bg-red-100"
//               >
//                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                 </svg>
//               </button>
              
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  time?: {
    hour?: string;
    min?: string;
    ampm?: string;
  };
  project?: string;
  priority: "Low" | "Medium" | "High";
  reminder?: string;
}

interface TaskEditFormProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
  onDelete?: (taskId: string) => void;
}

export function TaskEditForm({ task, onSave, onCancel, onDelete }: TaskEditFormProps) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [hour, setHour] = useState(task?.time?.hour || '');
  const [min, setMin] = useState(task?.time?.min || '');
  const [ampm, setAmpm] = useState(task?.time?.ampm || '');
  const [project, setProject] = useState(task?.project || '');
  const [priority, setPriority] = useState(task?.priority || 'Medium');
  const [reminder, setReminder] = useState(task?.reminder || '');

  const projectOptions = ['Personal', 'Work', 'Health', 'Education', 'Finance', 'Other'];
  const reminderOptions = [
    { label: 'None', value: '' },
    { label: '15 minutes before', value: '15min' },
    { label: '30 minutes before', value: '30min' },
    { label: '1 hour before', value: '1hour' },
    { label: '1 day before', value: '1day' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedTask: Task = {
      ...task,
      title: title || 'New Task',
      description,
      dueDate,
      time: {
        hour,
        min,
        ampm
      },
      project,
      priority: priority as "Low" | "Medium" | "High",
      reminder
    };
    
    onSave(updatedTask);
  };

  const handleDelete = () => {
    if (onDelete && task.id && confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex items-center gap-x-2 mb-4">
            <button
              type="button"
              className="h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
              onClick={onCancel}
            >
              <ChevronLeft className="h-5 w-5" />
            </button> 
            <h2 className="text-2xl font-bold">Edit Task</h2>
          </div>
          
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            />
          </div>
          
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none h-20"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-2">
						<div className="mb-2">
							<label className="block text-sm font-medium mb-2">Due Date</label>
							<input
								type="date"
								value={dueDate}
								onChange={(e) => setDueDate(e.target.value)}
								className="w-full p-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
							/>
						</div>
          
						<div className="mb-2">
							<label className="block text-sm font-medium mb-2">Time</label>
							<div className="flex gap-2">
								<select 
									className="flex-1 p-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
									value={hour}
									onChange={(e) => setHour(e.target.value)}
								>
									<option value="">Hour</option>
									{[...Array(12)].map((_, i) => (
										<option key={i+1} value={i+1}>{i+1}</option>
									))}
								</select>
								
								<span className="flex items-center">:</span>
								
								<select 
									className="flex-1 p-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
									value={min}
									onChange={(e) => setMin(e.target.value)}
								>
									<option value="">Min</option>
									{[...Array(12)].map((_, i) => (
										<option key={i*5} value={i*5}>{i*5 < 10 ? `0${i*5}` : i*5}</option>
									))}
								</select>
								
								<select 
									className="flex-1 p-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
									value={ampm}
									onChange={(e) => setAmpm(e.target.value)}
								>
									{/* <option value="">AM/PM</option> */}
									<option value="AM">AM</option>
									<option value="PM">PM</option>
								</select>
							</div>
						</div>
					</div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Project</label>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            >
              <option value="">Select a project</option>
              {projectOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Priority</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={priority === "Low"}
                  onChange={() => setPriority("Low")}
                  className="mr-2"
                />
                <span>Low</span>
              </label>
              
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="priority"
                  value="Medium"
                  checked={priority === "Medium"}
                  onChange={() => setPriority("Medium")}
                  className="mr-2"
                />
                <span>Medium</span>
              </label>
              
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="priority"
                  value="High"
                  checked={priority === "High"}
                  onChange={() => setPriority("High")}
                  className="mr-2"
                />
                <span>High</span>
              </label>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Reminder</label>
            <select
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            >
              {reminderOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex justify-between">
            <button 
              type="button" 
              onClick={onCancel}
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
            <div className="flex gap-2">
              {onDelete && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 flex items-center justify-center"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
              <button 
                type="submit"
                className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}