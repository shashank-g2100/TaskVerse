// "use client"

// import { useState, useEffect } from 'react';
// import { Sidebar } from '@/components/dashboard/sidebar';
// import { Header } from '@/components/dashboard/header';


// export default function ImportantPage () {
//   return(
//   	<div className="flex h-screen bg-gray-100">
//       <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col flex-1 ml-54 overflow-hidden ">
//         <div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
//           <Header user={{ id: "", name: "", email: "" }} />
//       	</div>

//         <main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
//           <div className="max-w-7xl mx-auto pt-2">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-bold">History Tasks</h1>             
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '@/types/task';
// import { TaskList } from '@/components/tasks/TaskList';
// import { Sidebar } from '@/components/dashboard/sidebar';
// import { Header } from '@/components/dashboard/header';
// import { History, Clock, Filter, CheckCircle2 } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function HistoryPage() {
//   const [filterCategory, setFilterCategory] = useState<string>('All');
//   const [filterPeriod, setFilterPeriod] = useState<string>('All Time');
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Complete project proposal',
//       completed: true,
//       time: '2:00 PM',
//       date: '2025-04-20',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '2',
//       title: 'Schedule dentist appointment',
//       completed: true,
//       time: '4:00 PM',
//       date: '2025-04-22',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Grocery shopping',
//       completed: true,
//       time: '6:00 PM',
//       date: '2025-04-23',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Morning workout routine',
//       completed: true,
//       time: '7:00 AM',
//       date: '2025-04-24',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '5',
//       title: 'Team standup meeting',
//       completed: true,
//       time: '9:30 AM',
//       date: '2025-04-25',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '6',
//       title: 'Review quarterly reports',
//       completed: true,
//       time: '11:00 AM',
//       date: '2025-04-15',
//       category: 'Work',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '7',
//       title: 'Pick up dry cleaning',
//       completed: true,
//       time: '3:30 PM',
//       date: '2025-04-18',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '8',
//       title: 'Evening jog',
//       completed: true,
//       time: '6:30 PM',
//       date: '2025-04-20',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     }
//   ]);

//   // Get unique categories from tasks
//   const categories = ['All', ...new Set(tasks.map(task => task.category))];

//   const toggleTaskCompletion = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const toggleTaskStar = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, starred: !task.starred } : task
//     ));
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   // Filter completed tasks
//   const completedTasks = tasks.filter(task => task.completed);

//   // Apply category filter
//   const filteredByCategory = filterCategory === 'All' 
//     ? completedTasks 
//     : completedTasks.filter(task => task.category === filterCategory);

//   // Apply time period filter
//   const getFilteredTasks = () => {
//     if (filterPeriod === 'All Time') {
//       return filteredByCategory;
//     }

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
    
//     const taskDates = filteredByCategory.map(task => {
//       const taskDate = new Date(task.date);
//       return { ...task, dateObj: taskDate };
//     });

//     if (filterPeriod === 'Last 7 Days') {
//       const lastWeek = new Date(today);
//       lastWeek.setDate(lastWeek.getDate() - 7);
//       return taskDates.filter(task => task.dateObj >= lastWeek);
//     } else if (filterPeriod === 'Last 30 Days') {
//       const lastMonth = new Date(today);
//       lastMonth.setDate(lastMonth.getDate() - 30);
//       return taskDates.filter(task => task.dateObj >= lastMonth);
//     } else if (filterPeriod === 'This Week') {
//       const startOfWeek = new Date(today);
//       startOfWeek.setDate(today.getDate() - today.getDay());
//       return taskDates.filter(task => task.dateObj >= startOfWeek);
//     } else if (filterPeriod === 'This Month') {
//       const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//       return taskDates.filter(task => task.dateObj >= startOfMonth);
//     }
    
//     return filteredByCategory;
//   };

//   const finalFilteredTasks = getFilteredTasks();

//   // Group tasks by date
//   const groupTasksByDate = () => {
//     const grouped = {};
//     finalFilteredTasks.forEach(task => {
//       if (!grouped[task.date]) {
//         grouped[task.date] = [];
//       }
//       grouped[task.date].push(task);
//     });
//     return grouped;
//   };

