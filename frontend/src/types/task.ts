
// types/task.ts
export type PriorityType = 'High' | 'Medium' | 'Low';
export type CategoryType = 'Work' | 'Personal' | 'Health';

export interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
  time: string;
  date: string;
  category: CategoryType;
  priority: PriorityType;
  starred: boolean;
}