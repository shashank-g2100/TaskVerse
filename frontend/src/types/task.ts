
// types/task.ts
export type PriorityType = 'High' | 'Medium' | 'Low';
export type CategoryType = 'Personal' | 'Work' | 'Health' | 'Education' | 'Finance' | 'Other';

export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  time: string;
  date: string;
  category: CategoryType;
  priority: PriorityType;
  starred: boolean;
}