import { CheckSquare, Phone, User } from "lucide-react";
import PostList from "@/components/PostList";
import PersonalProgressList from "@/components/PersonalProgressList";
import TaskList from "@/components/TaskList";
import AddPost from "@/components/AddPost";
import Contacts from "@/components/Contacts";

const MobileHome = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 flex flex-col text-sm">
      <div className="flex justify-around mt-4 p-2 rounded">
        <button
          onClick={() => scrollToSection("contacts")}
          className="flex flex-col items-center"
        >
          <Phone className="text-xl" />
          <span className="text-xs">Contacts</span>
        </button>
        <button
          onClick={() => scrollToSection("task")}
          className="flex flex-col items-center"
        >
          <CheckSquare className="text-xl" />
          <span className="text-xs">Tasks</span>
        </button>
        <button
          onClick={() => scrollToSection("progress")}
          className="flex flex-col items-center"
        >
          <User className="text-xl" />
          <span className="text-xs">Progress</span>
        </button>
      </div>

      <main>
        <AddPost />
        <PostList />
      </main>

      <aside className="mt-4">
        <div id="contacts">
          <Contacts />
        </div>
        <div id="progress">
          <PersonalProgressList />
        </div>
        <div id="task">
          <TaskList />
        </div>
      </aside>
    </div>
  );
};

export default MobileHome;