//   const groupedTasks = groupTasksByDate();
//   const sortedDates = Object.keys(groupedTasks).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

//   return (
//     <>
//       <div className="flex h-screen bg-gray-100">
//         <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
//           <Sidebar />
//         </div>
//         <div className="flex flex-col flex-1 ml-54 overflow-hidden">
//           <div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
//             <Header user={{ id: "", name: "", email: "" }} />
//           </div>

//           <main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
//             <div className="max-w-7xl mx-auto pt-2">
//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   <History className="w-6 h-6 mr-2" />
//                   <h1 className="text-2xl font-bold">Completed Tasks</h1>
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="flex items-center">
//                     <Filter className="w-5 h-5 mr-2 text-gray-500" />
//                     <Select value={filterCategory} onValueChange={setFilterCategory}>
//                       <SelectTrigger className="w-32 bg-white focus:ring-0 focus:ring-gray-100 focus:outline-none">
//                         <SelectValue placeholder="Category" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white">
//                         {categories.map(category => (
//                           <SelectItem key={category} value={category}>
//                             {category}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="w-5 h-5 mr-2 text-gray-500" />
//                     <Select value={filterPeriod} onValueChange={setFilterPeriod}>
//                       <SelectTrigger className="w-36 bg-white focus:ring-0 focus:ring-gray-100 focus:outline-none">
//                         <SelectValue placeholder="Time Period" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white">
//                         <SelectItem value="All Time">All Time</SelectItem>
//                         <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
//                         <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
//                         <SelectItem value="This Week">This Week</SelectItem>
//                         <SelectItem value="This Month">This Month</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               {finalFilteredTasks.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-12 text-gray-500">
//                   <CheckCircle2 className="w-16 h-16 mb-4 text-gray-300" />
//                   <h3 className="text-xl font-medium">No completed tasks found</h3>
//                   <p className="mt-2">Complete some tasks to see them in your history</p>
//                 </div>
//               ) : (
//                 <>
//                   {sortedDates.map(date => (
//                     <div key={date} className="mb-8">
//                       <h2 className="text-lg font-semibold mb-4 text-gray-700">
//                         {new Date(date).toLocaleDateString('en-US', { 
//                           weekday: 'long',
//                           year: 'numeric', 
//                           month: 'long', 
//                           day: 'numeric' 
//                         })}
//                       </h2>
//                       <TaskList 
//                         tasks={groupedTasks[date]}
//                         onToggleComplete={toggleTaskCompletion}
//                         onToggleStar={toggleTaskStar}
//                         onDeleteTask={deleteTask}
//                         onCompleteTask={() => {}}
//                       />
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskList } from '@/components/tasks/TaskList';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { History, Clock, Filter, CheckCircle2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HistoryPage() {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterPeriod, setFilterPeriod] = useState<string>('All Time');
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: '1',
      title: 'Complete project proposal',
      completed: true,
      time: '2:00 PM',
      date: '2025-04-20',
      category: 'Work',
      priority: 'High',
      starred: false
    },
    {
      id: '2',
      title: 'Schedule dentist appointment',
      completed: true,
      time: '4:00 PM',
      date: '2025-04-22',
      category: 'Personal',
      priority: 'Medium',
      starred: false
    },
    {
      id: '3',
      title: 'Grocery shopping',
      completed: true,
      time: '6:00 PM',
      date: '2025-04-23',
      category: 'Personal',
      priority: 'Low',
      starred: false
    },
    {
      id: '4',
      title: 'Morning workout routine',
      completed: true,
      time: '7:00 AM',
      date: '2025-04-24',
      category: 'Health',
      priority: 'Medium',
      starred: false
    },
    {
      id: '5',
      title: 'Team standup meeting',
      completed: true,
      time: '9:30 AM',
      date: '2025-04-25',
      category: 'Work',
      priority: 'High',
      starred: false
    },
    {
      id: '6',
      title: 'Review quarterly reports',
      completed: true,
      time: '11:00 AM',
      date: '2025-04-15',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '7',
      title: 'Pick up dry cleaning',
      completed: true,
      time: '3:30 PM',
      date: '2025-04-18',
      category: 'Personal',
      priority: 'Low',
      starred: false
    },
    {
      id: '8',
      title: 'Evening jog',
      completed: true,
      time: '6:30 PM',
      date: '2025-04-20',
      category: 'Health',
      priority: 'Medium',
      starred: false
    }
  ]);

  // Get unique categories from tasks - fixed to avoid Set iteration TypeScript error
  const uniqueCategories = Array.from(new Set(tasks.map(task => task.category)));
  const categories = ['All', ...uniqueCategories];

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleTaskStar = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, starred: !task.starred } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Filter completed tasks
  const completedTasks = tasks.filter(task => task.completed);

  // Apply category filter
  const filteredByCategory = filterCategory === 'All' 
    ? completedTasks 
    : completedTasks.filter(task => task.category === filterCategory);

  // Apply time period filter
  const getFilteredTasks = () => {
    if (filterPeriod === 'All Time') {
      return filteredByCategory;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const taskDates = filteredByCategory.map(task => {
      const taskDate = new Date(task.date);
      return { ...task, dateObj: taskDate };
    });

    if (filterPeriod === 'Last 7 Days') {
      const lastWeek = new Date(today);
      lastWeek.setDate(lastWeek.getDate() - 7);
      return taskDates.filter(task => task.dateObj >= lastWeek);
    } else if (filterPeriod === 'Last 30 Days') {
      const lastMonth = new Date(today);
      lastMonth.setDate(lastMonth.getDate() - 30);
      return taskDates.filter(task => task.dateObj >= lastMonth);
    } else if (filterPeriod === 'This Week') {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      return taskDates.filter(task => task.dateObj >= startOfWeek);
    } else if (filterPeriod === 'This Month') {
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return taskDates.filter(task => task.dateObj >= startOfMonth);
    }
    
    return filteredByCategory;
  };

  const finalFilteredTasks = getFilteredTasks();

  // Group tasks by date
  const groupTasksByDate = () => {
    const grouped: Record<string, TaskItem[]> = {};
    finalFilteredTasks.forEach(task => {
      if (!grouped[task.date]) {
        grouped[task.date] = [];
      }
      grouped[task.date].push(task);
    });
    return grouped;
  };

  const groupedTasks = groupTasksByDate();
  const sortedDates = Object.keys(groupedTasks).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 ml-54 overflow-hidden">
          <div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
            <Header user={{ id: "", name: "", email: "" }} />
          </div>

          <main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
            <div className="max-w-7xl mx-auto pt-2">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <History className="w-6 h-6 mr-2" />
                  <h1 className="text-2xl font-bold">Completed Tasks</h1>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-gray-500" />
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                      <SelectTrigger className="w-32 bg-white focus:ring-0 focus:ring-gray-100 focus:outline-none">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-500" />
                    <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                      <SelectTrigger className="w-36 bg-white focus:ring-0 focus:ring-gray-100 focus:outline-none">
                        <SelectValue placeholder="Time Period" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="All Time">All Time</SelectItem>
                        <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
                        <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                        <SelectItem value="This Week">This Week</SelectItem>
                        <SelectItem value="This Month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {finalFilteredTasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <CheckCircle2 className="w-16 h-16 mb-4 text-gray-300" />
                  <h3 className="text-xl font-medium">No completed tasks found</h3>
                  <p className="mt-2">Complete some tasks to see them in your history</p>
                </div>
              ) : (
                <>
                  {sortedDates.map(date => (
                    <div key={date} className="mb-8">
                      <h2 className="text-lg font-semibold mb-4 text-gray-700">
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h2>
                      <TaskList 
                        tasks={groupedTasks[date]}
                        onToggleComplete={toggleTaskCompletion}
                        onToggleStar={toggleTaskStar}
                        onDeleteTask={deleteTask}
                        onCompleteTask={() => {}}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}