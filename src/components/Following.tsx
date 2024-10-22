// Following.tsx
import React from "react";

interface Following {
  avatar: string;
}

const Following: React.FC = () => {
  const following: Following[] = [
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
    { avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">People You Follow</h2>
      <div className="flex flex-wrap">
        {following.map((person, index) => (
          <img
            key={index}
            src={person.avatar}
            alt={`Following ${index + 1}`}
            className="w-12 h-12 rounded-full m-1"
          />
        ))}
      </div>
    </div>
  );
};

export default Following;
