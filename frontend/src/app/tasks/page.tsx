// "use client"

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '@/types/task';
// import TaskTabs from '@/components/tasks/TaskTabs';
// import TaskList from '@/components/tasks/TaskList';
// import EmptyTaskState from '@/components/tasks/EmptyTaskState';

// export default function TasksPage() {
//   const [activeTab, setActiveTab] = useState<'Today' | 'Upcoming' | 'All Tasks'>('Today');
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Complete project proposal',
//       completed: false,
//       time: '2:00 PM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '2',
//       title: 'Schedule dentist appointment',
//       completed: false,
//       time: '4:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Grocery shopping',
//       completed: false,
//       time: '6:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Morning workout routine',
//       completed: true,
//       time: '7:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '5',
//       title: 'Team standup meeting',
//       completed: true,
//       time: '9:30 AM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '6',
//       title: 'Submit quarterly report',
//       completed: false,
//       time: '3:00 PM',
//       date: 'Tomorrow',
//       category: 'Work',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '7',
//       title: 'Review marketing strategy',
//       completed: false,
//       time: '11:00 AM',
//       date: 'Next Week',
//       category: 'Work',
//       priority: 'Medium',
//       starred: false
//     }
//   ]);

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

//   const addNewTask = () => {
//     const newTask: TaskItem = {
//       id: (tasks.length + 1).toString(),
//       title: 'New task',
//       completed: false,
//       time: '12:00 PM',
//       date: activeTab === 'Today' ? 'Today' : activeTab === 'Upcoming' ? 'Tomorrow' : 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     };
    
//     setTasks([...tasks, newTask]);
//   };

//   const toggleMenu = (taskId: string) => {
//     setActiveMenu(activeMenu === taskId ? null : taskId);
//   };

//   const handleClickOutside = () => {
//     setActiveMenu(null);
//   };

//   const markTaskComplete = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//     setActiveMenu(null);
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//     setActiveMenu(null);
//   };

//   // Filter tasks based on active tab
//   const filteredTasks = tasks.filter(task => {
//     if (activeTab === 'Today') {
//       return task.date === 'Today';
//     } else if (activeTab === 'Upcoming') {
//       return task.date === 'Tomorrow' || task.date === 'Next Week';
//     } 
//     // For "All Tasks" tab, return all tasks
//     return true;
//   });

//   return (
//     <div className="bg-white px-2 rounded-xl shadow">
//       <div className="max-w-5xl mx-auto px-4 py-6 pt-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">My Tasks</h1>
//           <Button 
//             onClick={addNewTask}
//             className="bg-black text-white hover:bg-gray-800"
//           >
//             <span className="mr-2">+</span> Add Task
//           </Button>
//         </div>

//         <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//         {activeMenu && (
//           <div 
//             className="fixed inset-0 h-full w-full z-10" 
//             onClick={handleClickOutside}
//           />
//         )}

