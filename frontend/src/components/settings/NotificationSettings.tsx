// // components/settings/NotificationSettings.tsx
// import { useState, ReactNode } from 'react';
// import { Bell, CheckCircle, User, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface NotificationState {
//   allNotifications: boolean;
//   taskReminders: boolean;
//   taskCompletions: boolean;
//   accountUpdates: boolean;
//   emailNotifications: boolean;
// }

// export default function NotificationSettings() {
//   const [notifications, setNotifications] = useState<NotificationState>({
//     allNotifications: true,
//     taskReminders: true,
//     taskCompletions: true,
//     accountUpdates: true,
//     emailNotifications: true
//   });

//   const handleToggle = (name: keyof NotificationState) => {
//     setNotifications(prev => ({
//       ...prev,
//       [name]: !prev[name]
//     }));
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
//         <p className="text-sm text-gray-500">Manage when and how you receive notifications</p>
//       </div>

//       <div className="space-y-6">
//         <NotificationOption 
//           icon={<Bell />}
//           title="Notifications"
//           description="Enable or disable all notifications"
//           checked={notifications.allNotifications}
//           onChange={() => handleToggle('allNotifications')}
//         />

//         <div className="border-t pt-6">
//           <NotificationOption 
//             icon={<Bell />}
//             title="Task Reminders"
//             description="Get notified when a task is due"
//             checked={notifications.taskReminders}
//             onChange={() => handleToggle('taskReminders')}
//           />

//           <NotificationOption 
//             icon={<CheckCircle />}
//             title="Task Completions"
//             description="Get notified when a task is completed"
//             checked={notifications.taskCompletions}
//             onChange={() => handleToggle('taskCompletions')}
//           />

//           <NotificationOption 
//             icon={<User />}
//             title="Account Updates"
//             description="Get notified about important account updates"
//             checked={notifications.accountUpdates}
//             onChange={() => handleToggle('accountUpdates')}
//           />

//           <NotificationOption 
//             icon={<Mail />}
//             title="Email Notifications"
//             description="Receive notifications via email"
//             checked={notifications.emailNotifications}
//             onChange={() => handleToggle('emailNotifications')}
//           />
//         </div>
//       </div>

//       <div className="flex justify-between mt-8">
//       <Button 
//           type="button" 
//           onClick={handleCancel}
//           className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
//         >
//           Reset to Defaults
//         </Button>
//         <Button 
//           type="submit"
//           className="bg-black text-white hover:bg-gray-800 px-6"
//         >
//         Save Changes
//         </Button>
//       </div>
//     </div>
//   );
// }

// interface NotificationOptionProps {
//   icon: ReactNode;
//   title: string;
//   description: string;
//   checked: boolean;
//   onChange: () => void;
// }

// function NotificationOption({ icon, title, description, checked, onChange }: NotificationOptionProps) {
//   return (
//     <div className="flex items-center justify-between mb-4">
//       <div className="flex items-start">
//         <div className="mr-3 mt-0.5 text-gray-500">{icon}</div>
//         <div>
//           <h3 className="text-base font-medium">{title}</h3>
//           <p className="text-sm text-gray-500">{description}</p>
//         </div>
//       </div>
//       <div className="relative">
//         <button 
//           className={`w-12 h-6 rounded-full ${checked ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
//           onClick={onChange}
//         >
//           <span 
//             className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${checked ? 'left-7' : 'left-1'}`} 
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, ReactNode } from 'react';
// import { Bell, CheckCircle, User, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface NotificationState {
//   allNotifications: boolean;
//   taskReminders: boolean;
//   taskCompletions: boolean;
//   accountUpdates: boolean;
//   emailNotifications: boolean;
// }

// export default function NotificationSettings() {
//   const [notifications, setNotifications] = useState<NotificationState>({
//     allNotifications: true,
//     taskReminders: true,
//     taskCompletions: true,
//     accountUpdates: true,
//     emailNotifications: true
//   });

//   // const handleToggle = (name: keyof NotificationState) => {
//   //   setNotifications(prev => ({
//   //     ...prev,
//   //     [name]: !prev[name]
//   //   }));
//   // };

//   const handleToggle = (name: keyof NotificationState) => {
//     setNotifications(prev => {
//       if (name === 'allNotifications') {
//         // If allNotifications is toggled, toggle all options accordingly
//         const newState = !prev.allNotifications;
//         return {
//           allNotifications: newState,
//           taskReminders: newState,
//           taskCompletions: newState,
//           accountUpdates: newState,
//           emailNotifications: newState
//         };
//       } else {
//         // Toggle individual notification options
//         return {
//           ...prev,
//           [name]: !prev[name]
//         };
//       }
//     });
//   };

//   // Define handleCancel function to reset notifications to default values
//   const handleCancel = () => {
//     setNotifications({
//       allNotifications: true,
//       taskReminders: true,
//       taskCompletions: true,
//       accountUpdates: true,
//       emailNotifications: true
//     });
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
//         <p className="text-sm text-gray-500">Manage when and how you receive notifications</p>
//       </div>

//       <div className="space-y-6">
//         <NotificationOption 
//           icon={<Bell />}
//           title="Notifications"
//           description="Enable or disable all notifications"
//           checked={notifications.allNotifications}
//           onChange={() => handleToggle('allNotifications')}
//         />

//         <div className="border-t pt-6">
//           <NotificationOption 
//             icon={<Bell />}
//             title="Task Reminders"
//             description="Get notified when a task is due"
//             checked={notifications.taskReminders}
//             onChange={() => handleToggle('taskReminders')}
//           />

