// import { useState } from "react";
// import { FcGoogle } from 'react-icons/fc';
// import { FaMicrosoft } from 'react-icons/fa';
// import Notification from '@/components/ui/notification';


// interface SettingsTabProps {
//   settings: {
//     emailNotifications: boolean;
//     pushNotifications: boolean;
//     weeklyReport: boolean;
//     profileVisibility: boolean;
//     activityTracking: boolean;
//     connectedAccounts: {
//       google: { connected: boolean; description: string };
//       microsoft: { connected: boolean; email: string };
//     };
//   };
// }

// type ConnectedAccount = {
//   connected: boolean;
//   description: string;
//   email?: string;
// };

// type ConnectedAccounts = {
//   google: ConnectedAccount;
//   microsoft: ConnectedAccount;
// };

// export default function SettingsTab({ settings: initialSettings }: SettingsTabProps) {
//   const [settings, setSettings] = useState(initialSettings);
//   // const [connectedAccounts, setConnectedAccounts] = useState(initialSettings.connectedAccounts);

//   const handleToggle = (settingKey: keyof typeof settings) => {
//     setSettings(prev => ({
//       ...prev,
//       [settingKey]: !prev[settingKey]
//     }));
//   };

// 	const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccounts>({
//     google: {
//       connected: false,
//       description: 'Not connected to your Google account',
//     },
//     microsoft: {
//       connected: false,
//       description: 'Not connected to your Microsoft account',
//       email: 'user@microsoft.com',
//     },
//   });

//   const handleAccountConnect = (provider: keyof ConnectedAccounts) => {
//     setConnectedAccounts(prev => ({
//       ...prev,
//       [provider]: {
//         ...prev[provider],
//         connected: !prev[provider].connected,
//         description: !prev[provider].connected
//           ? `Connected to your ${provider.charAt(0).toUpperCase() + provider.slice(1)} account`
//           : `Not connected to your ${provider.charAt(0).toUpperCase() + provider.slice(1)} account`,
//       },
//     }));
//   };

//   const handleSaveChanges = () => {
//     // Here you would typically send the updated settings to your backend
//     console.log("Saving settings:", {
//       ...settings,
//       connectedAccounts
//     });
//     // You might want to add a success message or loading state here
//   };

// 	const [notification, setNotification] = useState({
//     isOpen: false,
//     message: '',
//     type: 'success' as const
//   });

// 	const handleSave = () => {
//     // Here you would normally save the data to your backend
//     // For now, we'll just show the notification
//     setNotification({
//       isOpen: true,
//       message: 'Profile settings saved successfully!',
//       type: 'success'
//     });
//   };
  
//   const closeNotification = () => {
//     setNotification(prev => ({ ...prev, isOpen: false }));
//   };

//   return (
//     <>
// 			<div className="bg-white p-2">
// 				<h2 className="text-xl font-bold mb-1">Account Settings</h2>
// 				<p className="text-gray-600 text-sm mb-6">Manage your account notifications</p>
				
// 				<div className="space-y-6">
// 					<h1 className="font-medium mb-4">Notification</h1>
// 					<div>
// 						<div className="space-y-4">
// 							<div className="flex justify-between items-center">
// 								<div>
// 									<h4 className="font-medium">Email Notifications</h4>
// 									<p className="text-sm text-gray-600">Receive task reminders via email</p>
// 								</div>
// 								<div className="relative">
// 									<button 
// 										className={`w-12 h-6 rounded-full ${settings.emailNotifications ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
// 										onClick={() => handleToggle('emailNotifications')}
// 									>
// 										<span 
// 											className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.emailNotifications ? 'left-7' : 'left-1'}`}
// 										/>
// 									</button>
// 								</div>
// 							</div>
							
// 							<div className="flex justify-between items-center">
// 								<div>
// 									<h4 className="font-medium">Push Notifications</h4>
// 									<p className="text-sm text-gray-600">Receive notifications on your device</p>
// 								</div>
// 								<div className="relative">
// 									<button 
// 										className={`w-12 h-6 rounded-full ${settings.pushNotifications ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
// 										onClick={() => handleToggle('pushNotifications')}
// 									>
// 										<span 
// 											className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.pushNotifications ? 'left-7' : 'left-1'}`}
// 										/>
// 									</button>
// 								</div>
// 							</div>

							
// 							<div className="flex justify-between items-center">
// 								<div>
// 									<h4 className="font-medium">Weekly Summary</h4>
// 									<p className="text-sm text-gray-600">Receive a weekly productivity report</p>
// 								</div>
// 								<div className="relative">
// 									<button 
// 										className={`w-12 h-6 rounded-full ${settings.weeklyReport ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
// 										onClick={() => handleToggle('weeklyReport')}
// 									>
// 										<span 
// 											className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.weeklyReport ? 'left-7' : 'left-1'}`} 
// 										/>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
					
