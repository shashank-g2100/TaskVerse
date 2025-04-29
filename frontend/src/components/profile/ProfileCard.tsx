// // components/ProfileCard.tsx
// import { User, Edit2, Mail, Globe, Twitter, List } from "lucide-react";
// import { ProfileData } from "@/types/types";



// interface ProfileCardProps {
//   profileData: ProfileData;
// }

// export const ProfileCard: React.FC<ProfileCardProps> = ({ profileData }) => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <div className="flex justify-center relative mb-4">
//         <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
//         <button className="absolute bottom-0 right-24 bg-white rounded-full p-2 shadow">
//           <Edit2 size={16} />
//         </button>
//       </div>

//       <div className="text-center mb-4">
//         <h2 className="text-xl font-bold">{profileData.name}</h2>
//         <p className="text-gray-600 flex items-center justify-center mt-1">
//           <span className="flex items-center">
//             <User size={14} className="mr-1" />
//             {profileData.location}
//           </span>
//         </p>
//       </div>

//       <p className="text-gray-700 mb-4">{profileData.bio}</p>

//       <div className="space-y-2">
//         <div className="flex items-center text-gray-700">
//           <Mail size={16} className="mr-2" />
//           <a
//             href={`mailto:${profileData.email}`}
//             className="text-blue-600 hover:underline"
//           >
//             {profileData.email}
//           </a>
//         </div>
//         <div className="flex items-center text-gray-700">
//           <Globe size={16} className="mr-2" />
//           <a
//             href={`https://${profileData.website}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             {profileData.website}
//           </a>
//         </div>
//         <div className="flex gap-2 mt-4">
//           <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
//             <Twitter size={16} className="mr-1" />
//             {profileData.twitter}
//           </button>
//           <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
//             <List size={16} className="mr-1" />
//             johndoe
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// components/ProfileCard.tsx
import { profileData } from "@/data/data";
import { ProfileData } from "@/types/types";

interface ProfileCardProps {
    profile: typeof profileData;
  }
  
  export function ProfileCard({ profile }: ProfileCardProps) {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24"></div>
        <div className="px-4 py-5 sm:p-6 -mt-12">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} className="h-full w-full rounded-full object-cover" />
              ) : (
                <span className="text-xl font-medium text-gray-700">{profile.initials}</span>
              )}
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-sm text-gray-500">{profile.title}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">{profile.bio}</p>
          </div>
          <div className="mt-5">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    );
  }