// import { useState, ChangeEvent } from 'react';
// import { LogOut } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Notification from '@/components/ui/notification';
// import Link from 'next/link';

// interface PreferencesState {
//   darkMode: boolean;
//   dashboardView: string;
//   taskSort: string;
// }

// export default function PreferenceSettings() {
//   const [preferences, setPreferences] = useState<PreferencesState>({
//     darkMode: false,
//     dashboardView: 'Today',
//     taskSort: 'Due Date'
//   });

//   const [notification, setNotification] = useState({
//     isOpen: false,
//     message: '',
//     type: 'success' as const
//   });

//   const handleChange = (name: keyof PreferencesState, value: string) => {
//     setPreferences(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleToggle = (name: keyof PreferencesState) => {
//     setPreferences(prev => ({
//       ...prev,
//       [name]: !prev[name]
//     }));
//   };

//   // Handle the "Reset to Defaults" button click
//   const handleCancel = () => {
//     setPreferences({
//       darkMode: false,
//       dashboardView: 'Today',
//       taskSort: 'Due Date'
//     });
//   };

//   const handleSave = () => {
//     // Here you would normally save the data to your backend
//     // For now, we'll just show the notification
//     setNotification({
//       isOpen: true,
//       message: 'Preference settings saved successfully!',
//       type: 'success'
//     });
//   };

//   const closeNotification = () => {
//     setNotification(prev => ({ ...prev, isOpen: false }));
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
//         <p className="text-sm text-gray-500">Customize your TaskMaster experience</p>
//       </div>

//       <div className="mb-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-base font-medium">Dark Mode</h3>
//             <p className="text-sm text-gray-500">Toggle between light and dark mode</p>
//           </div>
//           <div className="relative">
//             <button 
//               className={`w-12 h-6 rounded-full ${preferences.darkMode ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
//               onClick={() => handleToggle('darkMode')}
//             >
//               <span 
//                 className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${preferences.darkMode ? 'left-7' : 'left-1'}`} 
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="border-t pt-4 mb-4">
//         <h3 className="text-base font-medium mb-4">Default Views</h3>

//         <div className="mb-4">
//           <label htmlFor="dashboardView" className="block text-sm font-medium text-gray-700 mb-1">Dashboard Default View</label>
//           <select
//             id="dashboardView"
//             value={preferences.dashboardView}
//             onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('dashboardView', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//           >
//             <option value="Today">Today</option>
//             <option value="This Week">This Week</option>
//             <option value="All Tasks">All Tasks</option>
//             <option value="Important">Important</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="taskSort" className="block text-sm font-medium text-gray-700 mb-1">Default Task Sort</label>
//           <select
//             id="taskSort"
//             value={preferences.taskSort}
//             onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('taskSort', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
//           >
//             <option value="Due Date">Due Date</option>
//             <option value="Priority">Priority</option>
//             <option value="Created At">Created At</option>
//             <option value="Alphabetical">Alphabetical</option>
//           </select>
//         </div>
//       </div>

//       <div className="border-t pt-6 mb-6">
//         <h3 className="text-base font-medium mb-4">Account Actions</h3>
        
//         <div className="flex space-x-2">
//           <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded text-sm">
//             Export Data
//           </button>
//           <button >
//             <Link href="/" className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded text-sm inline-flex items-center ">
//               <LogOut className="h-4 w-4 mr-1" />
//               <span>Log Out</span>
//             </Link>
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-between mt-6">
//         <Button 
//           type="button" 
//           onClick={handleCancel}
//           className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6"
//         >
//           Reset to Defaults
//         </Button>
//         <Button 
//           type="submit"
//           onClick={handleSave}
//           className="bg-black text-white hover:bg-gray-800 px-6"
//         >
//         Save Changes
//         </Button>
//       </div>

//       <Notification
//         type={notification.type}
//         message={notification.message}
//         isOpen={notification.isOpen}
//         onClose={closeNotification}
//         duration={3000}
//       />
//     </div>
//   );
// }