// 					<div>
// 						<h1 className="font-medium mb-4">Privacy</h1>
						
// 						<div className="space-y-4">
// 							<div className="flex justify-between items-center">
// 								<div>
// 									<h4 className="font-medium">Profile Visibility</h4>
// 									<p className="text-sm text-gray-600">Allow others to see your profile</p>
// 								</div>
// 								<div className="relative">
// 									<button 
// 										className={`w-12 h-6 rounded-full ${settings.profileVisibility ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
// 										onClick={() => handleToggle('profileVisibility')}
// 									>
// 										<span 
// 											className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.profileVisibility ? 'left-7' : 'left-1'}`} 
// 										/>
// 									</button>
// 								</div>
// 							</div>
							
// 							<div className="flex justify-between items-center">
// 								<div>
// 									<h4 className="font-medium">Activity Tracking</h4>
// 									<p className="text-sm text-gray-600">Track your app usage for insights</p>
// 								</div>
// 								<div className="relative">
// 									<button 
// 										className={`w-12 h-6 rounded-full ${settings.activityTracking ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
// 										onClick={() => handleToggle('activityTracking')}
// 									>
// 										<span 
// 											className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.activityTracking ? 'left-7' : 'left-1'}`} 
// 										/>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
					
// 					<div>
// 						<h1 className="font-medium mb-4">Connected Accounts</h1>
// 						<div className="space-y-4">
// 							<div className="flex justify-between items-center">
// 								<div className="flex items-center">
// 									<div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
// 										<FcGoogle className="text-xl" />
// 									</div>
// 									<div>
// 										<h4 className="font-medium">Google</h4>
// 										<p className="text-sm text-gray-600">
// 											{connectedAccounts.google.description}
// 										</p>
// 									</div>
// 								</div>
// 								<button
// 									className={`px-3 py-1 ${
// 										connectedAccounts.google.connected
// 											? 'bg-gray-100 hover:bg-gray-200'
// 											: 'bg-blue-600 hover:bg-blue-700 text-white'
// 									} text-sm font-medium rounded`}
// 									onClick={() => handleAccountConnect('google')}
// 								>
// 									{connectedAccounts.google.connected ? 'Disconnect' : 'Connect'}
// 								</button>
// 							</div>

// 							<div className="flex justify-between items-center">
// 								<div className="flex items-center">
// 									<div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
// 										<FaMicrosoft className="text-blue-600 text-xl" />
// 									</div>
// 									<div>
// 										<h4 className="font-medium">Microsoft</h4>
// 										<p className="text-sm text-gray-600">
// 											{connectedAccounts.microsoft.connected
// 												? `Connected as ${connectedAccounts.microsoft.email}`
// 												: connectedAccounts.microsoft.description}
// 										</p>
// 									</div>
// 								</div>
// 								<button
// 									className={`px-3 py-1 ${
// 										connectedAccounts.microsoft.connected
// 											? 'bg-gray-100 hover:bg-gray-200 text-black'
// 											: 'bg-blue-600 hover:bg-blue-700 text-white'
// 									} text-sm font-medium rounded`}
// 									onClick={() => handleAccountConnect('microsoft')}
// 								>
// 									{connectedAccounts.microsoft.connected ? 'Disconnect' : 'Connect'}
// 								</button>
// 							</div>
// 						</div>
// 					</div>
			
// 					<div className="flex justify-end"> {/* Added border top */}
// 						<button 
// 							className="px- py-2 bg-black text-white rounded-md hover:bg-gray-800 w-44"
// 							onClick={handleSaveChanges}
// 						>
// 							Save Changes
// 						</button>
//         	</div>
// 				</div>
// 				<Notification
// 								type={notification.type}
// 								message={notification.message}
// 								isOpen={notification.isOpen}
// 								onClose={closeNotification}
// 								duration={3000}
// 							/>
// 			</div>
//     </>
//   );
// }

import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import Notification from '@/components/ui/notification';
import { NotificationType } from '@/components/ui/notification';

