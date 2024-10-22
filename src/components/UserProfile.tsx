import React from "react";

interface UserProfileProps {
  avatar: string; // URL for the user's avatar
  name: string; // User's name
  onClick?: () => void; // Optional click handler
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name, onClick }) => {
  return (
    <div
      className="flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default UserProfile;