//         <div className="space-y-4">
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => (
//               <TaskItem
//                 key={task.id}
//                 task={task}
//                 activeMenu={activeMenu}
//                 toggleMenu={toggleMenu}
//                 toggleTaskCompletion={toggleTaskCompletion}
//                 toggleTaskStar={toggleTaskStar}
//                 markTaskComplete={markTaskComplete}
//                 deleteTask={deleteTask}
//               />
//             ))
//           ) : (
//             <EmptyTaskState />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// // app/page.tsx
// "use client"

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '../types/task';
// import TaskTabs from '@/components/tasks/TaskTab';
// import TaskItem from '@/components/tasks/TaskList';
// import EmptyTaskState from '@/components/tasks/EmptyTaskList';

// export default function TasksPage() {
//   const [activeTab, setActiveTab] = useState<'Today' | 'Upcoming' | 'All Tasks'>('Today');
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Complete project proposal',
//       completed: false,
//       time: '2:00 PM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '2',
//       title: 'Schedule dentist appointment',
//       completed: false,
//       time: '4:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Grocery shopping',
//       completed: false,
//       time: '6:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Morning workout routine',
//       completed: true,
//       time: '7:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '5',
//       title: 'Team standup meeting',
//       completed: true,
//       time: '9:30 AM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '6',
//       title: 'Submit quarterly report',
//       completed: false,
//       time: '3:00 PM',
//       date: 'Tomorrow',
//       category: 'Work',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '7',
//       title: 'Review marketing strategy',
//       completed: false,
//       time: '11:00 AM',
//       date: 'Next Week',
//       category: 'Work',
//       priority: 'Medium',
//       starred: false
//     }
//   ]);

//   // Rest of the component remains the same
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

//   const addNewTask = () => {
//     const newTask: TaskItem = {
//       id: (tasks.length + 1).toString(),
//       title: 'New task',
//       completed: false,
//       time: '12:00 PM',
//       date: activeTab === 'Today' ? 'Today' : activeTab === 'Upcoming' ? 'Tomorrow' : 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     };
    
//     setTasks([...tasks, newTask]);
//   };

//   const toggleMenu = (taskId: string) => {
//     setActiveMenu(activeMenu === taskId ? null : taskId);
//   };

//   const handleClickOutside = () => {
//     setActiveMenu(null);
//   };

//   const markTaskComplete = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//     setActiveMenu(null);
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//     setActiveMenu(null);
//   };

//   // Filter tasks based on active tab
//   const filteredTasks = tasks.filter(task => {
//     if (activeTab === 'Today') {
//       return task.date === 'Today';
//     } else if (activeTab === 'Upcoming') {
//       return task.date === 'Tomorrow' || task.date === 'Next Week';
//     } 
//     // For "All Tasks" tab, return all tasks
//     return true;
//   });

//   return (
//     <div className="bg-white px-2 rounded-xl shadow">
//       <div className="max-w-5xl mx-auto px-4 py-6 pt-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">My Tasks</h1>
//           <Button 
//             onClick={addNewTask}
//             className="bg-black text-white hover:bg-gray-800"
//           >
//             <span className="mr-2">+</span> Add Task
//           </Button>
//         </div>

//         <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//         {activeMenu && (
//           <div 
//             className="fixed inset-0 h-full w-full z-10" 
//             onClick={handleClickOutside}
//           />
//         )}

//         <div className="space-y-4">
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => (
//               <TaskListItem
//                 key={task.id}
//                 task={task}
//                 activeMenu={activeMenu}
//                 toggleMenu={toggleMenu}
//                 toggleTaskCompletion={toggleTaskCompletion}
//                 toggleTaskStar={toggleTaskStar}
//                 markTaskComplete={markTaskComplete}
//                 deleteTask={deleteTask}
//               />
//             ))
//           ) : (
//             <EmptyTaskState />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//Perfect one
// // app/page.tsx
// "use client"

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '@/types/task';
// import { TaskTab } from '@/components/tasks/TaskTab';
// import { TaskList } from '@/components/tasks/TaskList';

// export default function TasksPage() {
//   type TabType = 'Today' | 'Upcoming' | 'All Tasks';
//   const [activeTab, setActiveTab] = useState<TabType>('Today');
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Complete project proposal',
//       completed: false,
//       time: '2:00 PM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '2',
//       title: 'Schedule dentist appointment',
//       completed: false,
//       time: '4:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Grocery shopping',
//       completed: false,
//       time: '6:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Morning workout routine',
//       completed: true,
//       time: '7:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '5',
//       title: 'Team standup meeting',
//       completed: true,
//       time: '9:30 AM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '6',
//       title: 'Submit quarterly report',
//       completed: false,
//       time: '3:00 PM',
//       date: 'Tomorrow',
//       category: 'Work',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '7',
//       title: 'Review marketing strategy',
//       completed: false,
//       time: '11:00 AM',
//       date: 'Next Week',
//       category: 'Work',
//       priority: 'Medium',
//       starred: false
//     }
//   ]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = () => {
//       if (activeMenu) {
//         setActiveMenu(null);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [activeMenu]);

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

//   const addNewTask = () => {
//     const newTask: TaskItem = {
//       id: (tasks.length + 1).toString(),
//       title: 'New task',
//       completed: false,
//       time: '12:00 PM',
//       date: activeTab === 'Today' ? 'Today' : activeTab === 'Upcoming' ? 'Tomorrow' : 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     };
    
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const markTaskComplete = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//   };

//   // Filter tasks based on active tab
//   const filteredTasks = tasks.filter(task => {
//     if (activeTab === 'Today') {
//       return task.date === 'Today';
//     } else if (activeTab === 'Upcoming') {
//       return task.date === 'Tomorrow' || task.date === 'Next Week';
//     } 
//     // For "All Tasks" tab, return all tasks
//     return true;
//   });

//   return (
//     <div className="bg-white px-2 rounded-xl shadow">
//       <div className="max-w-5xl mx-auto px-4 py-6 pt-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">My Tasks</h1>
//           <Button 
//             onClick={addNewTask}
//             className="bg-black text-white hover:bg-gray-800"
//           >
//             <span className="mr-2">+</span> Add Task
//           </Button>
//         </div>

//         <div className="mb-6">
//           <TaskTab activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>

//         {/* <TaskList 
//           tasks={filteredTasks}
//           onToggleComplete={toggleTaskCompletion}
//           onToggleStar={toggleTaskStar}
//           onDeleteTask={deleteTask}
//           onCompleteTask={markTaskComplete}
//         /> */}
//         <TaskList 
//           tasks={filteredTasks || []} // Add a fallback empty array
//           onToggleComplete={toggleTaskCompletion}
//           onToggleStar={toggleTaskStar}
//           onDeleteTask={deleteTask}
//           onCompleteTask={markTaskComplete}
//         />
//       </div>
//     </div>
//   );
// };

// "use client"

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { TaskItem } from '@/types/task';
// import { TaskTab } from '@/components/tasks/TaskTab';
// import { TaskList } from '@/components/tasks/TaskList';
// import { AddTaskForm } from '@/components/tasks/AddTaskForm';

// export default function TasksPage() {
//   type TabType = 'Today' | 'Upcoming' | 'All Tasks';
//   const [activeTab, setActiveTab] = useState<TabType>('Today');
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [showAddTaskForm, setShowAddTaskForm] = useState(false);
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Complete project proposal',
//       completed: false,
//       time: '2:00 PM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '2',
//       title: 'Schedule dentist appointment',
//       completed: false,
//       time: '4:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Grocery shopping',
//       completed: false,
//       time: '6:00 PM',
//       date: 'Today',
//       category: 'Personal',
//       priority: 'Low',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Morning workout routine',
//       completed: true,
//       time: '7:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '5',
//       title: 'Team standup meeting',
//       completed: true,
//       time: '9:30 AM',
//       date: 'Today',
//       category: 'Work',
//       priority: 'High',
//       starred: false
//     },
//     {
//       id: '6',
//       title: 'Submit quarterly report',
//       completed: false,
//       time: '3:00 PM',
//       date: 'Tomorrow',
//       category: 'Work',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '7',
//       title: 'Review marketing strategy',
//       completed: false,
//       time: '11:00 AM',
//       date: 'Next Week',
//       category: 'Work',
//       priority: 'Medium',
//       starred: false
//     }
//   ]);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = () => {
//       if (activeMenu) {
//         setActiveMenu(null);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [activeMenu]);

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

//   const addNewTask = () => {
//     setShowAddTaskForm(true);
//   };

//   const handleAddTask = (newTaskData: Omit<TaskItem, 'id'>) => {
//     const newTask: TaskItem = {
//       ...newTaskData,
//       id: (tasks.length + 1).toString(),
//     };
    
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (taskId: string) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const markTaskComplete = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//   };

//   // Filter tasks based on active tab
//   const filteredTasks = tasks.filter(task => {
//     if (activeTab === 'Today') {
//       return task.date === 'Today';
//     } else if (activeTab === 'Upcoming') {
//       return task.date === 'Tomorrow' || task.date === 'Next Week';
//     } 
//     // For "All Tasks" tab, return all tasks
//     return true;
//   });

//   return (
//     <div className="bg-white px-2 rounded-xl shadow">
//       <div className="max-w-5xl mx-auto px-4 py-6 pt-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">My Tasks</h1>
//           <Button 
//             onClick={addNewTask}
//             className="bg-black text-white hover:bg-gray-800"
//           >
//             <span className="mr-2">+</span> Add Task
//           </Button>
//         </div>

//         <div className="mb-6">
//           <TaskTab activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>

//         <TaskList 
//           tasks={filteredTasks || []}
//           onToggleComplete={toggleTaskCompletion}
//           onToggleStar={toggleTaskStar}
//           onDeleteTask={deleteTask}
//           onCompleteTask={markTaskComplete}
//         />
//       </div>

//       {showAddTaskForm && (
//         <AddTaskForm 
//           onClose={() => setShowAddTaskForm(false)}
//           onAddTask={handleAddTask}
//         />
//       )}
//     </div>
//   );
// }

"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskTab } from '@/components/tasks/TaskTab';
import { TaskList } from '@/components/tasks/TaskList';
import { AddTaskForm } from '@/components/tasks/AddTaskForm';

export default function TasksPage() {
  type TabType = 'Today' | 'Upcoming' | 'All Tasks';
  const [activeTab, setActiveTab] = useState<TabType>('Today');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: '1',
      title: 'Complete project proposal',
      completed: false,
      time: '2:00 PM',
      date: 'Today',
      category: 'Work',
      priority: 'High',
      starred: false
    },
    {
      id: '2',
      title: 'Schedule dentist appointment',
      completed: false,
      time: '4:00 PM',
      date: 'Today',
      category: 'Personal',
      priority: 'Medium',
      starred: false
    },
    {
      id: '3',
      title: 'Grocery shopping',
      completed: false,
      time: '6:00 PM',
      date: 'Today',
      category: 'Personal',
      priority: 'Low',
      starred: false
    },
    {
      id: '4',
      title: 'Morning workout routine',
      completed: true,
      time: '7:00 AM',
      date: 'Today',
      category: 'Health',
      priority: 'Medium',
      starred: false
    },
    {
      id: '5',
      title: 'Team standup meeting',
      completed: true,
      time: '9:30 AM',
      date: 'Today',
      category: 'Work',
      priority: 'High',
      starred: false
    },
    {
      id: '6',
      title: 'Submit quarterly report',
      completed: false,
      time: '3:00 PM',
      date: 'Tomorrow',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '7',
      title: 'Review marketing strategy',
      completed: false,
      time: '11:00 AM',
      date: 'Next Week',
      category: 'Work',
      priority: 'Medium',
      starred: false
    }
  ]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeMenu]);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (showAddTaskForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAddTaskForm]);

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

  const addNewTask = () => {
    setShowAddTaskForm(true);
  };

  const handleAddTask = (newTaskData: Omit<TaskItem, 'id'>) => {
    const newTask: TaskItem = {
      ...newTaskData,
      id: (tasks.length + 1).toString(),
    };
    
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  // Filter tasks based on active tab
  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'Today') {
      return task.date === 'Today';
    } else if (activeTab === 'Upcoming') {
      return task.date === 'Tomorrow' || task.date === 'Next Week';
    } 
    // For "All Tasks" tab, return all tasks
    return true;
  });

  return (
    <>
      <div className="bg-white px-2 rounded-xl shadow">
        <div className="max-w-5xl mx-auto px-4 py-6 pt-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <Button 
              onClick={addNewTask}
              className="bg-black text-white hover:bg-gray-800"
            >
              <span className="mr-2">+</span> Add Task
            </Button>
          </div>

          <div className="mb-6">
            <TaskTab activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <TaskList 
            tasks={filteredTasks || []}
            onToggleComplete={toggleTaskCompletion}
            onToggleStar={toggleTaskStar}
            onDeleteTask={deleteTask}
            onCompleteTask={markTaskComplete}
          />
        </div>
      </div>

      {showAddTaskForm && (
        <AddTaskForm 
          onClose={() => setShowAddTaskForm(false)}
          onAddTask={handleAddTask}
        />
      )}
    </>
  );
}