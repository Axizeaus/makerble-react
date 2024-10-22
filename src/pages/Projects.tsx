// Projects.tsx
import React from "react";
import { Settings, Folder, CheckCircle, Star } from "lucide-react";
import Card from "@/components/Card";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
}

const dummyProjects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A brief description of Project Alpha.",
    status: "Completed",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "A brief description of Project Beta.",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A brief description of Project Gamma.",
    status: "Pending",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="relative p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="absolute top-4 right-4 text-brown-600">
        <Settings
          size={24}
          className="text-gray-500 ml-3 cursor-pointer hover:text-green-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Projects</h1>
      <div className="space-y-4">
        {dummyProjects.map((project) => (
          <Card
            key={project.id}
            icon={Folder}
            title={project.title}
            description={project.description}
            status={project.status}
            statusIcon={
              project.status === "Completed" ? (
                <CheckCircle size={16} className="text-green-500 mr-1" />
              ) : (
                <Star size={16} className="text-yellow-500 mr-1" />
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
