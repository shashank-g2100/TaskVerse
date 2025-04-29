export interface ProfileData {
    name: string;
    location: string;
    bio: string;
    email: string;
    website: string;
    twitter: string;
    stats: {
      completionRate: number;
      totalTasks: number;
      completedTasks: number;
      importantTasks: number;
      todayTasks: number;
    };
    projects: {
      personal: { percentage: number };
      work: { percentage: number };
      health: { percentage: number };
    };
    priorities: {
      high: { percentage: number };
      medium: { percentage: number };
      low: { percentage: number };
    };
    achievements: {
      [key: string]: {
        name: string;
        description: string;
        progress: number;
      };
    };
    recentActivity: Array<{
      action: string;
      time: string;
      timeAgo: string;
    }>;
    settings: {
      emailNotifications: boolean;
      pushNotifications: boolean;
      weeklyReport: boolean;
      profileVisibility: boolean;
      activityTracking: boolean;
      connectedAccounts: {
        google: { connected: boolean; description: string };
        microsoft: { connected: boolean; email: string };
      };
    };
  }