import { useState, ChangeEvent, useRef, useEffect } from 'react';
import { LogOut, FileText, Download, X, FileSpreadsheet, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Notification from '@/components/ui/notification';
import Link from 'next/link';

interface PreferencesState {
  darkMode: boolean;
  dashboardView: string;
  taskSort: string;
}

export default function PreferenceSettings() {
  const [preferences, setPreferences] = useState<PreferencesState>({
    darkMode: false,
    dashboardView: 'Today',
    taskSort: 'Due Date'
  });

  const [notification, setNotification] = useState({
    isOpen: false,
    message: '',
    type: 'success' as const
  });

  // State for export menu
  const [showExportMenu, setShowExportMenu] = useState(false);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  // Close export menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
        setShowExportMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (name: keyof PreferencesState, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggle = (name: keyof PreferencesState) => {
    setPreferences(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Handle the "Reset to Defaults" button click
  const handleCancel = () => {
    setPreferences({
      darkMode: false,
      dashboardView: 'Today',
      taskSort: 'Due Date'
    });
  };

  const handleSave = () => {
    // Here you would normally save the data to your backend
    // For now, we'll just show the notification
    setNotification({
      isOpen: true,
      message: 'Preference settings saved successfully!',
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isOpen: false }));
  };

  const handleExport = (format: string) => {
    // Close the export menu
    setShowExportMenu(false);
    
    // Show notification that data has been exported
    setNotification({
      isOpen: true,
      message: `Data has been exported as ${format}`,
      type: 'success'
    });
    
    // Here you would normally handle the actual export functionality
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
        <p className="text-sm text-gray-500">Customize your TaskMaster experience</p>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium">Dark Mode</h3>
            <p className="text-sm text-gray-500">Toggle between light and dark mode</p>
          </div>
          <div className="relative">
            <button 
              className={`w-12 h-6 rounded-full ${preferences.darkMode ? 'bg-black' : 'bg-gray-300'} transition-colors duration-200 relative`}
              onClick={() => handleToggle('darkMode')}
            >
              <span 
                className={`absolute top-1 h-4 w-4 bg-white rounded-full transition-all duration-200 ${preferences.darkMode ? 'left-7' : 'left-1'}`} 
              />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mb-4">
        <h3 className="text-base font-medium mb-4">Default Views</h3>

        <div className="mb-4">
          <label htmlFor="dashboardView" className="block text-sm font-medium text-gray-700 mb-1">Dashboard Default View</label>
          <select
            id="dashboardView"
            value={preferences.dashboardView}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('dashboardView', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="All Tasks">All Tasks</option>
            <option value="Important">Important</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="taskSort" className="block text-sm font-medium text-gray-700 mb-1">Default Task Sort</label>
          <select
            id="taskSort"
            value={preferences.taskSort}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('taskSort', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
          >
            <option value="Due Date">Due Date</option>
            <option value="Priority">Priority</option>
            <option value="Created At">Created At</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="border-t pt-6 mb-6">
        <h3 className="text-base font-medium mb-4">Account Actions</h3>
        
        <div className="flex space-x-2">
          <div className="relative" ref={exportMenuRef}>
            <button 
              className="px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded text-sm inline-flex items-center"
              onClick={() => setShowExportMenu(!showExportMenu)}
            >
              <Download className="h-4 w-4 mr-1" />
              Export Data
            </button>
            
            {/* Export Menu Popup */}
            {showExportMenu && (
              <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm bg-opacity-30">
              <div className="bg-white rounded-md shadow-lg w-50">
                <div className="py-1">
                  <div className="px-4 py-2 border-b flex justify-between items-center">
                    <span className="font-medium text-sm">Export Format</span>
                    <button 
                      onClick={() => setShowExportMenu(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                    onClick={() => handleExport('PDF')}
                  >
                    <FileText className="h-4 w-4 mr-2 text-red-500" />
                    Download as PDF
                  </button>
                  <button 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                    onClick={() => handleExport('Word')}
                  >
                    <File className="h-4 w-4 mr-2 text-blue-500" />
                    Download as Word
                  </button>
                  <button 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                    onClick={() => handleExport('CSV')}
                  >
                    <FileSpreadsheet className="h-4 w-4 mr-2 text-green-500" />
                    Download as CSV
                  </button>
                </div>
              </div>
              </div>
            )}
          </div>
          
          <button>
            <Link href="/" className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded text-sm inline-flex items-center">
              <LogOut className="h-4 w-4 mr-1" />
              <span>Log Out</span>
            </Link>
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
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