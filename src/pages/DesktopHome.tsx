// DesktopHome.tsx
import PostList from "@/components/PostList";
import Contacts from "@/components/Contacts";
import PersonalProgressList from "@/components/PersonalProgressList";
import TaskList from "@/components/TaskList";
import AddPost from "@/components/AddPost";

const DesktopHome = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row text-sm">
      <aside id="contacts" className="md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
        <Contacts />
      </aside>

      <main className="md:w-2/4 lg:w-3/5 mb-4 md:mb-0">
        <AddPost />
        <PostList />
      </main>

      <aside className="md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
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

export default DesktopHome;
