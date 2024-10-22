import React from "react";
import { Settings } from "lucide-react"; // Import the cog icon

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  status: string;
  statusIcon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  status,
  statusIcon,
}) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
      <Icon size={32} className="text-blue-500 mr-3" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center mt-2">
          {statusIcon}
          <span className="text-sm text-gray-700">{status}</span>
        </div>
      </div>
      <Settings
        size={24}
        className="text-gray-500 ml-3 cursor-pointer hover:text-green-500"
      />
    </div>
  );
};

export default Card;
