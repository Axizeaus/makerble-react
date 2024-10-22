// Task.tsx
import React from "react";

interface TaskProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({
  title,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="mr-2"
        />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {title}
        </span>
      </div>
      <button onClick={onDelete} className="text-red-500 hover:underline">
        Delete
      </button>
    </div>
  );
};

export default Task;
