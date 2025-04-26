// "use client"

// import { useState, useEffect } from 'react';
// import { Sidebar } from '@/components/dashboard/sidebar';
// import { Header } from '@/components/dashboard/header';


// export default function HealthPage () {
//   return(
//     <div className="flex h-screen bg-gray-100">
//       <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col flex-1 ml-54 overflow-hidden ">
//         <div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
//           <Header user={{ id: "", name: "", email: "" }} />
//         </div>

//         <main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
//           <div className="max-w-7xl mx-auto pt-2">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-bold">Health Project</h1>             
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
// import { AddTaskForm } from '@/components/tasks/AddTaskForm';
// import { Sidebar } from '@/components/dashboard/sidebar';
// import { Header } from '@/components/dashboard/header';
// import { Plus, Edit, MoreVertical } from 'lucide-react';
// import { 
//   DropdownMenu, 
//   DropdownMenuTrigger, 
//   DropdownMenuContent, 
//   DropdownMenuItem 
// } from "@/components/ui/dropdown-menu";

// export default function HealthProjectPage() {
//   const [showAddTaskForm, setShowAddTaskForm] = useState(false);
//   const [projectName, setProjectName] = useState("Health");
//   const [editingName, setEditingName] = useState(false);
  
//   const [tasks, setTasks] = useState<TaskItem[]>([
//     {
//       id: '1',
//       title: 'Morning jog - 30 minutes',
//       completed: false,
//       time: '6:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '2',
//       title: 'Take vitamins',
//       completed: true,
//       time: '8:00 AM',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '3',
//       title: 'Drink 2L of water',
//       completed: false,
//       time: 'All day',
//       date: 'Today',
//       category: 'Health',
//       priority: 'Medium',
//       starred: false
//     },
//     {
//       id: '4',
//       title: 'Yoga class',
//       completed: false,
//       time: '5:30 PM',
//       date: 'Tomorrow',
//       category: 'Health',
//       priority: 'High',
//       starred: true
//     },
//     {
//       id: '5',
//       title: 'Doctor appointment',
//       completed: false,
//       time: '10:00 AM',
//       date: 'Next Week',
//       category: 'Health',
//       priority: 'High',
//       starred: false
//     }
//   ]);

//   // Prevent scrolling on the body when modal is open
//   useEffect(() => {
//     if (showAddTaskForm) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
    
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [showAddTaskForm]);

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
//       category: 'Health', // Automatically set category to Health
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
  
//   const handleNameEdit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setEditingName(false);
//   };

//   // Filter tasks by Health category
//   const healthTasks = tasks.filter(task => task.category === 'Health');
  
//   // Group tasks by completion status and date
//   const pendingTasks = healthTasks.filter(task => !task.completed);
//   const completedTasks = healthTasks.filter(task => task.completed);
  
//   // Group pending tasks by date
//   const todayTasks = pendingTasks.filter(task => task.date === 'Today');
//   const tomorrowTasks = pendingTasks.filter(task => task.date === 'Tomorrow');
//   const futureTasks = pendingTasks.filter(task => task.date !== 'Today' && task.date !== 'Tomorrow');

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
//                   <div className="h-6 w-6 rounded-full bg-purple-500 mr-3"></div> 
//                   <div className="flex items-center">
//                     <div className="flex items-center">
//                       <h1 className="text-2xl font-bold">Health Projects</h1>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-2">
//                   <Button 
//                     onClick={addNewTask}
//                     className="bg-purple-500 text-white hover:bg-purple-600"
//                   >
//                     <Plus size={36} /> Add Project
//                   </Button>
                  
                  
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 {/* Today's Tasks Section */}
//                 {todayTasks.length > 0 && (
//                   <div>
//                     <h2 className="text-lg font-semibold mb-3 text-gray-700">Today</h2>
//                     <TaskList 
//                       tasks={todayTasks}
//                       onToggleComplete={toggleTaskCompletion}
//                       onToggleStar={toggleTaskStar}
//                       onDeleteTask={deleteTask}
//                       onCompleteTask={markTaskComplete}
//                     />
//                   </div>
//                 )}

