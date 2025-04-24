'use client';

import { useState } from 'react';

export default function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [outdoor, setOutdoor] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Task: ${title}, Priority: ${priority}, Outdoor: ${outdoor}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Add New Task</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-800 font-semibold mb-1">Task Title</label>
          <input
            className="w-full p-2 border-black text-gray-900 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your task..."
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-slate-800 font-semibold mb-1">Priority</label>
            <select
              className="w-full p-2 border-black text-gray-900 border rounded"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <label className="flex items-center mt-6">
            <input
              type="checkbox"
              checked={outdoor}
              onChange={() => setOutdoor(!outdoor)}
              className="mr-2"
            />
            Outdoor activity
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded flex items-center justify-center gap-2"
        >
          <span>➕</span> Add Task
        </button>
      </form>
    </div>
  );
}
