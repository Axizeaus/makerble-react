// Home.tsx
import PostList from "@/components/PostList";
import Contacts from "@/components/Contacts";
import PersonalProgressList from "@/components/PersonalProgressList";
import TaskList from "@/components/TaskList";
import AddPost from "@/components/AddPost";

const Home = (): JSX.Element => {
  return (
    <div className="p-4 flex flex-col md:flex-row text-sm">
      <div className="md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
        <Contacts />
      </div>
      <div className="md:w-2/4 lg:w-3/5 mb-4 md:mb-0">
        <AddPost />
        <PostList />
      </div>
      <div className="md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
        <PersonalProgressList />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