//                 {/* Tomorrow's Tasks Section */}
//                 {tomorrowTasks.length > 0 && (
//                   <div>
//                     <h2 className="text-lg font-semibold mb-3 text-gray-700">Tomorrow</h2>
//                     <TaskList 
//                       tasks={tomorrowTasks}
//                       onToggleComplete={toggleTaskCompletion}
//                       onToggleStar={toggleTaskStar}
//                       onDeleteTask={deleteTask}
//                       onCompleteTask={markTaskComplete}
//                     />
//                   </div>
//                 )}

//                 {/* Future Tasks Section */}
//                 {futureTasks.length > 0 && (
//                   <div>
//                     <h2 className="text-lg font-semibold mb-3 text-gray-700">Upcoming</h2>
//                     <TaskList 
//                       tasks={futureTasks}
//                       onToggleComplete={toggleTaskCompletion}
//                       onToggleStar={toggleTaskStar}
//                       onDeleteTask={deleteTask}
//                       onCompleteTask={markTaskComplete}
//                     />
//                   </div>
//                 )}

//                 {/* Completed Tasks Section */}
//                 {completedTasks.length > 0 && (
//                   <div>
//                     <h2 className="text-lg font-semibold mb-3 text-gray-700">Completed</h2>
//                     <TaskList 
//                       tasks={completedTasks}
//                       onToggleComplete={toggleTaskCompletion}
//                       onToggleStar={toggleTaskStar}
//                       onDeleteTask={deleteTask}
//                       onCompleteTask={markTaskComplete}
//                     />
//                   </div>
//                 )}

//                 {/* Empty state */}
//                 {healthTasks.length === 0 && (
//                   <div className="text-center py-12">
//                     <div className="mx-auto h-12 w-12 text-purple-500 mb-4">
//                       <div className="h-full w-full rounded-full bg-purple-100 flex items-center justify-center">
//                         <div className="h-6 w-6 rounded-full bg-purple-500"></div>
//                       </div>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900">No projects in Health project</h3>
//                     <p className="mt-2 text-sm text-gray-500">
//                       Add your first project to get started with this health project.
//                     </p>
//                     <div className="mt-6">
//                       <Button
//                         onClick={addNewTask}
//                         className="bg-purple-500 text-white hover:bg-purple-600"
//                       >
//                         Add your first project
//                       </Button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       {showAddTaskForm && (
//         <AddTaskForm 
//           onClose={() => setShowAddTaskForm(false)}
//           onAddTask={handleAddTask}
//           defaultCategory="Health"
//         />
//       )}
//     </>
//   );
// }


"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskList } from '@/components/tasks/TaskList';
import { AddTaskForm } from '@/components/tasks/AddTaskForm';
import { AddProjectForm } from '@/components/tasks/AddProjectForm'; // Import the new AddProjectForm
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { Plus, Edit, MoreVertical } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";

// Add a ProjectItem interface (if not already defined elsewhere)
interface ProjectItem {
  id: string;
  name: string;
  description?: string;
  color: string;
  category: string;
  dueDate?: string;
  isArchived: boolean;
}

