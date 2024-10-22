// Followers.tsx
import React from "react";

interface Follower {
  avatar: string;
}

const Followers: React.FC = () => {
  const followers: Follower[] = [
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Followers</h2>
      <div className="flex flex-wrap">
        {followers.map((follower, index) => (
          <img
            key={index}
            src={follower.avatar}
            alt={`Follower ${index + 1}`}
            className="w-12 h-12 rounded-full m-1"
          />
        ))}
      </div>
    </div>
  );
};

export default Followers;
