'use client'

import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { useState } from "react";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import AddTaskForm from "@/components/dashboard/AddTaskForm";
import TaskList from "@/components/dashboard/TaskList";
import Overview from "@/components/dashboard/overview";
import Link from "next/link";
import { Calendar, CheckCircle2, ChevronDown, Home, LogOut, Plus, Settings, Star, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function DashboardPage() {
  const [todos, setTodos] = useState<{ id: number; title: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState("");
	const [sidebarOpen, setSidebarOpen] = useState(false);


  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleComplete = (id: number, completed: boolean) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

	function handleAddTask(): void {
		addTodo();
	}

  return (
    <div className="flex h-screen overflow-hidden bg-background">
			{ /* Sidebar */}
			<div className="fixed top-0 left-0 h-screen w-64 z-30 border-r border-gray-200 bg-white">
        <Sidebar />
      </div>

			<div className="flex flex-col flex-1 ml-64 overflow-hidden ">

			{ /* Header */}
				<div className="fixed top-0 left-64 right-0 h-16 z-20 border-b border-gray-200 bg-white">
          <Header user={{ id: "", name: "", email: "" }} />
        </div>

			
				<main className="pt-20 px-10 pb-10 overflow-y-auto h-full">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 space-y-6">
							<WelcomeBanner user={{
								name: ""
							}} />

							<Overview />

							<AddTaskForm />
							<TaskList />
						</div>
						<WeatherWidget />
					</div>
					<h1 className="text-3xl text-white-900 font-bold mb-4">Advanced To-Do App</h1>
					<div className="flex gap-2 mb-4">
						<input
							type="text"
							placeholder="Add new task"
							className="border p-2 flex-1 rounded"
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
						/>
						<button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
							Add
						</button>
					</div>
					<ul className="space-y-2">
						{todos.map((todo) => (
							<li key={todo.id} className="flex justify-between items-center border p-2 rounded">
								<span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
								<div className="flex gap-2">
									<button onClick={() => toggleComplete(todo.id, todo.completed)} className="text-green-600">
										✔️
									</button>
									<button onClick={() => deleteTodo(todo.id)} className="text-red-500">
										❌
									</button>
								</div>
							</li>
						))}
					</ul>
				{/* </div> */}
				</main>
			</div>
    </div>
  );
}