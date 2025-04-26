"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// Assuming you'll have a ProjectItem type that looks something like this
interface ProjectItem {
  id: string;
  name: string;
  description?: string;
  color: string;
  category: string;
  dueDate?: string;
  isArchived: boolean;
}

interface AddProjectFormProps {
  onClose: () => void;
  onAddProject: (project: Omit<ProjectItem, 'id' | 'isArchived'>) => void;
  defaultCategory: string;
}

export const AddProjectForm = ({ onClose, onAddProject }: AddProjectFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#3B82F6'); // Default blue color
  const [category, setCategory] = useState('Personal');
  const [dueDate, setDueDate] = useState('');

  const colorOptions = [
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Yellow', value: '#F59E0B' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Gray', value: '#6B7280' },
    { name: 'Cyan', value: '#06B6D4' }
  ];

  const categoryOptions = ['Personal', 'Work', 'Health', 'Education', 'Finance', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProject: Omit<ProjectItem, 'id' | 'isArchived'> = {
      name: name || 'New Project',
      description,
      color,
      category,
      dueDate: dueDate || undefined
    };
    
    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="flex items-center gap-x-2 mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={onClose}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button> 
            <h2 className="text-2xl font-bold">Add New Project</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Project Name</label>
            <input
              type="text"
              placeholder="Enter project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none h-20"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Project Color</label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((colorOption) => (
                <div
                  key={colorOption.value}
                  onClick={() => setColor(colorOption.value)}
                  className={`h-10 rounded-md cursor-pointer flex items-center justify-center ${
                    color === colorOption.value ? 'ring-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: colorOption.value }}
                >
                  {color === colorOption.value && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Due Date (Optional)</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none"
            />
          </div>
          
          <div className="flex justify-between mt-6">
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
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};