"use client"

import { useState } from 'react';
import { Star, MoreHorizontal, Clock } from 'lucide-react';
import { TaskItem, CategoryType, PriorityType } from '@/types/task';
import { TaskMenu } from './TaskMenu';

interface TaskCardProps {
  task: TaskItem;
  onToggleComplete: (taskId: string) => void;
  onToggleStar: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function TaskCard({ 
  task, 
  onToggleComplete, 
  onToggleStar, 
  onDeleteTask,
  onCompleteTask
}: TaskCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getPriorityColor = (priority: PriorityType) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: CategoryType) => {
    switch (category) {
      case 'Work': return 'bg-teal-100 text-teal-800';
      case 'Personal': return 'bg-blue-100 text-blue-800';
      case 'Health': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuEdit = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3 flex-wrap">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="w-5 h-5 rounded border-gray-300"
        />
        <span className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </span>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Clock size={16} className="text-gray-500" />
          <span>{task.date}, {task.time}</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(task.category)}`}>
          {task.category}
        </div>

        <div className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </div>

        <button 
          onClick={() => onToggleStar(task.id)}
          className="text-gray-400 hover:text-yellow-500"
        >
          <Star size={18} fill={task.starred ? "gold" : "none"} />
        </button>

        <div className="relative">
          <button 
            className="text-gray-400 hover:text-gray-500"
            onClick={toggleMenu}
          >
            <MoreHorizontal size={18} />
          </button>

          <TaskMenu
            isOpen={isMenuOpen}
            taskId={task.id}
            onEdit={handleMenuEdit}
            onComplete={onCompleteTask}
            onDelete={onDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}
