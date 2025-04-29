// import { Edit2, Mail, Globe, Twitter, List, User } from "lucide-react";

// interface ProfileInfoCardProps {
//   profileData: {
//     name: string;
//     location: string;
//     bio: string;
//     email: string;
//     website: string;
//     twitter: string;
//   };
// }

// export default function ProfileInfoCard({ profileData }: ProfileInfoCardProps) {
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

//       <p className="text-gray-700 mb-4">
//         {profileData.bio}
//       </p>

//       <div className="space-y-2">
//         <div className="flex items-center text-gray-700">
//           <Mail size={16} className="mr-2" />
//           <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
//             {profileData.email}
//           </a>
//         </div>
//         <div className="flex items-center text-gray-700">
//           <Globe size={16} className="mr-2" />
//           <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
// }
////



////PErfent one
// import { useState } from "react";
// import { Edit2, Mail, Globe, Twitter, List, User, Save, X } from "lucide-react";

// interface ProfileData {
//   name: string;
//   location: string;
//   bio: string;
//   email: string;
//   website: string;
//   twitter: string;
//   github: string;
// }

// export default function ProfileInfoCard() {
//   // Sample initial data
//   const initialProfileData = {
//     name: "John Doe",
//     location: "San Francisco, CA",
//     bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
//     email: "john.doe@example.com",
//     website: "johndoe.com",
//     twitter: "@johndoe",
//     github: "johndoe"
//   };

//   const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState<ProfileData>(initialProfileData);

//   const handleEditClick = () => {
//     setEditedData(profileData);
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setProfileData(editedData);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setEditedData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   if (isEditing) {
//     return (
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex justify-center relative mb-4">
//           <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
//           <button className="absolute bottom-0 right-24 bg-white rounded-full p-2 shadow">
//             <Edit2 size={16} />
//           </button>
//         </div>
        
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={editedData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={editedData.location}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Bio</label>
//             <textarea
//               name="bio"
//               value={editedData.bio}
//               onChange={handleChange}
//               rows={3}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={editedData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Website</label>
//             <input
//               type="text"
//               name="website"
//               value={editedData.website}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Twitter</label>
//               <input
//                 type="text"
//                 name="twitter"
//                 value={editedData.twitter}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700">GitHub</label>
//               <input
//                 type="text"
//                 name="github"
//                 value={editedData.github}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               />
//             </div>
//           </div>
          
//           <div className="flex justify-end space-x-2 pt-4">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//             >
//               <X size={16} className="mr-2" />
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSave}
//               className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//             >
//               <Save size={16} className="mr-2" />
//               Save Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <div className="flex justify-center relative mb-4">
//         <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
//         <button 
//           className="absolute bottom-0 right-24 bg-white rounded-full p-2 shadow"
//           onClick={handleEditClick}
//         >
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
//       <p className="text-gray-700 mb-4">
//         {profileData.bio}
//       </p>
//       <div className="space-y-2">
//         <div className="flex items-center text-gray-700">
//           <Mail size={16} className="mr-2" />
//           <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
//             {profileData.email}
//           </a>
//         </div>
//         <div className="flex items-center text-gray-700">
//           <Globe size={16} className="mr-2" />
//           <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
//             {profileData.github}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { Edit2, Mail, Globe, Twitter, List, User, Save, X, Image as ImageIcon } from "lucide-react";

interface ProfileData {
  name: string;
  location: string;
  bio: string;
  email: string;
  website: string;
  twitter: string;
  github: string;
  image?: string;
}

export default function ProfileInfoCard() {
  // Sample initial data
  const initialProfileData = {
    name: "John Doe",
    location: "San Francisco, CA",
    bio: "Product Manager with 5+ years of experience. Passionate about productivity and task management.",
    email: "john.doe@example.com",
    website: "johndoe.com",
    twitter: "@johndoe",
    github: "johndoe",
    image: ""
  };

  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<ProfileData>(initialProfileData);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setEditedData(profileData);
    setIsEditing(true);
    if (profileData.image) {
      setPreviewImage(profileData.image);
    }
  };

  const handleSave = () => {
    setProfileData({
      ...editedData,
      image: previewImage || profileData.image
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setPreviewImage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-center relative mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            {previewImage ? (
              <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
            ) : profileData.image ? (
              <img src={profileData.image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <ImageIcon size={32} />
              </div>
            )}
          </div>
          <button 
            className="absolute bottom-0 right-36 hover:bg-gray-100 bg-white rounded-full p-2 shadow"
            onClick={triggerFileInput}
          >
            <Edit2 size={16} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={editedData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={editedData.bio}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="text"
              name="website"
              value={editedData.website}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="text"
                name="twitter"
                value={editedData.twitter}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub</label>
              <input
                type="text"
                name="github"
                value={editedData.github}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <X size={16} className="mr-2" />
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <Save size={16} className="mr-2" />
              Save Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-center relative mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
          {profileData.image ? (
            <img src={profileData.image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <User size={32} />
            </div>
          )}
        </div>
        <button 
          className="absolute bottom-0 right-36 hover:bg-gray-100 bg-white rounded-full p-2 shadow"
          onClick={handleEditClick}
        >
          <Edit2 size={16} />
        </button>
      </div>
     
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{profileData.name}</h2>
        <p className="text-gray-600 flex items-center justify-center mt-1">
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {profileData.location}
          </span>
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        {profileData.bio}
      </p>
      {/* <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <Mail size={16} className="mr-2" />
          <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
            {profileData.email}
          </a>
        </div>
        <div className="flex items-center text-gray-700">
          <Globe size={16} className="mr-2" />
          <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {profileData.website}
          </a>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
            <Twitter size={16} className="mr-1" />
            {profileData.twitter}
          </button>
          <button className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3">
            <FaGithub size={16} className="mr-1" />
            {profileData.github}
          </button>
        </div>
      </div> */}
			<div className="space-y-2">
				<div className="flex items-center text-gray-700">
					<Mail size={16} className="mr-2" />
					<a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
						{profileData.email}
					</a>
				</div>
				<div className="flex items-center text-gray-700">
					<Globe size={16} className="mr-2" />
					<a
						href={`https://${profileData.website}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						{profileData.website}
					</a>
				</div>
				<div className="flex gap-2 mt-4">
					<a
						href={`https://twitter.com/${profileData.twitter}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3"
					>
						<Twitter size={16} className="mr-1" />
						{profileData.twitter}
					</a>
					<a
						href={`https://github.com/${profileData.github}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md py-1 px-3"
					>
						<FaGithub size={16} className="mr-1" />
						{profileData.github}
					</a>
				</div>
			</div>
    </div>
  );
}