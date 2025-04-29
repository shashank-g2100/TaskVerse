// import { ProfileData } from "../types/types";

// export const profileData: ProfileData = {
//   name: "John Doe",
//   location: "San Francisco, CA",
//   bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
//   email: "john.doe@example.com",
//   website: "johndoe.com",
//   twitter: "@johndoe",
//   stats: {
//     completionRate: 40,
//     totalTasks: 5,
//     completedTasks: 2,
//     importantTasks: 2,
//     todayTasks: 5
//   },
//   projects: {
//     personal: { percentage: 42 },
//     work: { percentage: 35 },
//     health: { percentage: 23 }
//   },
//   priorities: {
//     high: { percentage: 30 },
//     medium: { percentage: 45 },
//     low: { percentage: 25 }
//   },
//   achievements: {
//     taskMaster: { name: "Task Master", description: "Complete 100 tasks", progress: 65 },
//     earlyBird: { name: "Early Bird", description: "Complete 50 tasks before noon", progress: 80 },
//     projectPro: { name: "Project Pro", description: "Create 10 projects", progress: 30 },
//     consistencyKing: { name: "Consistency King", description: "Use the app for 30 days straight", progress: 90 }
//   },
//   recentActivity: [
//     { action: "Completed 3 tasks", time: "Today", timeAgo: "2 hours ago" },
//     { action: "Added a new project", time: "Today", timeAgo: "5 hours ago" },
//     { action: "Completed 5 tasks", time: "Yesterday", timeAgo: "1 day ago" },
//     { action: "Achieved 80% completion rate", time: "Last Week", timeAgo: "5 days ago" },
//     { action: "Created 10 new tasks", time: "Last Week", timeAgo: "6 days ago" }
//   ],
//   settings: {
//     emailNotifications: true,
//     pushNotifications: true,
//     weeklyReport: false,
//     profileVisibility: true,
//     activityTracking: true,
//     connectedAccounts: {
//       google: { connected: false, description: "Calendar integration" },
//       microsoft: { connected: true, email: "john.doe@outlook.com" }
//     }
//   }
// };


// data.ts


// import { ProfileData } from "@/types/types";
// export const profileData: ProfileData = {
//   name: "John Doe",
//   location: "San Francisco, CA",
//   bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
//   email: "john.doe@example.com",
//   website: "johndoe.com",
//   twitter: "@johndoe",
//   stats: {
//     completionRate: 40,
//     totalTasks: 5,
//     completedTasks: 2,
//     importantTasks: 2,
//     todayTasks: 5,
//   },
//   projects: {
//     personal: { percentage: 42 },
//     work: { percentage: 35 },
//     health: { percentage: 23 },
//   },
//   priorities: {
//     high: { percentage: 30 },
//     medium: { percentage: 45 },
//     low: { percentage: 25 },
//   },
//   achievements: {
//     taskMaster: {
//       name: "Task Master",
//       description: "Complete 100 tasks",
//       progress: 65,
//     },
//     earlyBird: {
//       name: "Early Bird",
//       description: "Complete 50 tasks before noon",
//       progress: 80,
//     },
//     projectPro: {
//       name: "Project Pro",
//       description: "Create 10 projects",
//       progress: 30,
//     },
//     consistencyKing: {
//       name: "Consistency King",
//       description: "Use the app for 30 days straight",
//       progress: 90,
//     },
//   },
//   recentActivity: [
//     { action: "Completed 3 tasks", time: "Today", timeAgo: "2 hours ago" },
//     { action: "Added a new project", time: "Today", timeAgo: "5 hours ago" },
//     { action: "Completed 5 tasks", time: "Yesterday", timeAgo: "1 day ago" },
//     {
//       action: "Achieved 80% completion rate",
//       time: "Last Week",
//       timeAgo: "5 days ago",
//     },
//     { action: "Created 10 new tasks", time: "Last Week", timeAgo: "6 days ago" },
//   ],
//   settings: {
//     emailNotifications: true,
//     pushNotifications: true,
//     weeklyReport: false,
//     profileVisibility: true,
//     activityTracking: true,
//     connectedAccounts: {
//       google: { connected: false, description: "Calendar integration" },
//       microsoft: { connected: true, email: "john.doe@outlook.com" },
//     },
//   },
// };


// data.ts
export interface ProfileData {
  name: string;
  initials: string;
  title: string;
  email: string;
  bio: string;
  about: string;
  avatar: string | null;
  skills: string[];
  stats: {
    projects_completed: number;
    tasks_completed: number;
    achievements: number;
    contributions: number;
  };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  activities: Array<{
    type: 'completed' | 'commented' | 'created';
    action: string;
    target: string;
    time: string;
  }>;
  achievements: Array<{
    title: string;
    description: string;
    unlocked: boolean;
    progress?: {
      current: number;
      total: number;
    };
  }>;
  settings: {
    [key: string]: boolean;
  };
}

export const profileData: ProfileData = {
  name: "Jane Doe",
  initials: "JD",
  title: "Senior Product Designer",
  email: "jane.doe@example.com",
  bio: "Product designer with 5+ years of experience in creating user-centered digital experiences.",
  about: "I'm a product designer passionate about creating intuitive and engaging user experiences. With over 5 years of experience in the tech industry, I've worked on various projects from mobile apps to web platforms, focusing on user research, wireframing, prototyping, and usability testing.",
  avatar: null,
  skills: ["UI Design", "UX Research", "Prototyping", "Wireframing", "User Testing", "Figma", "Sketch", "Adobe XD"],
  stats: {
    projects_completed: 24,
    tasks_completed: 128,
    achievements: 12,
    contributions: 87
  },
  experience: [
    {
      role: "Senior Product Designer",
      company: "Design Co.",
      period: "2020 - Present",
      description: "Lead designer for the company's flagship product. Responsible for user research, wireframing, and prototyping."
    },
    {
      role: "UX Designer",
      company: "Tech Solutions Inc.",
      period: "2018 - 2020",
      description: "Worked on multiple projects focusing on improving user experience and interface design."
    },
    {
      role: "UI Design Intern",
      company: "Creative Agency",
      period: "2017 - 2018",
      description: "Assisted senior designers with creating user interfaces for web and mobile applications."
    }
  ],
  activities: [
    {
      type: "completed",
      action: "Completed task",
      target: "Redesign homepage",
      time: "2 hours ago"
    },
    {
      type: "commented",
      action: "Commented on",
      target: "Project X wireframes",
      time: "Yesterday at 4:30 PM"
    },
    {
      type: "created",
      action: "Created new",
      target: "User flow diagram",
      time: "2 days ago"
    },
    {
      type: "completed",
      action: "Finished",
      target: "User testing session",
      time: "3 days ago"
    },
    {
      type: "created",
      action: "Started",
      target: "New mobile app design project",
      time: "1 week ago"
    }
  ],
  achievements: [
    {
      title: "First Project",
      description: "Completed your first project",
      unlocked: true
    },
    {
      title: "Team Player",
      description: "Collaborated on 10 projects",
      unlocked: true
    },
    {
      title: "Design Guru",
      description: "Completed 50 design tasks",
      unlocked: false,
      progress: {
        current: 42,
        total: 50
      }
    },
    {
      title: "Perfect Feedback",
      description: "Received 5-star rating on 5 consecutive projects",
      unlocked: false,
      progress: {
        current: 3,
        total: 5
      }
    }
  ],
  settings: {
    email_notifications: true,
    push_notifications: false,
    weekly_digest: true,
    public_profile: true,
    show_activity: true,
    display_achievements: false
  }
};