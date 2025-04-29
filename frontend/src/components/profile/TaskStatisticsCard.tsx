interface TaskStatisticsProps {
    stats: {
      completionRate: number;
      totalTasks: number;
      completedTasks: number;
      importantTasks: number;
      todayTasks: number;
    };
  }
  
  export default function TaskStatisticsCard({ stats }: TaskStatisticsProps) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Task Statistics</h3>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-700">Completion Rate</span>
            <span className="text-sm font-semibold">{stats.completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${stats.completionRate}%` }}
            ></div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-md text-center border border-gray-300">
            <div className="text-2xl font-bold">{stats.totalTasks}</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center border border-gray-300">
            <div className="text-2xl font-bold">{stats.completedTasks}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md text-center border border-gray-300">
            <div className="text-2xl font-bold">{stats.importantTasks}</div>
            <div className="text-sm text-gray-600">Important</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center border border-gray-300">
            <div className="text-2xl font-bold">{stats.todayTasks}</div>
            <div className="text-sm text-gray-600">Today</div>
          </div>
        </div>
      </div>
    );
  }