//           <NotificationOption 
//             icon={<CheckCircle />}
//             title="Task Completions"
//             description="Get notified when a task is completed"
//             checked={notifications.taskCompletions}
//             onChange={() => handleToggle('taskCompletions')}
//           />

//           <NotificationOption 
//             icon={<User />}
//             title="Account Updates"
//             description="Get notified about important account updates"
//             checked={notifications.accountUpdates}
//             onChange={() => handleToggle('accountUpdates')}
//           />

//           <NotificationOption 
//             icon={<Mail />}
//             title="Email Notifications"
//             description="Receive notifications via email"
//             checked={notifications.emailNotifications}
//             onChange={() => handleToggle('emailNotifications')}
//           />
//         </div>
//       </div>

//       <div className="flex justify-between mt-8">
//         <Button 
//           type="button" 
//           onClick={handleCancel}
//           className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
//         >
//           Reset to Defaults
//         </Button>
//         <Button 
//           type="submit"
//           className="bg-black text-white hover:bg-gray-800 px-6"
//         >
//         Save Changes
//         </Button>
//       </div>
//     </div>
//   );
// }

// interface NotificationOptionProps {
//   icon: ReactNode;
//   title: string;
//   description: string;
//   checked: boolean;
//   onChange: () => void;
// }

// function NotificationOption({ icon, title, description, checked, onChange }: NotificationOptionProps) {
//   return (
//     <div className="flex items-center justify-between mb-4">
//       <div className="flex items-start">
//         <div className="mr-3 mt-0.5 text-gray-500">{icon}</div>
//         <div>
//           <h3 className="text-base font-medium">{title}</h3>
//           <p className="text-sm text-gray-500">{description}</p>
//         </div>
//       </div>
//       <div className="relative">
//         <button 
//           className={`w-12 h-6 rounded-full ${checked ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
//           onClick={onChange}
//         >
//           <span 
//             className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${checked ? 'left-7' : 'left-1'}`} 
//           />
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState, ReactNode } from 'react';
import { Bell, CheckCircle, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Notification from '@/components/ui/notification';

interface NotificationState {
  allNotifications: boolean;
  taskReminders: boolean;
  taskCompletions: boolean;
  accountUpdates: boolean;
  emailNotifications: boolean;
}

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState<NotificationState>({
    allNotifications: true,
    taskReminders: true,
    taskCompletions: true,
    accountUpdates: true,
    emailNotifications: true
  });

  const [notification, setNotification] = useState({
    isOpen: false,
    message: '',
    type: 'success' as const
  });

  // const handleToggle = (name: keyof NotificationState) => {
  //   setNotifications(prev => ({
  //     ...prev,
  //     [name]: !prev[name]
  //   }));
  // };

  const handleToggle = (name: keyof NotificationState) => {
    setNotifications(prev => {
      if (name === 'allNotifications') {
        // If allNotifications is toggled, toggle all options accordingly
        const newState = !prev.allNotifications;
        return {
          allNotifications: newState,
          taskReminders: newState,
          taskCompletions: newState,
          accountUpdates: newState,
          emailNotifications: newState
        };
      } else {
        // Toggle individual notification options
        return {
          ...prev,
          [name]: !prev[name]
        };
      }
    });
  };

  // Define handleCancel function to reset notifications to default values
  const handleCancel = () => {
    setNotifications({
      allNotifications: true,
      taskReminders: true,
      taskCompletions: true,
      accountUpdates: true,
      emailNotifications: true
    });
  };

  const handleSave = () => {
    // Here you would normally save the data to your backend
    // For now, we'll just show the notification
    setNotification({
      isOpen: true,
      message: 'Notification settings saved successfully!',
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <p className="text-sm text-gray-500">Manage when and how you receive notifications</p>
      </div>

      <div className="space-y-6">
        <NotificationOption 
          icon={<Bell />}
          title="Notifications"
          description="Enable or disable all notifications"
          checked={notifications.allNotifications}
          onChange={() => handleToggle('allNotifications')}
        />

        <div className="border-t pt-6">
          <NotificationOption 
            icon={<Bell />}
            title="Task Reminders"
            description="Get notified when a task is due"
            checked={notifications.taskReminders}
            onChange={() => handleToggle('taskReminders')}
          />

          <NotificationOption 
            icon={<CheckCircle />}
            title="Task Completions"
            description="Get notified when a task is completed"
            checked={notifications.taskCompletions}
            onChange={() => handleToggle('taskCompletions')}
          />

          <NotificationOption 
            icon={<User />}
            title="Account Updates"
            description="Get notified about important account updates"
            checked={notifications.accountUpdates}
            onChange={() => handleToggle('accountUpdates')}
          />

          <NotificationOption 
            icon={<Mail />}
            title="Email Notifications"
            description="Receive notifications via email"
            checked={notifications.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button 
          type="button" 
          onClick={handleCancel}
          className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
        >
          Reset to Defaults
        </Button>
        <Button 
          type="submit"
          onClick={handleSave}
          className="bg-black text-white hover:bg-gray-800 px-6"
        >
        Save Changes
        </Button>
      </div>

      <Notification
        type={notification.type}
        message={notification.message}
        isOpen={notification.isOpen}
        onClose={closeNotification}
        duration={3000}
      />
    </div>
  );
}

interface NotificationOptionProps {
  icon: ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}

function NotificationOption({ icon, title, description, checked, onChange }: NotificationOptionProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-start">
        <div className="mr-3 mt-0.5 text-gray-500">{icon}</div>
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="relative">
        <button 
          className={`w-12 h-6 rounded-full ${checked ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
          onClick={onChange}
        >
          <span 
            className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${checked ? 'left-7' : 'left-1'}`} 
          />
        </button>
      </div>
    </div>
  );
}