export default function HealthProjectPage() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false); // New state for project form
  const [projectName, setProjectName] = useState("Health");
  const [editingName, setEditingName] = useState(false);
  
  // Add a state for projects
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: '1',
      title: 'Morning jog - 30 minutes',
      completed: false,
      time: '6:00 AM',
      date: 'Today',
      category: 'Health',
      priority: 'High',
      starred: true
    },
    {
      id: '2',
      title: 'Take vitamins',
      completed: true,
      time: '8:00 AM',
      date: 'Today',
      category: 'Health',
      priority: 'Medium',
      starred: false
    },
    {
      id: '3',
      title: 'Drink 2L of water',
      completed: false,
      time: 'All day',
      date: 'Today',
      category: 'Health',
      priority: 'Medium',
      starred: false
    },
    {
      id: '4',
      title: 'Yoga class',
      completed: false,
      time: '5:30 PM',
      date: 'Tomorrow',
      category: 'Health',
      priority: 'High',
      starred: true
    },
    {
      id: '5',
      title: 'Doctor appointment',
      completed: false,
      time: '10:00 AM',
      date: 'Next Week',
      category: 'Health',
      priority: 'High',
      starred: false
    }
  ]);

  // Prevent scrolling on the body when any modal is open
  useEffect(() => {
    if (showAddTaskForm || showAddProjectForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAddTaskForm, showAddProjectForm]);

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

  // Changed this to open project form instead of task form
  const addNewProject = () => {
    setShowAddProjectForm(true);
  };

  const addNewTask = () => {
    setShowAddTaskForm(true);
  };

  const handleAddTask = (newTaskData: Omit<TaskItem, 'id'>) => {
    const newTask: TaskItem = {
      ...newTaskData,
      id: (tasks.length + 1).toString(),
      category: 'Health', // Automatically set category to Health
    };
    
    setTasks([...tasks, newTask]);
  };

  // New function to handle adding a project
  const handleAddProject = (newProjectData: Omit<ProjectItem, 'id' | 'isArchived'>) => {
    const newProject: ProjectItem = {
      ...newProjectData,
      id: (projects.length + 1).toString(),
      isArchived: false
    };
    
    setProjects([...projects, newProject]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const markTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };
  
  const handleNameEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditingName(false);
  };

  // Filter tasks by Health category
  const healthTasks = tasks.filter(task => task.category === 'Health');
  
  // Group tasks by completion status and date
  const pendingTasks = healthTasks.filter(task => !task.completed);
  const completedTasks = healthTasks.filter(task => task.completed);
  
  // Group pending tasks by date
  const todayTasks = pendingTasks.filter(task => task.date === 'Today');
  const tomorrowTasks = pendingTasks.filter(task => task.date === 'Tomorrow');
  const futureTasks = pendingTasks.filter(task => task.date !== 'Today' && task.date !== 'Tomorrow');

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
                  <div className="h-6 w-6 rounded-full bg-purple-500 mr-3"></div> 
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <h1 className="text-2xl font-bold">Health Projects</h1>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    onClick={addNewProject} // Changed to call the addNewProject function
                    className="bg-purple-500 text-white hover:bg-purple-600"
                  >
                    <Plus size={36} /> Add Project
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Today's Tasks Section */}
                {todayTasks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Today</h2>
                    <TaskList 
                      tasks={todayTasks}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Tomorrow's Tasks Section */}
                {tomorrowTasks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Tomorrow</h2>
                    <TaskList 
                      tasks={tomorrowTasks}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Future Tasks Section */}
                {futureTasks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Upcoming</h2>
                    <TaskList 
                      tasks={futureTasks}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Completed Tasks Section */}
                {completedTasks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Completed</h2>
                    <TaskList 
                      tasks={completedTasks}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Empty state */}
                {healthTasks.length === 0 && (
                  <div className="text-center py-12">
                    <div className="mx-auto h-12 w-12 text-purple-500 mb-4">
                      <div className="h-full w-full rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No projects in Health project</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Add your first project to get started with this health project.
                    </p>
                    <div className="mt-6">
                      <Button
                        onClick={addNewProject} // Changed to call the addNewProject function
                        className="bg-purple-500 text-white hover:bg-purple-600"
                      >
                        Add your first project
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Show AddTaskForm only when showAddTaskForm is true */}
      {showAddTaskForm && (
        <AddTaskForm 
          onClose={() => setShowAddTaskForm(false)}
          onAddTask={handleAddTask}
        />
      )}

      {/* Added AddProjectForm that shows when showAddProjectForm is true */}
      {showAddProjectForm && (
        <AddProjectForm 
          onClose={() => setShowAddProjectForm(false)}
          onAddProject={handleAddProject} 
          defaultCategory="Health"
        />
      )}
    </>
  );
}