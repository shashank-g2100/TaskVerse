export default function TaskList() {
    return (
      <div className="bg-white p-6 rounded-xl shadow mt-4">
        <h3 className="text-lg font-semibold mb-2">Your Tasks</h3>
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Search tasks..."
            className="flex-1 border p-2 rounded"
          />
          <select className="border p-2 rounded">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <p className="text-gray-500">No tasks found. Add a new task to get started!</p>
      </div>
    );
  }
  