interface SettingsTabProps {
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

type ConnectedAccount = {
  connected: boolean;
  description: string;
  email?: string;
};

type ConnectedAccounts = {
  google: ConnectedAccount;
  microsoft: ConnectedAccount;
};

export default function SettingsTab({ settings: initialSettings }: SettingsTabProps) {
  const [settings, setSettings] = useState(initialSettings);
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccounts>({
    google: {
      connected: false,
      description: 'Not connected to your Google account',
    },
    microsoft: {
      connected: false,
      description: 'Not connected to your Microsoft account',
      email: 'user@microsoft.com',
    },
  });

  const [notification, setNotification] = useState<{
    isOpen: boolean;
    message: string;
    type: NotificationType;
  }>({
    isOpen: false,
    message: '',
    type: 'success'
  });


  const handleToggle = (settingKey: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [settingKey]: !prev[settingKey]
    }));
  };

  const handleAccountConnect = (provider: keyof ConnectedAccounts) => {
    const wasConnected = connectedAccounts[provider].connected;
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);
    
    setConnectedAccounts(prev => ({
      ...prev,
      [provider]: {
        ...prev[provider],
        connected: !prev[provider].connected,
        description: !prev[provider].connected
          ? `Connected to your ${providerName} account`
          : `Not connected to your ${providerName} account`,
      },
    }));

    // Show connection/disconnection notification
    setNotification({
      isOpen: true,
      message: !wasConnected 
        ? `${providerName} account connected successfully!`
        : `${providerName} account disconnected`,
      type: !wasConnected ? 'success' : 'info'
    });
  };

  const handleSaveChanges = () => {
    // Here you would typically send the updated settings to your backend
    console.log("Saving settings:", {
      ...settings,
      connectedAccounts
    });
    
    // Show success notification
    setNotification({
      isOpen: true,
      message: 'Settings saved successfully!',
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-white p-2">
      <h2 className="text-xl font-bold mb-1">Account Settings</h2>
      <p className="text-gray-600 text-sm mb-6">Manage your account notifications</p>
      
      <div className="space-y-6">
        <div>
          <h1 className="font-medium mb-4">Notification</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive task reminders via email</p>
              </div>
              <div className="relative">
                <button 
                  className={`w-12 h-6 rounded-full ${settings.emailNotifications ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
                  onClick={() => handleToggle('emailNotifications')}
                >
                  <span 
                    className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.emailNotifications ? 'left-7' : 'left-1'}`}
                  />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-gray-600">Receive notifications on your device</p>
              </div>
              <div className="relative">
                <button 
                  className={`w-12 h-6 rounded-full ${settings.pushNotifications ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
                  onClick={() => handleToggle('pushNotifications')}
                >
                  <span 
                    className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.pushNotifications ? 'left-7' : 'left-1'}`}
                  />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Weekly Summary</h4>
                <p className="text-sm text-gray-600">Receive a weekly productivity report</p>
              </div>
              <div className="relative">
                <button 
                  className={`w-12 h-6 rounded-full ${settings.weeklyReport ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
                  onClick={() => handleToggle('weeklyReport')}
                >
                  <span 
                    className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.weeklyReport ? 'left-7' : 'left-1'}`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="font-medium mb-4">Privacy</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Profile Visibility</h4>
                <p className="text-sm text-gray-600">Allow others to see your profile</p>
              </div>
              <div className="relative">
                <button 
                  className={`w-12 h-6 rounded-full ${settings.profileVisibility ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
                  onClick={() => handleToggle('profileVisibility')}
                >
                  <span 
                    className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.profileVisibility ? 'left-7' : 'left-1'}`} 
                  />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Activity Tracking</h4>
                <p className="text-sm text-gray-600">Track your app usage for insights</p>
              </div>
              <div className="relative">
                <button 
                  className={`w-12 h-6 rounded-full ${settings.activityTracking ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
                  onClick={() => handleToggle('activityTracking')}
                >
                  <span 
                    className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${settings.activityTracking ? 'left-7' : 'left-1'}`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h1 className="font-medium mb-4">Connected Accounts</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
                  <FcGoogle className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Google</h4>
                  <p className="text-sm text-gray-600">
                    {connectedAccounts.google.description}
                  </p>
                </div>
              </div>
              <button
                className={`px-3 py-1 ${
                  connectedAccounts.google.connected
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } text-sm font-medium rounded`}
                onClick={() => handleAccountConnect('google')}
              >
                {connectedAccounts.google.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3">
                  <FaMicrosoft className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Microsoft</h4>
                  <p className="text-sm text-gray-600">
                    {connectedAccounts.microsoft.connected
                      ? `Connected as ${connectedAccounts.microsoft.email}`
                      : connectedAccounts.microsoft.description}
                  </p>
                </div>
              </div>
              <button
                className={`px-3 py-1 ${
                  connectedAccounts.microsoft.connected
                    ? 'bg-gray-100 hover:bg-gray-200 text-black'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } text-sm font-medium rounded`}
                onClick={() => handleAccountConnect('microsoft')}
              >
                {connectedAccounts.microsoft.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-2 flex justify-end">
          <button 
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 w-44"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
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