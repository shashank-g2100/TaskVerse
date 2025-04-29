// components/ui/notification.tsx
import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info';

interface NotificationProps {
  type: NotificationType;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number; // Auto-close duration in ms, default 3000ms
}

export default function Notification({
  type,
  message,
  isOpen,
  onClose,
  duration = 3000
}: NotificationProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  // Icon and background colors based on notification type
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-400',
          icon: <CheckCircle className="h-5 w-5 text-green-500" />
        };
      case 'error':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-400',
          icon: <AlertCircle className="h-5 w-5 text-red-500" />
        };
      case 'info':
      default:
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-400',
          icon: <AlertCircle className="h-5 w-5 text-blue-500" />
        };
    }
  };

  const { bgColor, borderColor, icon } = getTypeStyles();

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm animate-slide-down">
      <div className={`rounded-md ${bgColor} p-4 border ${borderColor} shadow-lg`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="ml-3 mr-8">
            <p className="text-sm font-medium text-gray-800">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}