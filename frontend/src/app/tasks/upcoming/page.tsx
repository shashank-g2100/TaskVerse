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
//               <h1 className="text-2xl font-bold">Upcoming Tasks</h1>             
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskList } from '@/components/tasks/TaskList';
import { AddTaskForm } from '@/components/tasks/AddTaskForm';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { Star, Calendar, Plus } from 'lucide-react';

export default function UpcomingPage() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: '1',
      title: 'Quarterly team review meeting',
      completed: false,
      time: '10:00 AM',
      date: 'Tomorrow',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '2',
      title: 'Submit expense reports',
      completed: false,
      time: '2:00 PM',
      date: 'Tomorrow',
      category: 'Work',
      priority: 'Medium',
      starred: false
    },
    {
      id: '3',
      title: 'Call with client',
      completed: false,
      time: '11:30 AM',
      date: 'Next Week',
      category: 'Work',
      priority: 'High',
      starred: false
    },
    {
      id: '4',
      title: 'Prepare presentation slides',
      completed: false,
      time: '3:00 PM',
      date: 'Next Week',
      category: 'Work',
      priority: 'Medium',
      starred: true
    },
    {
      id: '5',
      title: 'Schedule annual health checkup',
      completed: false,
      time: '9:00 AM',
      date: 'Next Month',
      category: 'Health',
      priority: 'Medium',
      starred: false
    }
  ]);

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

  // Filter only upcoming tasks (not Today's tasks)
  const upcomingTasks = tasks.filter(task => task.date !== 'Today');

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
									<Calendar className="w-6 h-6 mr-2" />
                	<h1 className="text-2xl font-bold">Upcoming Tasks</h1>
								</div>
                <Button 
                  onClick={addNewTask}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Plus size={36} /> Add Task
                </Button>
              </div>

              <div className="space-y-6">
                {/* Tomorrow's Tasks Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-gray-700">Tomorrow</h2>
                  <TaskList 
                    tasks={tasks.filter(task => task.date === 'Tomorrow')}
                    onToggleComplete={toggleTaskCompletion}
                    onToggleStar={toggleTaskStar}
                    onDeleteTask={deleteTask}
                    onCompleteTask={markTaskComplete}
                  />
                </div>

                {/* Next Week Tasks Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-gray-700">Next Week</h2>
                  <TaskList 
                    tasks={tasks.filter(task => task.date === 'Next Week')}
                    onToggleComplete={toggleTaskCompletion}
                    onToggleStar={toggleTaskStar}
                    onDeleteTask={deleteTask}
                    onCompleteTask={markTaskComplete}
                  />
                </div>

                {/* Next Month Tasks Section */}
                <div>
                  <h2 className="text-lg font-semibold mb-3 text-gray-700">Next Month</h2>
                  <TaskList 
                    tasks={tasks.filter(task => task.date === 'Next Month')}
                    onToggleComplete={toggleTaskCompletion}
                    onToggleStar={toggleTaskStar}
                    onDeleteTask={deleteTask}
                    onCompleteTask={markTaskComplete}
                  />
                </div>
              </div>
            </div>
          </main>
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