import React from 'react';
import { User, Mail, Briefcase, Pencil } from "lucide-react";
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
const Profile = () => {
    const user2=useSelector((state:RootState)=>state.auth.user)
    const user = {
        name: "Milon Hossain",
        email: user2.userEmail,
        role: "User",
        profilePic: "https://i.pravatar.cc/150?img=3",
      };
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-200"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" /> {user.email}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-green-500" /> {user.role}
          </p>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-4">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <Pencil className="w-5 h-5 mr-2" /> Edit Profile
        </button>
      </div>
    </div>
    );
};

export default Profile;