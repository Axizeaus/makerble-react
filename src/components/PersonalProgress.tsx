import React from "react";
import { Plus } from "lucide-react";

interface ProgressData {
  title: string;
  value: number;
  color: string;
}

interface PersonalProgressProps {
  progressData: ProgressData[];
}

const PersonalProgress: React.FC<PersonalProgressProps> = ({
  progressData,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Personal Progress</h2>
        <a href="/board" className="text-blue-600 hover:underline">
          Board
        </a>
      </div>
      {progressData.map((data, index) => (
        <div key={index} className="flex items-center mb-4">
          <div
            className={`w-3 h-3 rounded-full mr-3`}
            style={{ backgroundColor: data.color }}
          />
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{data.title}</span>
              <span>{data.value}%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${data.value}%` }}
              />
            </div>
          </div>
          <button className="ml-3 text-blue-600 hover:text-blue-800">
            <Plus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonalProgress;
