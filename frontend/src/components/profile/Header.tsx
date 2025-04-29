// components/Header.tsx
import { ArrowLeft } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <button className="mr-4">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>
      <button className="text-gray-700 hover:text-gray-900">
        Back to Dashboard
      </button>
    </header>
  );
};
