import { CirclePlusIcon } from "lucide-react";
import React, { useState } from "react";
import Task from "./Task";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>([
    { title: "Learn React", completed: false },
    { title: "Build a To-Do App", completed: false },
    { title: "Write Documentation", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleToggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border rounded p-2 flex-grow mr-2"
        />
        <button onClick={handleAddTask}>
          <CirclePlusIcon />
        </button>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          completed={task.completed}
          onToggle={() => handleToggleTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
