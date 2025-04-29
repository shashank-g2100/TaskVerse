// pages/settings/index.tsx
"use client"

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';
import ProfileSettings from '@/components/settings/ProfileSettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import PreferenceSettings from '@/components/settings/PreferenceSettings';

type TabType = 'profile' | 'notifications' | 'preferences';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabType>('notifications');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Settings | TaskVerse</title>
        <meta name="description" content="TaskMaster settings page" />
      </Head>

      <div className="max-w-full mx-auto px-2">
        <div className="flex justify-between items-center py-2 border-b border-gray-300">
          <div className="flex items-center gap-x-1">
            <Link href="/dashboard">
              <div className="h-8 w-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer">
                <ChevronLeft className="h-5 w-5" />
              </div>
            </Link>
            <h2 className="text-xl font-bold">Settings</h2>
          </div>
          <Link href="/dashboard" className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium flex items-center space-x-2">
            <Home className="w-5 h-5" /> 
            <span>Dashboard</span>
          </Link>
        </div>

        <div className="mt-2">
          <nav className="flex justify-center space-x-1 mb-2">
            {/* <TabButton 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
              label="Profile"
            /> */}
            <TabButton 
              active={activeTab === 'notifications'} 
              onClick={() => setActiveTab('notifications')}
              label="Notifications"
            />
            <TabButton 
              active={activeTab === 'preferences'} 
              onClick={() => setActiveTab('preferences')}
              label="Preferences"
            />
          </nav>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-6xl mx-auto">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'preferences' && <PreferenceSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

function TabButton({ active, onClick, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-medium text-sm rounded-md transition ${
        active 
          ? 'bg-white text-black border border-gray-200 shadow-sm' 
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}