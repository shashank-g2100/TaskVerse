// "use client"

// import { useState, useEffect } from 'react';
// import { Sidebar } from '@/components/dashboard/sidebar';
// import { Header } from '@/components/dashboard/header';


// export default function ImportantPage () {
//     return(
//         <div className="flex h-screen bg-gray-100">
//         <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
// 						<Sidebar />
// 				</div>
// 				<div className="flex flex-col flex-1 ml-54 overflow-hidden ">
// 					<div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
// 						<Header user={{ id: "", name: "", email: "" }} />
// 					</div>

// 					<main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
// 						<div className="max-w-7xl mx-auto pt-2">
// 							<div className="flex justify-between items-center mb-6">
// 								<h1 className="text-2xl font-bold">Important Tasks</h1>
								
// 							</div>

							
// 						</div>
// 					</main>
// 				</div>
//       </div>
//     )
// }

"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskList } from '@/components/tasks/TaskList';
import { AddTaskForm } from '@/components/tasks/AddTaskForm';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { Star } from 'lucide-react';

export default function ImportantPage() {
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
      starred: true
    },
    {
      id: '2',
      title: 'Client presentation preparation',
      completed: false,
      time: '11:00 AM',
      date: 'Tomorrow',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '3',
      title: 'Quarterly team review meeting',
      completed: false,
      time: '10:00 AM',
      date: 'Tomorrow',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '4',
      title: 'Prepare presentation slides',
      completed: false,
      time: '3:00 PM',
      date: 'Next Week',
      category: 'Work',
      priority: 'High',
      starred: true
    },
    {
      id: '5',
      title: 'Annual strategy planning',
      completed: false,
      time: '9:00 AM',
      date: 'Next Month',
      category: 'Work',
      priority: 'High',
      starred: true
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
      starred: newTaskData.priority === 'High' // Auto-star high priority tasks
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

  // Filter only important/starred tasks
  const importantTasks = tasks.filter(task => task.starred);

  // Group tasks by date
  const todayTasks = importantTasks.filter(task => task.date === 'Today');
  const tomorrowTasks = importantTasks.filter(task => task.date === 'Tomorrow');
  const futureTasksNextWeek = importantTasks.filter(task => task.date === 'Next Week');
  const futureTasksNextMonth = importantTasks.filter(task => task.date === 'Next Month');

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
                  <Star className="text-yellow-400 w-6 h-6 mr-2" fill="currentColor" />
                  <h1 className="text-2xl font-bold">Important Tasks</h1>
                </div>
                <Button 
                  onClick={addNewTask}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <span className="mr-2">+</span> Add Task
                </Button>
              </div>

              <div className="space-y-6">
                {/* Today's Important Tasks Section */}
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

                {/* Tomorrow's Important Tasks Section */}
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

                {/* Next Week Important Tasks Section */}
                {futureTasksNextWeek.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Next Week</h2>
                    <TaskList 
                      tasks={futureTasksNextWeek}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Next Month Important Tasks Section */}
                {futureTasksNextMonth.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">Next Month</h2>
                    <TaskList 
                      tasks={futureTasksNextMonth}
                      onToggleComplete={toggleTaskCompletion}
                      onToggleStar={toggleTaskStar}
                      onDeleteTask={deleteTask}
                      onCompleteTask={markTaskComplete}
                    />
                  </div>
                )}

                {/* Empty state if no important tasks */}
                {importantTasks.length === 0 && (
                  <div className="text-center py-12">
                    <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">No important tasks</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Star tasks from any view to mark them as important and see them here.
                    </p>
                    <div className="mt-6">
                      <Button
                        onClick={addNewTask}
                        className="bg-black text-white hover:bg-gray-800"
                      >
                        Add an important task
                      </Button>
                    </div>
                  </div>
                )}
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