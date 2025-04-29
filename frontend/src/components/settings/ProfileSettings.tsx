// // components/settings/ProfileSettings.tsx
// import { useState, ChangeEvent } from 'react';
// import { User } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface ProfileFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   timeZone: string;
// }

// interface ProfileSettingsProps {
//   onClose?: () => void; // Optional prop for parent components to handle closing
// }

// export default function ProfileSettings({ onClose }: ProfileSettingsProps = {}) {
//   const [formData, setFormData] = useState<ProfileFormData>({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     timeZone: 'Eastern Time (US & Canada)'
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Default handler if no onClose prop is provided
//   const handleCancel = () => {
//     if (onClose) {
//       onClose();
//     } else {
//       // Default behavior - just reset the form
//       setFormData({
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com',
//         timeZone: 'Eastern Time (US & Canada)'
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
//         <p className="text-sm text-gray-500">Manage your profile information</p>
//       </div>

//       <div className="mb-8">
//         <div className="flex items-center space-x-4">
//           <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center">
//             <User className="h-10 w-10 text-gray-400" />
//           </div>
//           <div>
//             <h3 className="text-base font-medium">Profile Photo</h3>
//             <p className="text-sm text-gray-500 mb-2">Upload a photo to personalize your account</p>
//             <div className="flex space-x-2">
//               <button className="px-3 py-1.5 border border-gray-300 hover:bg-gray-100 rounded text-sm">Upload</button>
//               <button className="px-3 py-1.5 border border-gray-300 hover:bg-gray-100 rounded text-sm text-gray-700">Remove</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>

//       <div className="mb-6">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       <div className="mb-8">
//         <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
//         <select
//           id="timeZone"
//           name="timeZone"
//           value={formData.timeZone}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//         >
//           <option value="Eastern Time (US & Canada)">Eastern Time (US & Canada)</option>
//           <option value="Central Time (US & Canada)">Central Time (US & Canada)</option>
//           <option value="Pacific Time (US & Canada)">Pacific Time (US & Canada)</option>
//           <option value="UTC">UTC</option>
//         </select>
//       </div>

//       <div className="flex justify-between">
//         <Button 
//           type="button" 
//           onClick={handleCancel}
//           className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
//         >
//           Reset
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

// components/settings/ProfileSettings.tsx
import { useState, ChangeEvent } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Notification from '@/components/ui/notification';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  timeZone: string;
}

interface ProfileSettingsProps {
  onClose?: () => void; // Optional prop for parent components to handle closing
}

export default function ProfileSettings({ onClose }: ProfileSettingsProps = {}) {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    timeZone: 'Eastern Time (US & Canada)'
  });
  
  const [notification, setNotification] = useState({
    isOpen: false,
    message: '',
    type: 'success' as const
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Default handler if no onClose prop is provided
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      // Default behavior - just reset the form
      setFormData({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        timeZone: 'Eastern Time (US & Canada)'
      });
    }
  };
  
  const handleSave = () => {
    // Here you would normally save the data to your backend
    // For now, we'll just show the notification
    setNotification({
      isOpen: true,
      message: 'Profile settings saved successfully!',
      type: 'success'
    });
  };
  
  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
        <p className="text-sm text-gray-500">Manage your profile information</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-gray-400" />
          </div>
          <div>
            <h3 className="text-base font-medium">Profile Photo</h3>
            <p className="text-sm text-gray-500 mb-2">Upload a photo to personalize your account</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 border border-gray-300 hover:bg-gray-100 rounded text-sm">Upload</button>
              <button className="px-3 py-1.5 border border-gray-300 hover:bg-gray-100 rounded text-sm text-gray-700">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="timeZone" className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
        <select
          id="timeZone"
          name="timeZone"
          value={formData.timeZone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
        >
          <option value="Eastern Time (US & Canada)">Eastern Time (US & Canada)</option>
          <option value="Central Time (US & Canada)">Central Time (US & Canada)</option>
          <option value="Pacific Time (US & Canada)">Pacific Time (US & Canada)</option>
          <option value="UTC">UTC</option>
        </select>
      </div>

      <div className="flex justify-between">
        <Button 
          type="button" 
          onClick={handleCancel}
          className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
        >
          Reset
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