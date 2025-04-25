'use client';

import { useEffect, useState } from 'react';

interface DashboardData {
  tasksDueToday: number;
  tasksCompletedToday: number;
  tasksRemainingToday: number;
  upcomingTasks: number;
  allTasks: number;
}

export default function TaskOverview() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch('http://localhost:8000/api/dashboard'); // <-- Update this when backend is ready
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        // Dummy data fallback
        setData({
          tasksDueToday: 5,
          tasksCompletedToday: 2,
          tasksRemainingToday: 3,
          upcomingTasks: 0,
          allTasks: 5,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  if (loading || !data) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  return (
    <section className="space-y-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{/* <div>
					<h1 className="text-2xl font-bold">Welcome back, John!</h1>
					<p className="text-gray-600">Here's an overview of your tasks for today.</p>
      	</div> */}

        {/* <div className="rounded-xl bg-green-50 p-4 shadow-sm">
          <h3 className="font-semibold text-lg text-black">Tasks Due Today</h3>
          <p className="text-gray-600 text-sm mt-1">
            {data.tasksCompletedToday} completed, {data.tasksRemainingToday} remaining
          </p>
          <div className="text-right text-2xl font-bold text-black mt-2">
            {data.tasksDueToday}
          </div>
        </div> */}

				{/* <div className="rounded-xl bg-blue-50 p-4 shadow-sm">
          <h3 className="font-semibold text-lg text-black">Upcoming Tasks</h3>
          <p className="text-gray-600 text-sm mt-1">Due in the next 7 days</p>
          <div className="text-right text-2xl font-bold text-black mt-2">{data.upcomingTasks}</div>
        </div> */}

				{/* <div className="rounded-xl bg-yellow-50 p-4 shadow-sm">
          <h3 className="font-semibold text-lg text-black">All Tasks</h3>
          <p className="text-gray-600 text-sm mt-1">Across all projects</p>
          <div className="text-right text-2xl font-bold text-black mt-2">{data.allTasks}</div>
        </div> */}

				<div className="rounded-xl bg-green-50 p-4 shadow-lg relative">
					<div className="absolute top-4 right-4 text-2xl font-bold text-black">
						{data.tasksDueToday}
					</div>
					<h3 className="font-semibold text-lg text-black">Tasks Due Today</h3>
					<p className="text-gray-600 text-sm mt-1">
						{data.tasksCompletedToday} completed, {data.tasksRemainingToday} remaining
					</p>
				</div>

        <div className="rounded-xl bg-blue-50 p-4 shadow-lg relative">
					<div className="absolute top-4 right-4 text-2xl font-bold text-black">
							{data.upcomingTasks}
					</div>
						<h3 className="font-semibold text-lg text-black">Upcoming Tasks</h3>
						<p className="text-gray-600 text-sm mt-1">Due in the next 7 days</p>
				</div>

				<div className="rounded-xl bg-yellow-50 p-4 shadow-lg relative">
					<div className="absolute top-4 right-4 text-2xl font-bold text-black">
						{data.allTasks}
					</div>
					<h3 className="font-semibold text-lg text-black">All Tasks</h3>
					<p className="text-gray-600 text-sm mt-1">Across all projects</p>
				</div>
      </div>
    </section>
  );
}
