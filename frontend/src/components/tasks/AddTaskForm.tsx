// "use client"

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '@/types/task';
// import { ChevronLeft } from 'lucide-react';


// interface AddTaskFormProps {
//   onClose: () => void;
//   onAddTask: (task: Omit<TaskItem, 'id'>) => void;
// }

// export const AddTaskForm = ({ onClose, onAddTask }: AddTaskFormProps) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('Today');
//   const [hour, setHour] = useState('12');
//   const [minute, setMinute] = useState('00');
//   const [ampm, setAmpm] = useState('PM');
//   const [project, setProject] = useState('');
//   const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');
//   const [reminder, setReminder] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Format time based on hour, minute and AM/PM
//     const formattedTime = `${hour}:${minute} ${ampm}`;
    
//     const newTask: Omit<TaskItem, 'id'> = {
//       title: title || 'New Task',
//       completed: false,
//       time: formattedTime,
//       date: date,
//       category: project || 'Personal',
//       priority: priority,
//       starred: false,
//       description: description
//     };
    
//     onAddTask(newTask);
//     onClose();
//   };

//   return (
//     // <div className="fixed inset-0 bg-gray-100 bg-opacity-30 flex items-center justify-center z-30">
//     <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-30">
//       <div className="bg-white rounded-lg shadow-xl">
//         <form onSubmit={handleSubmit} className="p-8">
//           <div className="flex items-center gap-x-2 mb-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               className=" h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors"
//               onClick={onClose}
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </Button> 
//             <h2 className="text-2xl font-bold">Add New Task</h2>
//           </div>
          
//           <div className="mb-2">
//             <label className="block text-sm font-medium mb-2">Task Title</label>
//             <input
//               type="text"
//               placeholder="Enter task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1  focus:outline-none"
//             />
//           </div>
          
//           <div className="mb-2">
//             <label className="block text-sm font-medium mb-2">Description</label>
//             <textarea
//               placeholder="Enter task description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none h-20"
//             />
//           </div>
          
//           <div className="grid grid-cols-2 gap-6 mb-2">
//             {/* <div>
//               <label className="block text-sm font-medium mb-2">Due Date</label>
//               <div className="relative">
//                 <input
//                   type="text" 
//                   value="April 25th, 2025"
//                   readOnly
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
//                 />
//                 <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                   <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
//                     <path d="M12 2h-1V0h-2v2H7V0H5v2H4C2.9 2 2 2.9 2 4v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H4V7h8v5z"/>
//                   </svg>
//                 </span>
//               </div>
//             </div> */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Due Date</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="dd/mm/yyyy"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
//                 />
//                 <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                   <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
//                     <path d="M12 2h-1V0h-2v2H7V0H5v2H4C2.9 2 2 2.9 2 4v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H4V7h8v5z"/>
//                   </svg>
//                 </span>
//               </div>
//             </div>

            
//             <div>
//               <label className="block text-sm font-medium mb-2">Time</label>
//               <div className="flex items-center">
//                 <select 
//                   value={hour}
//                   onChange={(e) => setHour(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none  w-24"
//                 >
//                   {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
//                     <option key={h} value={h < 10 ? `0${h}` : h}>{h}</option>
//                   ))}
//                 </select>
//                 <span className="mx-1 text-xl">:</span>
//                 <select 
//                   value={minute}
//                   onChange={(e) => setMinute(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none w-24"
//                 >
//                   {['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'].map((m) => (
//                     <option key={m} value={m}>{m}</option>
//                   ))}
//                 </select>
//                 <select 
//                   value={ampm}
//                   onChange={(e) => setAmpm(e.target.value)}
//                   className="ml-1 p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none w-24"
//                 >
//                   <option value="AM">AM</option>
//                   <option value="PM">PM</option>
//                 </select>
//               </div>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Project</label>
//             <select
//               value={project}
//               onChange={(e) => setProject(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
//             >
//               <option value="" disabled>Select a project</option>
//               <option value="Personal">Personal</option>
//               <option value="Work">Work</option>
//               <option value="Health">Health</option>
//             </select>
//           </div>
          
//           <div className="mb-2">
//             <label className="block text-sm font-medium mb-2">Priority</label>
//             <div className="flex items-center space-x-6">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="priority"
//                   value="Low"
//                   checked={priority === 'Low'}
//                   onChange={() => setPriority('Low')}
//                   className="mr-2 h-4 w-4"
//                 />
//                 Low
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="priority"
//                   value="Medium"
//                   checked={priority === 'Medium'}
//                   onChange={() => setPriority('Medium')}
//                   className="mr-2 h-4 w-4"
//                 />
//                 Medium
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="priority"
//                   value="High"
//                   checked={priority === 'High'}
//                   onChange={() => setPriority('High')}
//                   className="mr-2 h-4 w-4"
//                 />
//                 High
//               </label>
//             </div>
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Reminder</label>
//             <select
//               value={reminder}
//               onChange={(e) => setReminder(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
//             >
//               <option value="" disabled>Set a reminder</option>
//               <option value="10min">10 minutes before</option>
//               <option value="30min">30 minutes before</option>
//               <option value="1hour">1 hour before</option>
//               <option value="1day">1 day before</option>
//             </select>
//           </div>
          
//           <div className="flex justify-between">
//             <Button 
//               type="button" 
//               onClick={onClose}
//               className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
//             >
//               Cancel
//             </Button>
//             <Button 
//               type="submit"
//               className="bg-black text-white hover:bg-gray-800 px-6"
//             >
//               Save Task
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TaskItem } from "@/types/task";
import { ChevronLeft } from "lucide-react";

interface AddTaskFormProps {
  onClose: () => void;
  onAddTask: (task: Omit<TaskItem, "id">) => void;
}

export const AddTaskForm = ({ onClose, onAddTask }: AddTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmpm] = useState("PM");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedTime = `${hour}:${minute} ${ampm}`;
    const newTask: Omit<TaskItem, "id"> = {
      title: title || "New Task",
      completed: false,
      time: formattedTime,
      date: date,
      category: project || "Personal",
      priority: priority,
      starred: false,
      description: description,
    };

    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex items-center gap-x-2 mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl font-bold">Add New Task</h2>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1  focus:outline-none"
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
            <div>
              <label className="block text-sm font-medium mb-2">Due Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full py-1.5 px-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Time</label>
              <div className="flex items-center">
                <select
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none w-24"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                    <option key={h} value={h < 10 ? `0${h}` : h}>{h}</option>
                  ))}
                </select>
                <span className="mx-1 text-xl">:</span>
                <select
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none w-24"
                >
                  {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  value={ampm}
                  onChange={(e) => setAmpm(e.target.value)}
                  className="ml-1 p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none w-24"
                >
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            >
              <option value="" disabled>Select a project</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">Priority</label>
            <div className="flex items-center space-x-6">
              {["Low", "Medium", "High"].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={() => setPriority(level as "Low" | "Medium" | "High")}
                    className="mr-2 h-4 w-4"
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Reminder</label>
            <select
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            >
              <option value="" disabled>Set a reminder</option>
              <option value="10min">10 minutes before</option>
              <option value="30min">30 minutes before</option>
              <option value="1hour">1 hour before</option>
              <option value="1day">1 day before</option>
            </select>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={onClose}
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 px-6"
            >
              Save Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
