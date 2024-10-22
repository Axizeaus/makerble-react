import React from "react";
import PersonalProgress from "./PersonalProgress";

const progressData = [
  { title: "JavaScript Skills", value: 75, color: "#f39c12" },
  { title: "React Knowledge", value: 60, color: "#3498db" },
  { title: "TypeScript Proficiency", value: 50, color: "#9b59b6" },
  { title: "CSS Mastery", value: 80, color: "#e74c3c" },
];

const PersonalProgressList: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <PersonalProgress progressData={progressData} />
    </div>
  );
};

export default PersonalProgressList;
