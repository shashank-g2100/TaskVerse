"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TaskItem } from '@/types/task';
import { TaskTab } from '@/components/tasks/TaskTab';
import { TaskList } from '@/components/tasks/TaskList';
import { AddTaskForm } from '@/components/tasks/AddTaskForm';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { CheckCircle2, Plus } from 'lucide-react';

export default function TodayPage() {
  const [activeTab, setActiveTab] = useState<'Today' | 'Upcoming' | 'All Tasks'>('Today');
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

  // Only show today's tasks on this page
  const todayTasks = tasks.filter(task => task.date === 'Today');

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="fixed top-0 left-0 h-screen max-w-full z-30 border-r border-gray-200 bg-white">
						<Sidebar />
				</div>
				<div className="flex flex-col flex-1 ml-54 overflow-hidden ">
					<div className="fixed top-0 left-54 right-0 h-16 z-20 border-b border-gray-200 bg-white">
						<Header user={{ id: "", name: "", email: "" }} />
					</div>

					<main className="pt-20 px-5 pb-5 overflow-y-auto h-full">
						<div className="max-w-7xl mx-auto pt-2">
							<div className="flex justify-between items-center mb-6">
								<div className="flex items-center">
									<CheckCircle2 className="w-6 h-6 mr-2" />
                	<h1 className="text-2xl font-bold">Today's Tasks</h1>
								</div>
								<Button 
									onClick={addNewTask}
									className="bg-black text-white hover:bg-gray-800"
								>
									<Plus size={36} /> Add Task
								</Button>
							</div>

							{/* <div className="mb-6">
								<TaskTab activeTab={activeTab} setActiveTab={setActiveTab} />
							</div> */}

							<TaskList 
								tasks={todayTasks}
								onToggleComplete={toggleTaskCompletion}
								onToggleStar={toggleTaskStar}
								onDeleteTask={deleteTask}
								onCompleteTask={markTaskComplete}
							/>
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