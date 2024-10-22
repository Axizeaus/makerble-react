// Boards.tsx
import React from "react";
import { SquareKanbanIcon, CheckCircle, Star, Settings } from "lucide-react";
import Card from "@/components/Card";

interface BoardItem {
  id: number;
  title: string;
  description: string;
  status: string;
}

const dummyBoards: BoardItem[] = [
  {
    id: 1,
    title: "Board One",
    description: "Description for Board One.",
    status: "Active",
  },
  {
    id: 2,
    title: "Board Two",
    description: "Description for Board Two.",
    status: "Inactive",
  },
  {
    id: 3,
    title: "Board Three",
    description: "Description for Board Three.",
    status: "Pending",
  },
];

const Boards: React.FC = () => {
  return (
    <div className="relative p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="absolute top-4 right-4 text-brown-600">
        <Settings
          size={24}
          className="text-gray-500 ml-3 cursor-pointer hover:text-green-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Boards</h1>
      <div className="space-y-4">
        {dummyBoards.map((board) => (
          <Card
            key={board.id}
            icon={SquareKanbanIcon}
            title={board.title}
            description={board.description}
            status={board.status}
            statusIcon={
              board.status === "Active" ? (
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

export default Boards;
